import { REQUEST_TARGET_USER,
         RECEIVE_TARGET_USER
       } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = function(state = {}, action){
  switch(action.type){
    case RECEIVE_TARGET_USER:
      return action.targetUser;
    default:
      return state;
  }
};

export default UserReducer;
