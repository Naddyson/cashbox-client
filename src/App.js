import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppProtected from './components/AppProtected';

import { BrowserRouter, IndexRoute, Route, Switch,Redirect, withRouter } from 'react-router-dom'
import {connect} from "react-redux";
import Start from './components/Start'
import LoginPage from './components/LoginPage'


export const serverAddress = 'https://magic-cashbox-server.herokuapp.com';
/*
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'


import { firebaseAuth } from '../config/constants'
//

import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { setUserStatus } from '../actions/auth'
*/


class App extends React.Component {
    state = {
        authed: false,
        loading: true,
        bool: true

    }


    render(){
        return(

            this.props.authed ? <Start /> : <LoginPage/>

        )
    }
}

/*function mapStateToProps(state){
    return {
        authed: state.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return {

        setUserStatus: (bool) => {
            dispatch(setUserStatus(bool))
        }
    }
}*/

/*

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));*/

function mapStateToProps(state){
    return {
        authed: state.authed
    }
}



export default connect(mapStateToProps)(App)