import React, {useState} from 'react';
import '../Nav/nav.css'; 
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import {withRouter} from 'react-router-dom'; 
import session from 'express-session';
import axios from 'axios';
import swal from 'sweetalert2';

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
    const logout = () => { 
        axios.post('/auth/logout').then(res => 
            {swal.fire({
                title: 'Goodbye',
                text: 'You have logged out', 
                icon:'success',
                confirmButtonText: 'OK'
            })}
            )
        session.user = null
    }
    return(
        <div className = 'nav-container'> 
            <img src = 'https://cdn.shopify.com/s/files/1/0177/7919/6004/files/dirtgearcologo_160x.png?v=1550787810' 
            alt = 'img not available' 
            className = 'nav-selector'
            onClick = {() => props.history.push('/')}
             />



            <div className = 'nav-selector'  onClick = {() => props.history.push('/equipment')}>Find Equipment</div> 
            <div className = 'nav-selector' onClick = {() => checkLogin('newequipment')} >Create Listing</div>
            
            <AccountBoxIcon fontSize = 'large' className = 'nav-selector' onClick = {showDropdown}>Login</AccountBoxIcon>
            {toggleDropdown ? (
                <div id = 'drop-down'>

                {!session.user ? 
                    (<div id = 'show-login'>
                        <div className = 'dropdown-selector'  onClick = {() => {props.history.push('login'); showDropdown()}}>Login</div>
                        <div className = 'dropdown-selector'  onClick = {() => {props.history.push('/registration'); showDropdown()}}>Register</div>
                    </div>):
                    (<div className = 'welcome'>Welcome {session.user}</div>)
                }
                
                <div className = 'dropdown-selector'  onClick = {() => {checkLogin('profile'); showDropdown() }}>Profile</div>
                <div className = 'nav-selector'  onClick = {() => {checkLogin('myequipment'); showDropdown()}}>My Equipment</div> 
                {session.user ? 
                    (<div className= 'dropdown-selector' onClick = {() => {logout(); showDropdown()}}>Logout</div>):
                    (null)
                }
                </div>  
            ):(null
            )}

        </div>
    )
}
export default withRouter(Nav); 