const bcrypt = require('bcryptjs'); 

module.exports = {
    register: async(req,res) => { 
        const{firstName,lastName,email, password} = req.body; 
        const db = req.app.get('db'); 
        const profilePic = 'no pic'
        let [user] = await db.auth.get_user(email); 
        
        if(user){ 
            res.status(400).send('Email is already in use')
        }
        let salt = bcrypt.genSaltSync(10); 
        let hash = bcrypt.hashSync(password, salt); 
        
        let [newUser] = await db.auth.register(firstName,lastName,email,profilePic,hash)
        delete newUser.hash; 
        req.session.user = newUser; 
        res.status(201).send(req.session.user)
    },
    login: async(req,res) => { 
        const{email,password} = req.body; 
        const db = req.app.get('db'); 

        let [user] = await db.auth.get_user(email)
        if(!user){ 
           return res.status(400).send('Email not Found')
        }
        let authenticated = bcrypt.compareSync(password, user.password)

        if(!authenticated){ 
            return res.status(401).send('Incorrect Password')
        }
        delete user.password; 
        req.session.user = user; 
        res.status(202).send(req.session.user)
    },
    logout: (req,res) => { 
        req.session.destroy(); 
        res.sendStatus(200); 
    }
}