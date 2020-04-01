import React, {useEffect} from 'react';
import axios from 'axios'; 

const Profile = (props) => { 

    useEffect(() => {axios.post('/auth/')},[])

    return( 
        <div className = 'profile'> 
            <h2>My Profile</h2>
            <p>First Name</p>
            <input />
        </div>
    )
}

export default Profile