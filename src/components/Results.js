import React, {Component} from 'react';
import {logout} from "../actions";
import {connect} from "react-redux";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Results extends Component {
    toHHMMSS = (sec_num) => {
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    render() {
        return (
            <div>
                <h1>Поздравляю с концом рабочего дня, {this.props.username}!</h1>
                <h2>Твои результаты:</h2>
                <h3>Касса: {this.props.cash}</h3>
                <h3>Время в работе: {this.toHHMMSS(this.props.seconds)}</h3>
                <h3>Твоя зарплата (20%): {this.props.cash*0.2}</h3>
                <h3>Твой рейтинг (в разработке): ...</h3>
                <Button onClick={()=> this.props.logout()}>Yes!</Button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cash: state.cash,
        seconds: state.seconds,
        username: state.username
    }
}


function mapDispatchToProps(dispatch){
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)