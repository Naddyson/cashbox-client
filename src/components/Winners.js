import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AlertDialog from "./AlertDialog";
import {connect} from "react-redux";

import { Button } from 'material-ui';
import {earn_cash, workButtons} from "../actions";

class Winners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            func: null,
            text: ''
        }
    }
    clickHandle = (earned) => {
        this.setState({
            func: () => { this.props.earn_cash(earned, this.props.sessionID) },
            text: `₽${earned} Are you sure?`
        });
        this.setState({ dialog: true });
        this.props.work_buttons(true);
    };
    closeDialog = () => {
        this.setState({ dialog: false });
        this.props.work_buttons(false);
    }
    render() {
        var state = this.state;
        return (
            <div className='container'>
                { state.dialog ? <AlertDialog open={state.dialog} func={state.func} text={state.text} close={this.closeDialog}/> : <div/> }
                <h3 style={{ textAlign: 'center'}}>Лезть по каждой ступеньке, начиная с первой. По две ноги в призовом секторе.
                    То есть на 4 - две ноги, на 5 - две ноги, и на 6 - две ноги.
                    Все именно так? Тогда отдавай приз. И не забудь сфотографировать!
                </h3>

                <Button onClick={() => {
                    this.clickHandle(-500)
                }} variant="raised" fullWidth={true} color="secondary" disabled={this.props.workButtonsDisabled}
                        style={{
                            marginBottom: '25px'
                        }}>
                    <h1>-₽500</h1>
                </Button>
                <Button onClick={() => {
                    this.clickHandle(-1000)
                }} variant="raised" color="secondary" fullWidth={true} disabled={this.props.workButtonsDisabled}
                        style={{
                            marginBottom: '25px'
                        }}>
                    <h1>-₽1000</h1>
                </Button>
                <Button onClick={() => {
                    this.clickHandle(-5000)
                }} variant="raised" color="secondary" fullWidth={true} disabled={this.props.workButtonsDisabled} style={{
                    marginBottom: '25px'
                }}>
                    <h1>-₽5000</h1>
                </Button>


            </div>
        );
    }
}

Winners.propTypes = {};

function mapStateToProps(state){
    return {
        cash: state.cash,
        sessionID: state.sessionID,
        workButtonsDisabled: state.workButtonsDisabled
    }
}

function mapDispatchToProps(dispatch){
    return {
        earn_cash: (earned, sessionID) => {
            dispatch(earn_cash(earned, sessionID));
        },
        work_buttons: (bool) => {
            dispatch(workButtons(bool))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Winners)
