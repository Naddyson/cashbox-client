
import axios from 'axios'
import { serverAddress } from '../App';

export function timer_tick() {
    return dispatch => {
        dispatch({
            type: "TIMER_TICK"
        })
    }
}
export function earn_cash(earned, sessionID){

    return dispatch => {
        axios.put(`${serverAddress}/add-cash/${sessionID}`, { cash: earned }).then( (response) => {

            return dispatch({
                type: "EARN_CASH",
                earned: response.data.earned,
                newHistory: response.data.newHistory
            })
        })
        .catch( error => {
            console.log(error.response)
        })



    }
}

export function login(username, password){

    return dispatch => {
        axios.post(`${serverAddress}/auth/`, {logusername: username, logpassword: password}).then( (response) => {
            if (!response.data) alert('Wrong login or password!');
            return dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data
            })

        })
        .catch(error => {
            console.log(error.response)
        })
    }

}

export function createSession(workerID){
    return dispatch => {
        axios.post(`${serverAddress}/session/`, {workerID})
            .then( (response) => {
                console.log('response session');
                var sessionID = response.data._id;
                return dispatch({
                    type: "SET_SESSION",
                    payload: sessionID
                })
            })
            .catch( (error) => {
                console.log(error)
            })

    }
}

export function finishSession(id){
    return dispatch => {
        axios.put(`${serverAddress}/session_end/${id}`).then( (response) => {
            if (!response.data) alert('WTF?!');
            return dispatch({
                type: 'FINISH_SESSION'
            })

        })
            .catch(error => {
                console.log(error.response)
            })
    }
}

export function logout(){
    return dispatch => {
        axios.get(`${serverAddress}/auth/logout`).then( (res) => {
            if (!res) alert ('WTF?!');
            return dispatch({
                type: 'LOGOUT'
            })

        })
            .catch( error => {
                console.log(error.response)
            })
    }
}