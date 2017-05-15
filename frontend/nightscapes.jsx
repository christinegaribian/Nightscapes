import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
window.APIUtil = APIUtil;
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Nightscapes</h1>, root);
});
