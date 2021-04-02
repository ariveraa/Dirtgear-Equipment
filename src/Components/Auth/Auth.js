import React, {useState} from 'react';
import axios from 'axios'; 
import swal from 'sweetalert2';
import session from 'express-session';

const Auth = (props) => { 
    const [inputs, setInputs] = useState({email:'', password:''})

    const login = (email, password) => { 
        
        axios.post('/auth/login',{email, password}).then(res => 
          {  swal.fire({
                title: 'Welcome',
                text: 'You have logged in', 
                icon:'success',
                confirmButtonText: 'OK'
            })
            session.user = res.data.first_name 
            props.history.push('/')
        }
           
        )
        .catch(err =>{
            if(err.message ==='Request failed with status code 400'){
                swal.fire({
                    title: 'Error',
                    text: 'Email not found', 
                    icon:'error',
                    confirmButtonText: 'OK'
                })
            }
            if(err.message === 'Request failed with status code 401'){
                swal.fire({
                    title: 'Error',
                    text: 'Incorrect Password', 
                    icon:'error',
                    confirmButtonText: 'OK'
                })
                
            }
        })
    }
    

    return( 
        <div className = 'Login'> 
            <h2>Login</h2>
            <p>Email</p>
            <input onChange = {e => setInputs({...inputs,email: e.target.value})} />
            <p>Password</p>
            <input onChange = {e => setInputs({...inputs,password: e.target.value})} />
            <button onClick = {() => login(inputs.email,inputs.password)}>Sign In</button>
            <button>Cancel</button>
            <div  onClick = {() => props.history.push('/registration')}>Not A Member Click Here To Register</div>
        </div>
    )
}

export default Auth; 