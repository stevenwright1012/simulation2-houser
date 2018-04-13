import React from 'react';

export default function House(props){
    var {name, address, city, state, zip} = props
    return(
        <div>
            {name},
            {address},
            {city},
            {state},
            {zip}
            <button>Delete</button>
        </div>
    )
}