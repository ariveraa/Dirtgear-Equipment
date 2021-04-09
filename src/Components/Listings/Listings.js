import React, {useState,useEffect} from 'react'; 
import './Listings.css'
import useGetCall from '../../hooks/useGetCall'; 

const Listings = (props) => { 

    let [postedEquipment] = useGetCall('/api/listings')

    return(
        <div id= 'listing-container'>
            {postedEquipment.map((e,index) => {
                return(
                // console.log(e), 
                <div className = 'equipment-container' 
                key = {index}
                onClick={() => props.history.push(`/equipmentlisting/${e.listing_id}`)}
                > 
                <h1>{e.make} {e.model}</h1>
                    <p> Hours:{e.hours} </p>
                    <p>{e.description} </p>
                </div>
                )
            })
            }
        </div>
    )
}

export default Listings;