import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from "./services/store/auth/auth";
import ProfileReducer from "./services/store/profile/profile";
const rootReducer = combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
