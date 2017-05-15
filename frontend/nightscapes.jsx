import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


import * as APIUtil from './util/session_api_util';
window.APIUtil = APIUtil;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<h1>Welcome to Nightscapes</h1>, root);
});
