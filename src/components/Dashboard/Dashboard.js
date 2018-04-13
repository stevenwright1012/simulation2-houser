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
                    id={house.id}
                    deleteFn={this.deleteHouse}/>
        })
        return(
            <div>
                Dashboard
                <Link to='/Wizard'>
                    <button>Add New Property</button>
                </Link>
                {displayList}
            </div>
        )
    }
}

export default Dashboard