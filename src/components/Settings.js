import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {setSession} from "../actions";
import { Button } from "material-ui";
import {connect} from "react-redux";
import {finishSession, logout} from '../actions'

class Settings extends Component {

    render() {
        return (
            <div>
                <h1>Как дела, {this.props.username}?</h1>
                <h3>Если ты уже закрылся, то можешь: </h3>
                <Button variant="raised" color="secondary" onClick={() => this.props.finishSession(this.props.sessionID)}>Закончить работу</Button>

                <h3>Нашел баг? Свяжись со мной!</h3>
                <h4>Евгений: +38(093)557-89-05 - Telegram, WhatsApp</h4>

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