import React, {useState,useEffect} from 'react'; 
import axios from 'axios'; 
import useGetCall from '../../hooks/useGetCall'; 

const Listings = (props) => { 

    let [postedEquipment] = useGetCall('/api/listings')

    return(
        <div>
            {postedEquipment.map((e,index) => {
                return(
                console.log(e), 
                <div className = 'equipment-container' 
                key = {index}
                onClick={() => props.history.push(`/equipmentlisting/${e.listing_id}`)}
                > 
                <h1>in here</h1>
                    <h2>{e.make}</h2>
                    <h2>{e.model} </h2>
                    <p> {e.hours} </p>
                    <p> {e.description} </p>
                </div>
                )
            })
            }
        </div>
    )
}

export default Listings;