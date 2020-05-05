require('dotenv').config()
const express = require('express'), 
    massive = require('massive'), 
    cors = require('cors'),
    session = require('express-session'),
    {SESSION_SECRET,CONNECTION_STRING,SERVER_PORT} = process.env, 
    authCtrl = require('./authController'), 
    profileCtrl = require('./profileController'),
    listingCtrl = require('./listingController'), 
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
})

// auth endpoints

app.post('/auth/register',authCtrl.register); 
app.post('/auth/login', authCtrl.login); 
app.post('/auth/logout', authCtrl.logout);

//profile endpoints
app.get('/api/user', profileCtrl.getProfile); 
app.post('/api/profileInfo', profileCtrl.saveChanges)

// Listing endpoints
app.get('api/listings', listingCtrl.getListings)

