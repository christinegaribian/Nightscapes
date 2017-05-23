import {
         RECEIVE_TARGET_USER
       } from '../actions/user_actions';
import {RECEIVE_SINGLE_PHOTO} from '../actions/photo_actions';
import merge from 'lodash/merge';



const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TARGET_USER:
      return action.targetUser;
    case RECEIVE_SINGLE_PHOTO:
      let newState =  merge({}, state);
      newState['photo_count']++;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
