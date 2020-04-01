import React, {useState} from 'react';
import axios from 'axios'; 
import swal from 'sweetalert2'; 


const Registration = (props) =>{ 
    const [inputs, setInput] = useState({firstName:'', lastName:'', email: '', password: '' })

    const register = (firstName, lastName, email, password) => { 
        axios.post('/auth/register',{firstName,lastName,email,password}).then(res => {
            swal.fire({
                title: 'Welcome',
                text: 'Thank You for Registering', 
                icon:'Success',
                confirmButtonText: 'OK'
            })
            props.history.push('/')}).catch(err => console.log(err))
    }

    return(
        <div className = 'Registration'> 
            <h2>Registration</h2>
            <p>First Name</p>
            <input onChange = {e => {setInput({...inputs,firstName: e.target.value}) }}/>
            <p>Last Name</p>
            <input onChange = {e => {setInput({...inputs,lastName: e.target.value}) }} /> 
            <p>Email</p>
            <input onChange = {e => {setInput({...inputs,email: e.target.value}) }} /> 
            <p>Password</p>
            <input onChange = {e => {setInput({...inputs,password: e.target.value}) }} /> 
            <button onClick = {() =>register(inputs.firstName,inputs.lastName,inputs.email,inputs.password)}/>
        </div>
    )
}

export default Registration