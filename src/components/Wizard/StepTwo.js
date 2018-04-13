import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepTwo} from '../../ducks/reducer';

// import axios from 'axios';

class StepTwo extends Component{
    constructor(){
        super()

        this.state = {
            image_url: ''
        }
    }
    componentDidMount(){
        this.setState({
            image_url: this.props.image_url
        })
    }
    handleImage(e){
        this.setState({
            image_url:e,
        })
    }
    render(){
        return(
            <div>
                <div>
                    Image
                    <input type="text" value={this.state.image_url} onChange={(e) => this.handleImage(e.target.value)}/>
                </div>
                <Link to='/wizard/step1'>
                    <button
                    onClick={() => this.props.updateStepTwo(this.state.image_url)}>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button
                    onClick={() => this.props.updateStepTwo(this.state.image_url)}>Next Step</button>
                </Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        image_url: state.image_url
    }
}

export default connect(mapStateToProps, {updateStepTwo})(StepTwo)