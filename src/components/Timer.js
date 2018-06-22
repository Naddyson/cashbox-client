import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {timer_tick} from "../actions";
import { connect } from 'react-redux';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: null,
            time: 0
        }
    }
    componentDidMount(){
        this.timer = setInterval(this.props.timerTick, 1000);

    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick = () => {
        let newTime = this.state.time + 1;
        this.setState( {
            time: newTime
        })
    }
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
            <div style={{ float: 'left', marginLeft: 10}}>
                <p>{this.toHHMMSS(this.props.seconds)}</p>
            </div>
        );
    }
}

Timer.propTypes = {};

function mapStateToProps(state){
    return {
        seconds: state.seconds
    }
}
function mapDispatchToProps(dispatch){
    return {
        timerTick: () => {
            dispatch(timer_tick());
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Timer)