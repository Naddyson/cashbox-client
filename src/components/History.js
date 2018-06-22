import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {earn_money} from "../actions";

class History extends Component {
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
                {
                    this.props.history.map( item => {
                    return (
                        <div style={{
                            width: '100%',
                            height: '50px',
                            border: '1px solid pink',
                            borderRadius: 10,
                            marginBottom: 2,
                            
                        }}>
                            <div style={{float: 'left'}}>
                                <p>{item.date}</p>
                                <p>{this.toHHMMSS(item.time)}</p>
                            </div>

                            <div style={{float: 'right'}}>{ item.earned }</div>
                        </div>
                    )
                } )}
            </div>
        );
    }
}

History.propTypes = {};

function mapStateToProps(state){
    return {
        history: state.history
    }
}





export default connect(mapStateToProps)(History)