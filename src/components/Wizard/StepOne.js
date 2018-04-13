import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

class StepOne extends Component{
    constructor(){
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
        }
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
    render(){
        return(
            <div>
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
                <Link to='/wizard/step2'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

export default StepOne