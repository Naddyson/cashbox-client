import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {setSession} from "../actions";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {connect} from "react-redux";
import {finishSession, logout} from '../actions'

class Settings extends Component {

    render() {
        return (
            <div>
                <h1>Hi, {this.props.username}</h1>
                <p>Finish work ( cannot be undone ):</p>
                <Button onClick={() => this.props.finishSession(this.props.sessionID)}>Finish</Button>

                <h3>Found a bug? Contact me!</h3>
                <h4>+38(093)557-89-05 - Telegram, WhatsApp</h4>

            </div>
        );
    }
}

Settings.propTypes = {};

function mapStateToProps(state){
    return {
        workerID: state.workerID,
        sessionID: state.sessionID,
        username: state.username
    }
}


function mapDispatchToProps(dispatch){
    return {
        finishSession: (id) => {
            dispatch(finishSession(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)