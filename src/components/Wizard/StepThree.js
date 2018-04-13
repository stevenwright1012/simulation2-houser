import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class StepThree extends Component{
    constructor(){
        super()

        this.state = {
            monthlyMortgage: '',
            desiredRent: ''
        }
        this.addHouse = this.addHouse.bind(this);

    }
    handleMortgage(e){
        this.setState({
            monthlyMortgage:e,
        })
    }
    handleRent(e){
        this.setState({
            desiredRent:e,
        })
    }
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
                <div>
                    Monthly Mortgage Amount
                    <input type="text" value={this.state.monthlyMortgage} onChange={(e) => this.handleMortgage(e.target.value)}/>
                </div>
                <div>
                    Desired Monthly Rent
                    <input type="text" value={this.state.desiredRent} onChange={(e) => this.handleRent(e.target.value)}/>                    
                </div>
                <Link to='/wizard/step2'>
                    <button>Previous Step</button>
                </Link>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}

export default StepThree