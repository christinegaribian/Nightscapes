import {
  RECEIVE_PHOTO_ERRORS
} from '../actions/photo_actions';

import {
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

import merge from 'lodash/merge';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  const errors = action.errors;
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return merge([], errors);
    case RECEIVE_SESSION_ERRORS:
      return merge([], errors);
    default:
      return state;
  }
};

export default ErrorReducer;
