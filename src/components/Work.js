import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toHHMMSS from '../toHHMMSS'
import { earn_cash, timer_tick } from "../actions";
import './Work.css'
import {connect} from "react-redux";
import { Tabs, Tab, Button } from 'material-ui'

class Work extends Component {

    render() {
        const sessionID = this.props.sessionID;
        return (
            <div className='container'>
                <div className="buttons_container">
                <Button onClick={() => {
                    if (window.confirm('Earned ₽100. Are you sure?')) this.props.earn_cash(100, sessionID)
                }} variant="raised" color="secondary" className='earn_cash_button'>
                    <h1>₽100</h1>
                </Button>
                    <Button onClick={() => {
                        if (window.confirm('₽200. Are you sure?')) this.props.earn_cash(200, sessionID)
                    }} variant="raised" color="secondary" className='earn_cash_button'>
                        <h1>₽200</h1>
                    </Button>
                    <Button onClick={() => {
                        if (window.confirm('Earned ₽300. Are you sure?')) this.props.earn_cash(300, sessionID)
                    }} variant="raised" color="secondary" className='earn_cash_button'>
                        <h1>₽300</h1>
                    </Button>
                    <Button onClick={() => {
                        if (window.confirm('Earned ₽400. Are you sure?')) this.props.earn_cash(400, sessionID)
                    }} variant="raised" color="secondary" className='earn_cash_button'>
                        <h1>₽400</h1>
                    </Button>
                </div>
            </div>
        );
    }
}

Work.propTypes = {};
function mapStateToProps(state){
    return {
        cash: state.cash,
        sessionID: state.sessionID
    }
}

function mapDispatchToProps(dispatch){
    return {
        earn_cash: (earned, sessionID) => {
            dispatch(earn_cash(earned, sessionID));
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Work)