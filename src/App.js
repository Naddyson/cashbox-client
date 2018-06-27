import React, {Component} from 'react';

import {connect} from "react-redux";
import Start from './components/Start'
import LoginPage from './components/LoginPage'
import {set_state} from "./actions";
import _ from 'lodash'


export const serverAddress = 'http://localhost:3001';


class App extends React.Component {
    state = {
        authed: false,
        loading: true,
        bool: true

    }

    componentWillMount(){

        var loaded = JSON.parse(localStorage.getItem('state'));
        if (loaded) {
            /*_.each(loaded.history, (item) => {
                let time = item.date;
                let formatDate = () => {
                    var year = time.substring(0, 4);
                    let month = time.substring(5,7);
                    let number = time.substring(8,10);
                    let hours = time.substring(11, 13);
                    let minutes = time.substring(14, 16);
                    let seconds = time.substring(17, 19);
                    var date = new Date(year, month, number, hours, minutes, seconds);//string instead number but works
                    return date
                }
                item.date = formatDate().toString();
            })*/
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