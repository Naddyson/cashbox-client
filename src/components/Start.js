import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Router, IndexRoute, Route, Switch, Link, Redirect } from 'react-router-dom';
import "./LoginPage.css";
import {createSession} from "../actions";
import {connect} from "react-redux";
import AppProtected from './AppProtected';
import Results from './Results'

import axios from 'axios'
import { serverAddress } from '../App';

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            redirect: false
        };
    }
    
    handleStart = () => {
        this.props.createSession(this.props.workerID);
    }


    /*handleContinue = (workerID) => {
        axios.get(`${serverAddress}/session/:${workerID}`,)
            .then( (response) => {
                console.log(response);
                this.props.createSession(response._id);
                this.setState({ redirect: true });
            })
            .catch( (error) => {
                alert(error)
            })
    }*/

    render() {

        if (!this.props.finished) {
            if (this.props.started) {
                return <AppProtected/>
            } else return (
                <div className="Start">
                    <h1>Welcome, {this.props.username}!</h1>
                    <h2>This is the Magic StairWay $CashBox$</h2>
                    <h3>Stairway spin - money in</h3>

                    <Button
                        onClick={this.handleStart }
                    >
                        Start work!
                    </Button>
                </div>
            )


        } else {
            return <Results/>
        }
    }
}

function mapStateToProps(state){
    return {
        workerID: state.workerID,
        sessionID: state.sessionID,
        username: state.username,
        started: state.started,
        finished: state.finished
    }
}


function mapDispatchToProps(dispatch){
    return {
        createSession: (id) => {
            dispatch(createSession(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)