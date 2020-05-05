module.exports ={ 
    getListings: async(req,res) => { 
        const db = req.app.get('db'); 
        let [listings] = await db.getListings(); 

        res.status(200).send(listings); 
    }, 
    postEquipment: async(res,req) => { 
        const db = req.app.get('db'); 
        const {userId, make, model, hours, description} = req.body; 

       await db.listings.postEquipment(userId,make,model,hours,description)

       res.send.status(200)
    }

} 
