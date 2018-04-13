import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
        }
        this.handleName = this.handleName.bind(this);
        this.addHouse = this.addHouse.bind(this);
    }
    handleName(e){
        this.setState({
            name: e
        })
    };
    handleAddress(e){
        this.setState({
            address: e
        })
    };
    handleCity(e){
        this.setState({
            city: e
        })
    };
    handleState(e){
        this.setState({
            state: e
        })
    };
    handleZip(e){
        this.setState({
            zipcode: e
        })
    };
    addHouse(){
        axios.post('/api/houses',{name: this.state.name,
                                  address: this.state.address,
                                  city: this.state.city,
                                  state: this.state.state,
                                  zipcode: this.state.zipcode}).then(() =>{
                                      this.setState({
                                        name: "",
                                        address: "",
                                        city: "",
                                        state: "",
                                        zipcode: "",
                                      })
                                  })
    }
    render(){
        return(
            <div>
                Wizard
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <div>
                    Name
                    <input type="text" value={this.state.name} onChange={(e) => this.handleName(e.target.value)}/>
                </div>
                <div>
                    Address
                    <input type="text" value={this.state.address} onChange={(e) => this.handleAddress(e.target.value)}/>
                </div>
                <div>
                    City
                    <input type="text" value={this.state.city} onChange={(e) => this.handleCity(e.target.value)}/>
                </div>
                <div>
                    State
                    <input type="text" value={this.state.state} onChange={(e) => this.handleState(e.target.value)}/>
                </div>
                <div>
                    Zip
                    <input type="text" value={this.state.zipcode} onChange={(e) => this.handleZip(e.target.value)}/>
                </div>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}

export default Wizard;