import {
         RECEIVE_TARGET_USER
       } from '../actions/user_actions';
import merge from 'lodash/merge';



const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TARGET_USER:
      return action.targetUser;
    default:
      return state;
  }
};

export default UserReducer;
