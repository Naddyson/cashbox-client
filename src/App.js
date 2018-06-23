import React, {Component} from 'react';

import {connect} from "react-redux";
import Start from './components/Start'
import LoginPage from './components/LoginPage'
import {set_state} from "./actions";


export const serverAddress = 'https://magic-cashbox-server.herokuapp.com';


class App extends React.Component {
    state = {
        authed: false,
        loading: true,
        bool: true

    }

    componentWillMount(){

        var loaded = JSON.parse(localStorage.getItem('state'));
        if (loaded) {
            this.props.set_state(loaded);
        }

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

function mapDispatchToProps(dispatch){
    return {
        set_state: (state) => {
            dispatch(set_state(state));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)