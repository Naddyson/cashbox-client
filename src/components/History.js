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
            <div style={{ width: '100%'}}>
                {
                    this.props.history.length === 0
                        ? <div>
                            <h2>Ты пока еще ничего не заработал.</h2>
                            <h3>Сосредоточься на работе и думай только о ней. Размер твоей зарплаты полностью зависит от тебя!</h3>
                            </div>
                        : this.props.history.map( item => {
                            return (
                                <div style={{
                                    width: '100%',
                                    height: '50px',
                                    border: '1px solid pink',
                                    borderRadius: 10,
                                    marginBottom: 2,
                                    padding: '5px'

                                }}>
                                    <div style={{float: 'left'}}>
                                        <p>Дата: {item.date}</p>
                                        <p>Время в работе: {this.toHHMMSS(item.time)}</p>
                                    </div>

                                    <div style={{float: 'right'}}>{ item.earned }</div>
                                </div>
                            )
                        })


                }
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