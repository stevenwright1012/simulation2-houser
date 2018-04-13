import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            homes: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
    componentDidMount(){
        axios.get('/api/houses').then(res => {
            console.log(res);
            
            this.setState({
               homes: res.data,
            })
        })
    }
    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            this.componentDidMount();
        })
    }
    render(){
        var displayList = this.state.homes.map((house, i) =>{
            return <House key={i}
                    name ={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zipcode}
                    image_url={house.image}
                    monthlyMortgage={house.monthly_mortgage}
                    desiredRent={house.desired_rent}
                    id={house.id}
                    deleteFn={this.deleteHouse}/>
        })
        return(
            <div>
                Dashboard
                <Link to='/Wizard/step1'>
                    <button>Add New Property</button>
                </Link>
                {displayList}
            </div>
        )
    }
}

export default Dashboard