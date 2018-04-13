import React from 'react';

export default function House(props){
    var {name, address, city, state, zip, image_url, monthlyMortgage, desiredRent, id} = props
    return(
        <div>
            Name: 
            {name},
            Address: 
            {address},
            City: 
            {city},
            State: 
            {state},
            Zipcode: 
            {zip},
            image_url: 
            {image_url},
            Monthly Mortgage: 
            {monthlyMortgage},
            Desired Rent: 
            {desiredRent},
            <button onClick={() => props.deleteFn(id)}>Delete</button>
        </div>
    )
}