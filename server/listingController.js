module.exports ={ 
    getListings: async(req,res) => { 
        const db = req.app.get('db'); 
        let listings = await db.listings.get_listings(); 

        // console.log(listings)

        res.status(200).send(listings); 
    }, 
    getEquipmentListing: async(req,res) => { 
        const db = req.app.get('db'); 
        const {id} = req.params;
        let equipmentListing = await db.listings.get_equipment_listing(id);
        
        res.status(200).send(equipmentListing)
    },
    postEquipment: async(req,res) => { 
        const db = req.app.get('db'); 
        const {make,model,hours,description} = req.body; 
        const userId  = req.session.user.user_id; 
        await db.listings.post_equipment(userId,make,model,hours,description)

       res.sendStatus(200)
    }
    
} 
