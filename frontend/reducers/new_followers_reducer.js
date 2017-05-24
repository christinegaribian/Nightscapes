import { REQUEST_NEW_FOLLOWERS,
         RECEIVE_NEW_FOLLOWERS } from '../actions/follow_actions';

const NewFollowersReducer = function(state = [], action){
  switch(action.type){
    case RECEIVE_NEW_FOLLOWERS:
      return action.newFollowers;
    default:
      return state;
  }
};

export default NewFollowersReducer;
