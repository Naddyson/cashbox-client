import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toHHMMSS from '../toHHMMSS'
import { earn_cash, workButtons } from "../actions";
import './Work.css'
import {connect} from "react-redux";
import { Tabs, Tab, Button } from 'material-ui';
import { confirmable } from 'react-confirm';
import AlertDialog from "./AlertDialog";

class Work extends Component {
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
        this.setState({ dialog: false })
    }

    render() {
        var state = this.state;
        return (
            <div className='container'>
                { state.dialog ? <AlertDialog open={state.dialog} func={state.func} text={state.text} close={this.closeDialog}/> : <div/> }
                <div className="buttons_container">
                <Button onClick={() => {
                    this.clickHandle(100)
                }} variant="raised" fullWidth={true} color="secondary" disabled={this.props.workButtonsDisabled}
                style={{
                    marginBottom: '25px'
                }}>
                    <h1>₽100</h1>
                </Button>
                    <Button onClick={() => {
                        this.clickHandle(200)
                    }} variant="raised" color="secondary" fullWidth={true} disabled={this.props.workButtonsDisabled}
                    style={{
                        marginBottom: '25px'
                    }}>
                        <h1>₽200</h1>
                    </Button>
                    <Button onClick={() => {
                        this.clickHandle(300)
                    }} variant="raised" color="secondary" fullWidth={true} disabled={this.props.workButtonsDisabled} style={{
                        marginBottom: '25px'
                    }}>
                        <h1>₽300</h1>
                    </Button>
                    <Button onClick={() => {
                        this.clickHandle(400)
                    }} variant="raised" color="secondary" fullWidth={true} disabled={this.props.workButtonsDisabled} style={{
                        marginBottom: '25px'
                    }}>
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




export default connect(mapStateToProps, mapDispatchToProps)(Work)