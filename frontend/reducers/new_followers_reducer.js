import { RECEIVE_FOLLOWERS,
         RECEIVE_FOLLOWER } from '../actions/follow_actions';
import merge from 'lodash/merge';

const NewFollowersReducer = function(state = [], action){
  switch(action.type){
    case RECEIVE_FOLLOWERS:
      return action.followers;
    case RECEIVE_FOLLOWER:
      return merge([], state, {
        [action.follower.id]: action.follower
      });
    default:
      return state;
  }
};

export default NewFollowersReducer;
