import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepThree, cancel} from '../../ducks/reducer';
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
    componentDidMount(){
        this.setState({
            monthlyMortgage: this.props.monthlyMortgage,
            desiredRent: this.props.desiredRent
        })
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
        axios.post('/api/houses',{name: this.props.name,
                                address: this.props.address,
                                city: this.props.city,
                                state: this.props.state,
                                zipcode: this.props.zipcode,
                                image_url: this.props.image_url,
                                monthlyMortgage: this.state.monthlyMortgage,
                                desiredRent: this.state.desiredRent}).then(() =>{
                                    // <Link />
                                    this.props.cancel();
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
                    <button
                     onClick={() => this.props.updateStepThree(this.state.monthlyMortgage, this.state.desiredRent)}>Previous Step</button>
                </Link>
                <Link to='/'>
                    <button onClick={this.addHouse}>Complete</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
        image_url: state.image_url,
        monthlyMortgage: state.monthlyMortgage,
        desiredRent: state.desiredRent
    }
}

export default connect(mapStateToProps, {updateStepThree, cancel})(StepThree)