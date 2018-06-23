import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {setSession} from "../actions";
import { Button } from "material-ui";
import {connect} from "react-redux";
import {finishSession, logout} from '../actions'
import AlertDialog from './AlertDialog'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            func: null,
            text: ''
        }
    }

    closeDialog = () => {
        this.setState({ dialog: false });
    }
    render() {
        let state = this.state;
        return (
            <div>
                { state.dialog ? <AlertDialog open={state.dialog} func={state.func} text={state.text} close={this.closeDialog}/> : <div/> }
                <h1>Как дела, {this.props.username}?</h1>
                <h3>Если ты уже закрылся, то можешь: </h3>
                <Button variant="raised" color="primary" onClick={() => {
                    this.setState({
                        func: () => { this.props.finishSession(this.props.sessionID) },
                        text: `Ты уверен, что хочешь закончить работу?`
                    });
                    this.setState({ dialog: true });

                }}>Закончить работу</Button>

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