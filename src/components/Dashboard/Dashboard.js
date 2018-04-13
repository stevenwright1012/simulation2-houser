import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';


class Dashboard extends Component{

    render(){
        return(
            <div>
                Dashboard
                <House />
                <Link to='/Wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}

export default Dashboard