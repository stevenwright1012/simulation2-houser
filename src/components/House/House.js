import React from 'react';

export default function House(props){
    var {name, address, city, state, zip, id} = props
    return(
        <div>
            {name},
            {address},
            {city},
            {state},
            {zip}
            <button onClick={() => props.deleteFn(id)}>Delete</button>
        </div>
    )
}