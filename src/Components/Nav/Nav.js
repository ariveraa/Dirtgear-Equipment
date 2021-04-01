import React, {useState} from 'react';
import '../Nav/nav.css'; 
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import {withRouter} from 'react-router-dom'; 
import session from 'express-session';

const Nav = (props) => { 
    const [toggleDropdown, setDropdown] = useState(false);
    //toggles the dropdown menu 
    const showDropdown = () => {
        setDropdown(!toggleDropdown)
    }
    const checkLogin = (name) => {
        if(session.user){props.history.push('/' + name)}
        else{props.history.push('/login')}
    }
    return(
        <div className = 'nav-container'> 
            <img src = 'https://cdn.shopify.com/s/files/1/0177/7919/6004/files/dirtgearcologo_160x.png?v=1550787810' 
            alt = 'img not available' 
            className = 'nav-slector'
            onClick = {() => props.history.push('/')}
             />



            <div className = 'nav-selector'  onClick = {() => props.history.push('/equipment')}>Find Equipment</div> 
            
            <AccountBoxIcon fontSize = 'large' className = 'nav-selector' onClick = {showDropdown}>Login</AccountBoxIcon>
            {toggleDropdown ? (
                <div id = 'dropDown'>
                <div className = 'drop-down-selector'  onClick = {() => props.history.push('/login')}>Login</div>
                <div className = 'drop-down-selector'  onClick = {() => props.history.push('/registration')}>Register</div>
                <div className = 'drop-down-selector'  onClick = {() => props.history.push('/profile') }>Profile</div>
                <div className = 'nav-selector'  onClick = {() => checkLogin('myequipment')}>My Equipment</div> 
                </div>  
            ):(null
            )}

        </div>
    )
}
export default withRouter(Nav); 