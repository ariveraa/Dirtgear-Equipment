import React,{useState,useEffect} from 'react'; 
import axios from 'axios';

const EquipmentListing = (props) =>{ 

    useEffect(() => {
        const{id} = props.match.params; 
        axios.get(`/api/equipmentlisting/${id}`).then( res => { 
                handleMount({...mounting,userId: res.data[0].user_id,
                                         make: res.data[0].make, 
                                         model: res.data[0].model, 
                                         hours: res.data[0].hours, 
                                         description: res.data[0].description

                })
            })
    },[])

    const [mounting, handleMount] = useState({userId: '', make: '', model: '', hours: null, description: ''})

    return( 
        <div> 
            <h1>{mounting.make}</h1>
            <span>{mounting.model}</span>
            <span>{mounting.hours}</span>
            <span>{mounting.description}</span>
        
        </div>
    )
}

export default EquipmentListing; 