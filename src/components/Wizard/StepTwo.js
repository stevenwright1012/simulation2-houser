import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

class StepTwo extends Component{
    constructor(){
        super()

        this.state = {
            image_url: ''
        }
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
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

export default StepTwo