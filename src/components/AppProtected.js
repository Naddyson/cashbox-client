import React, {Component} from 'react';
import { Router, IndexRoute, Route, Switch, Link, Redirect } from 'react-router-dom';
import './AppProtected.css'
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab, Button } from 'material-ui'
import Work from './Work';
import History from './History';
import Winners from './Winners';
import Settings from './Settings';
import Timer from './Timer';
import Start from './Start';

import Money from './Money'
import {createSession} from "../actions";
import {connect} from "react-redux";
const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'auto',
        position: 'fixed'
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        width: `100%`,
        height: '10%',
        display: 'inline-block',

    },
    content: {
        marginTop: '100px'

    },

    tab: {
        height:'64px',
        width: '150px',

    },
    tabs: {
        float: 'left',
        width: '50%'
    },
    loginButton: {
        float: 'right',
        position:'relative',
        height: '50px',
        width: '80px'
    }
});
class AppProtected extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuValue: 0
        }
    }
    handleChange = (event, value) => {
        this.setState({ menuValue: value })
    }
    renderSwitch = (menuValue) => {
        switch(menuValue){
            case 0: return <Work />;
            case 1: return <History />;
            case 2: return <Winners />;
            case 3: return <Settings />;
            default: return <p>Choose tab!</p>
        }
    }
    render() {
        const { menuValue } = this.state;
        return (
            <div style={styles.appFrame}>

                <AppBar style={styles.appBar}>
                    <Tabs value={menuValue} onChange={this.handleChange} style={styles.tabs}>
                        <Tab style={styles.tab} label="Work" onClick={() => this.setState({ menuValue: 0})}/>
                        <Tab style={styles.tab} label="History" onClick={() => this.setState({ menuValue: 1})}/>
                        <Tab style={styles.tab} label="Winners" onClick={() => this.setState({ menuValue: 2})}/>
                        <Tab style={styles.tab} label="Settings" onClick={() => this.setState({ menuValue: 3})}/>
                    </Tabs>
                    <div className='stat_bar'>
                        <Timer />
                        <Money/>
                    </div>
                </AppBar>

                <div className='content'>
                    {this.renderSwitch(menuValue)}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        globalState: {
            workerID: state.workerID,
            sessionID: state.sessionID,
            username: state.username,
            cash: state.cash,
            seconds: state.seconds,
            history: state.history
        }

    }
}


function mapDispatchToProps(dispatch){
    return {
        createSession: (id) => {
            dispatch(createSession(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppProtected)