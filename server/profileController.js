module.exports ={ 
    getProfile: (req,res) => { 
        if(!req.session.user){ 
            res.status(204).send('No one is logged in')
        }
        res.status(200).send(req.session.user)
    }, 
    saveChanges: async(req,res)  => { 
        const{firstName,lastName,email,phoneNumber,address,zipCode} = req.body; 
        const db = req.app.get('db'); 

        
    }
}