import React, { Component } from "react";
import { Button } from 'material-ui'
import "./LoginPage.css";
import {createSession} from "../actions";
import {connect} from "react-redux";
import AppProtected from './AppProtected';
import Results from './Results';


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
                    <div className='buttons_container'>
                        <h1>Здравствуй, {this.props.username}!</h1>
                        <h3>Добро пожаловать в Julius & Company</h3>
                        <h3>Лесенка крутится - бабки мутятся</h3>
                        <h3>Это не шутки - айфоны и мишутки</h3>
                        <h3>Непросто, но реально!</h3>

                        <Button
                            variant="raised" color="secondary"
                            onClick={this.handleStart }
                        >
                            Начать работу!
                        </Button>
                    </div>
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