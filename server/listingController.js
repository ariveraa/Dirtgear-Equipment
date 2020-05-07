module.exports ={ 
    getListings: async(req,res) => { 
        const db = req.app.get('db'); 
        let [listings] = await db.getListings(); 

        res.status(200).send(listings); 
    }, 
    postEquipment: async(req,res) => { 
        const db = req.app.get('db'); 
        const {make,model,hours,description} = req.body; 
        const userId  = req.session.user.user_id; 
        await db.listings.post_equipment(userId,make,model,hours,description)

       res.sendStatus(200)
    }
} 
