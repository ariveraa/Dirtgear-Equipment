require('dotenv').config()
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const express = require('express'), 
    massive = require('massive'), 
    cors = require('cors'),
    session = require('express-session'),
    {SESSION_SECRET,CONNECTION_STRING,SERVER_PORT, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env, 
    authCtrl = require('./authController'), 
    profileCtrl = require('./profileController'),
    listingCtrl = require('./listingController'), 
    aws = require('aws-sdk'), 
    app = express();

app.use(express.json()); 
app.use(cors()); 

//creates session 
app.use(session({
    resave: false, 
    saveUninitialized:true, 
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24*365}
}))

//connects to db and  listens for client
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`));
}).catch(err => console.log(err))

//s3 setup 
app.get('/api/signs3', (req,res) => {
    aws.config = {
        region: 'us-west-1', 
        accessKeyId:AWS_ACCESS_KEY_ID, 
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }; 
    const s3 = new aws.S3(); 
    const fileName = req.query['file-name']; 
    const fileType = req.query['file-type']; 
    const s3Params = { 
        Bucket: S3_BUCKET,
        Key: fileName, 
        ContentType: fileType, 
        ACL: 'public-read'
    }; 
    s3.getSignedUrl('putObject', s3Params, (err,data)=> { 
        if(err){ 
            console.log(err); 
            return res.end(); 
        }
        const returnData = { 
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        }; 
        return res.send(returnData)
    })
})

// auth endpoints
app.post('/auth/register',authCtrl.register); 
app.post('/auth/login', authCtrl.login); 
app.post('/auth/logout', authCtrl.logout);

//profile endpoints
app.get('/api/user', profileCtrl.getProfile); 
app.post('/api/profileInfo', profileCtrl.saveChanges)

// Listing endpoints
app.get('/api/listings', listingCtrl.getListings)
app.get('/api/userlistings',listingCtrl.getUserListings)
app.get('/api/equipmentlisting/:id',listingCtrl.getEquipmentListing)
app.post('/api/listings', listingCtrl.postEquipment)



