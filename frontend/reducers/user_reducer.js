import {
  RECEIVE_TARGET_USER
} from '../actions/user_actions';
import {
  CREATE_FOLLOW,
  DELETE_FOLLOW
} from '../actions/follow_actions';
import {RECEIVE_SINGLE_PHOTO} from '../actions/photo_actions';
import merge from 'lodash/merge';



const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState =  merge({}, state);
  switch(action.type){
    case RECEIVE_TARGET_USER:
      return action.targetUser;
    case RECEIVE_SINGLE_PHOTO:
      newState['photo_count']++;
      return newState;
    case CREATE_FOLLOW:
      newState['follower_count']++;
      return newState;
    case DELETE_FOLLOW:
      newState['follower_count']--;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
