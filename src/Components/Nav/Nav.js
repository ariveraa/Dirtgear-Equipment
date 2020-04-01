import React from 'react';
import axios from 'axios'; 


const Nav = (props) => { 

    return(
        <div> 
            {/* <img src = './dirt_gear_logo.png' /> */}
            <div onClick = {() => props.history.push('/')}>Home</div>
            <div onClick = {() => props.history.push('/login')}>Login</div>
            <div onClick = {() => props.history.push('/registration')}>Register</div>
            <div onClick = {() => props.history.push('/profile') }>Profile</div>
        </div>
    )
}
export default Nav; 