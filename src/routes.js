import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Registration from './Components/Registration/Registration';
import Profile from './Components/Profile/Profile'; 
import Equipment from './Components/Listings/Listings'; 


export default(
    <Switch> 
        <Route exact path = '/' component = {Home} />
        <Route path = '/login' component = {Auth} />
        <Route path = '/registration' component = {Registration} />
        <Route path = '/profile' component = {Profile} />
        <Route path = '/equipment' component = {Equipment} /> 
    </Switch>
)