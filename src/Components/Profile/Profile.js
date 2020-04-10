import React, {useState,useEffect} from 'react';
import axios from 'axios'; 

const Profile = (props) => { 

    const[profileInfo, setInfo] = useState({})

    useEffect(() => {axios.get('/api/user').then(res => setInfo(res.data))},[])
    
    const saveChanges = (firstName,lastName,email,phoneNumber, address, zipCode) => { 
        axios.post('/api/profileInfo', {firstName,lastName,email,phoneNumber,address,zipCode}).then(res => props.history.push('/profile'))
    }

    const{first_name,last_name,email,phoneNumber,address,city,zipCode} = profileInfo

    return( 
        console.log(profileInfo),
       
        <div className = 'profile'> 
            
            <h2>My Profile</h2>
            <p>First Name</p>
            <input type ='text' value = {first_name} onChange = {e=>setInfo({...profileInfo , first_name: e.target.value})} />
            <p>Last Name</p>
            <input type ='text' value = {last_name} onChange = {e=>setInfo({...profileInfo , last_name: e.target.value})} />
            <p>Email</p>
            <input type ='text' value = {email} onChange = {e=>setInfo({...profileInfo , email: e.target.value})} />
            <p>Phone Number</p>
            <input type ='text' value = {phoneNumber} onChange = {e=>setInfo({...profileInfo , phone_number: e.target.value})} />
            <p>Address</p>
            <input type ='text' value = {address} onChange = {e=>setInfo({...profileInfo , address: e.target.value})} />
            <p>City</p>
            <input type ='text' value = {city} onChange = {e=>setInfo({...profileInfo , city: e.target.value})} />
            <p>Zip Code </p>
            <input type ='text' value = {zipCode} onChange = {e=>setInfo({...profileInfo , zip_code: e.target.value})} />
            <p>User Id: {profileInfo.user_id}</p>
            <button onClick = {() => saveChanges(first_name,last_name,email,phoneNumber,address,city,zipCode)}>Save Changes</button>
        </div>
    )
}

export default Profile