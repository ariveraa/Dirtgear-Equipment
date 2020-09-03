import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Registration from './Components/Registration/Registration';
import Profile from './Components/Profile/Profile'; 
import Equipment from './Components/Listings/Listings'; 
import ListingForm from './Components/ListingForm/ListingForm'; 
import MyListings from './Components/MyListings/MyListings';
import EquipmentListing from './Components/EquipmentListing/EquipmentListing';


export default(
    <Switch> 
        <Route exact path = '/' component = {Home} />
        <Route path = '/login' component = {Auth} />
        <Route path = '/registration' component = {Registration} />
        <Route path = '/profile' component = {Profile} />
        <Route path = '/equipment' component = {Equipment} /> 
        <Route path = '/myequipment' component = {MyListings} /> 
        <Route path = '/newequipment' component = {ListingForm} />
        <Route path = '/equipmentlisting/:id' component ={EquipmentListing} />
    </Switch>
)