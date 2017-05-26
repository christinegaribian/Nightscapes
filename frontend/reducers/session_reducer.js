import merge from 'lodash/merge'
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';
import {
  RECEIVE_FOLLOWER
} from '../actions/follow_actions';
const nullUser = {
  currentUser: null,
  errors: []
};


const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_FOLLOWER:
      let newState = merge({}, state)
      newState.currentUser.following.push(action.follower)
      return newState;
    default:
    return state;
  }
};

export default SessionReducer;
