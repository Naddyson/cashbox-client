


const initialState = {
    authed: false,
    workerID: 0,
    sessionID: 0,
    username: 'LOX',
    cash: 0,
    seconds: 0,
    history: [],
    started: false,
    finished: false
};

export default function indexReducer (state = initialState, action) {
    console.log(action)
    switch(action.type){
        case "SET_DATA":{
            return {...state, history: action.payload}
        }
        case "TIMER_TICK": {
            return {...state, seconds: state.seconds + 1}
        }
        case "EARN_CASH": {

            return {...state, cash: state.cash + action.earned, history: [...state.history, {
                time: state.seconds, earned: action.newHistory.cashChange, date: action.newHistory.date
                }]}
        }
        case "AUTH_STATUS": {
            return { ...state, isAuthenticated: action.payload }
        }
        case "LOGIN_SUCCESS": {
            return {
                ...state, authed: true, workerID: action.payload._id, username: action.payload.username
            }
        }
        case "SET_SESSION": {
            console.log('here')
            console.log(action.payload)
            return {
                ...state, sessionID: action.payload, started: true
            }
        }
        case "FINISH_SESSION": {
            return {
                ...state, finished: true, started: false
            }
        }
        case "LOGOUT": {
            return initialState
        }
        default: return state
    }

}