import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginPage.css";
import {login} from "../actions";
import {connect} from "react-redux";
class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        return (
            <div className="Login">
                <h1>Julius & Company</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
                <p>You don't have an account? Or any problems? Contact me! +38(093)557 89 05 - Telegram, WhatsApp</p>
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