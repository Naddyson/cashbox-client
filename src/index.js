import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';




import App from './App';

import storeWithMiddleware from './store/configureStore'

const store = storeWithMiddleware();

store.subscribe(() => {
    console.log('Store has changed')
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


