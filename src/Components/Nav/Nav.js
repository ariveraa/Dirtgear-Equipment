import React from 'react';
import '/nav.scss'; 
import {withRouter} from 'react-router-dom'; 

const Nav = (props) => { 

    return(
        <div className = 'nav-container'> 
            {/* <img src = './dirt_gear_logo.png' /> */}
            <div className = 'nav-slector' onClick = {() => props.history.push('/')}>Home</div>
            <div className = 'nav-slector' onClick = {() => props.history.push('/login')}>Login</div>
            <div className = 'nav-slector'  onClick = {() => props.history.push('/registration')}>Register</div>
            <div className = 'nav-slector'  onClick = {() => props.history.push('/profile') }>Profile</div>
            <div className = 'nav-slector'  onClick = {() => props.history.push('/equipment')}>Equipment</div> 
            <div className = 'nav-slector'  onClick = {() => props.history.push('/myequipment')}>My Equipment</div> 
        </div>
    )
}
export default withRouter(Nav); 