module.exports ={ 
    getProfile: async(req,res) => { 
        const db = req.app.get('db'); 
        if(!req.session.user){ 
            res.status(204).send('No one is logged in')
        }
        let [phoneNumber] = await db.profile.get_phone(req.session.user.user_id)
        let [address] = await db.profile.get_address(req.session.user.user_id)
        let [city] = await db.profile.get_city(req.session.user.user_id)
        let [zipCode] = await db.profile.get_zipcode(req.session.user.user_id)

        if(!phoneNumber){ 
            phoneNumber = {phone_number: ''}
        }
        if(!address){ 
            address = {address: ''}
        }
        if(!city){ 
            city = {city:''}
        }
        if(!zipCode){ 
            zipCode = {zipcode: ''}
        }

        // console.log(address)
        const userInfo = {...req.session.user, 
            phoneNumber : phoneNumber.phone_number, 
            address: address.address,
            city: city.city, 
            zipCode: zipCode.zipcode 
        }
        
        res.status(200).send(userInfo)
    }, 
    saveChanges: async(req,res)  => { 
        const{firstName,lastName,email,phoneNumber,address,city,zipCode} = req.body; 
        const db = req.app.get('db'); 

        await db.profile.save_required(req.session.user.user_id, firstName,lastName,email)
        
        if(phoneNumber){
            const phoneCheck = await db.profile.check_phone(req.session.user.user_id) 
            if(phoneCheck){ 
                await db.profile.update_phone(req.session.user.user_id, phoneNumber)
            }
            else{
                await db.profile.save_phone(req.session.user.user_id, phoneNumber)
            }   
        }
        if(address){ 
            const addressCheck = await db.profile.check_address(req.session.user.user_id)
            if(addressCheck){
                await db.profile.update_address(req.session.user.user_id, address)
            }
            else{ 
                await db.profile.save_address(req.session.user.user_id, address)
            } 
        }
        if(city){ 
            const cityCheck = await db.profile.check_city(req.session.user.user_id)
            if(cityCheck){
                await db.profile.update_address(req.session.user.user_id, address)
            }
            else{ 
                await db.profile.save_city(req.session.user.user_id, address)
            } 
        }
        if(zipCode){ 
            const zipcodeCheck = await db.profile.check_zipcode(req.session.user.user_id)
            if(zipcodeCheck){ 
                await db.profile.update_zipcode(req.session.user.user_id,zipCode)
            }
            else{ 
                await db.profile.save_zipcode(req.session.user.user_id,zipCode)
            }
            
        }

        res.sendStatus(200)

    }
}