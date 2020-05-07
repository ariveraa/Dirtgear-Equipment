import React,{useState,useEffect} from 'react';

const MyListings = (props) => { 

    return(
        <div> 
            <button onClick = {() =>  props.history.push('/newequipment')}>Post Equipment </button> 
        </div>
    )
}

export default MyListings; 