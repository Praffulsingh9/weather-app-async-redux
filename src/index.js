import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,applyMiddleware(ReduxPromise));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app,document.getElementById('root'))
