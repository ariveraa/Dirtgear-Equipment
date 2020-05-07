import React, {useState} from 'react';
import axios from 'axios'; 

const ListingForm = (props) => { 

    const [inputs , setInput] = useState({make: '', model: '', hours: '', description: ''}); 

    const postEquipment = () => { 
        const {make, model, hours, description} = inputs; 
        console.log(inputs)
        axios.post('/api/listings', {make,model,hours,description})
    }


return ( 
    <div> 
        <p>Make:</p>
        <input onChange ={(e) => setInput({...inputs, make: e.target.value})} /> 
        <p>Model:</p>
        <input onChange ={(e) => setInput({...inputs, model: e.target.value})} /> 
        <p>Hours:</p>
        <input onChange ={(e) => setInput({...inputs, hours: e.target.value})} /> 
        <p>Description:</p>
        <input onChange ={(e) => setInput({...inputs, description: e.target.value})} /> 
        <button onClick  = {postEquipment}>Post Equipment</button>
    </div>
)

} 

export default ListingForm ;