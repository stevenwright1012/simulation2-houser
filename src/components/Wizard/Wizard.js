import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {cancel} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Wizard extends Component{
    render(){
        return(
            <div>
                Wizard
                <Link to='/'>
                    <button
                    onClick={() => this.props.cancel()}>Cancel</button>
                </Link>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne}/>
                    <Route path='/wizard/step2' component={StepTwo}/>
                    <Route path='/wizard/step3' component={StepThree}/>
                </Switch>
            </div>
        )
    }
}

export default connect(null, {cancel})(Wizard);