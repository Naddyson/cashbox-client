import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerReducer } from 'react-router-redux'

import indexReducer from '../reducers'

export default function configureStore() {
    const reducers = combineReducers({ indexReducer, router: routerReducer })
    const store = createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk,promise())))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}