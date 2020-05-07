import React from 'react';
import {withRouter} from 'react-router-dom'; 

const Nav = (props) => { 

    return(
        <div> 
            {/* <img src = './dirt_gear_logo.png' /> */}
            <div onClick = {() => props.history.push('/')}>Home</div>
            <div onClick = {() => props.history.push('/login')}>Login</div>
            <div onClick = {() => props.history.push('/registration')}>Register</div>
            <div onClick = {() => props.history.push('/profile') }>Profile</div>
            <div onClick = {() => props.history.push('/equipment')}>Equipment</div> 
            <div onClick = {() => props.history.push('/myequipment')}>My Equipment</div> 
        </div>
    )
}
export default withRouter(Nav); 