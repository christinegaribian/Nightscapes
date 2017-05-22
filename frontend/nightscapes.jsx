//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

import * as APIUtil from './util/session_api_util';
window.APIUtil = APIUtil;

import * as PhotoAPIUtil from './util/photos_api_util';
window.PhotoAPIUtil = PhotoAPIUtil;

import * as UserAPIUtil from './util/users_api_util';
window.UserAPIUtil = UserAPIUtil;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
