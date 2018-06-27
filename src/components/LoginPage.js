import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, TextField } from 'material-ui';

import "./LoginPage.css";
import {login} from "../actions";
import {connect} from "react-redux";
class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            disabled: false
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    changeUsername = (event) => {
        console.log(event)
        this.setState({
            username: event.target.value
        });
    }
    changePassword = (event) => {
        console.log(event)
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ disabled: true });
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        return (
            <div className='buttons_container'>

                <h1>Julius & Company</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='flex-container-column'>
                        <div>
                        <TextField
                            id="Username"
                            label="Username"
                            style={{
                                margin: 'auto',
                                width: 200
                            }}
                            value={this.state.username}
                            onChange={this.changeUsername}
                            margin="normal"
                        />
                        </div>
                        <div>
                        <TextField
                            id="Password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.changePassword}
                            margin="normal"
                            type='password'
                        />
                        </div>
                        <Button
                            variant="raised" color="primary"
                            disabled={!this.validateForm() || this.state.disabled}
                            type="submit"
                            style={{
                                margin: 'auto',
                                width: 200,
                                marginBottom: '15px'
                            }}
                        >
                            Login
                        </Button>


                    </div>
                </form>
                <p style={{ color: 'red' }}>{ this.state.disabled ? 'Авторизация...' : '' }</p><br/>
                <p>You don't have an account? Or have any problems? Contact me! +380935578905 - Telegram, WhatsApp</p>

            </div>
        );
    }
}



function mapDispatchToProps(dispatch){
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)