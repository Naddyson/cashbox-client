import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {earn_cash} from "../actions";
import {connect} from "react-redux";

class Money extends Component {
    render() {
        return (
            <div style={{ float: 'right', marginRight: 10}}>
                <p>{this.props.cash} ₽</p>
            </div>
        );
    }
}

Money.propTypes = {};

function mapStateToProps(state){
    return {
        cash: state.cash
    }
}



export default connect(mapStateToProps)(Money)