import React, {useState} from 'react';
import axios from 'axios'; 
import {v4 as randomString} from 'uuid'; 
import swal from 'sweetalert2'; 
import Dropzone from 'react-dropzone'; 


const ListingForm = (props) => { 

    const [inputs , setInput] = useState({make: '', model: '', hours: '', description: ''}); 
    const[isUploading, setUploading] = useState(false); 
    const [Picture, setPicture] = useState(''); 

    const postEquipment = () => { 
        const {make, model, hours, description} = inputs; 
        console.log(inputs)
        axios.post('/api/listings', {make,model,hours,description})
    }

    const getSignedRequest = ([file]) => { 
        
        setUploading(true); 
        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`; 
        axios.get('/api/signs3', { 
            params: {
                'file-name': fileName, 
                'file-type': file.type
            }
        })
        .then(response => { 
            const {signedRequest,url} = response.data; 
            uploadFile(file,signedRequest,url); 
        })
        .catch(err => { 
            console.log(err)
        })
    }
    
    const uploadFile = (file,signedRequest,url)  => { 
        const options = { 
            headers: {
                'Content-Type': file.type
            }
        }; 
        axios.put(signedRequest,file,options)
        .then(res => { 
            setUploading(false)
            setPicture(url)
        })
        .catch(err => { 
            setUploading(false); 
            swal.fire({
                title: 'Error!',
                text: 'Photo Not Uploaded', 
                icon:'error',
                confirmButtonText: 'OK'
            })
         
            if(err.response === 403){ 
                console.log(`Your request for a signed URL failed with a status 403.`); 
            }
            else {
                console.log(`ERROR: ${err.status}\n ${err.stack}`);
            }
        })
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

export default ListingForm;