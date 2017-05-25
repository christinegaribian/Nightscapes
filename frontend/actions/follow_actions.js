import * as FollowAPIUtil from '../util/follow_api_util';
import { receiveTargetUser } from './user_actions';

export const CREATE_FOLLOW = 'CREATE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';

// export const  REQUEST_NEW_FOLLOWERS = "REQUEST_NEW_FOLLOWERS";
export const   RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const   RECEIVE_FOLLOWER = "RECEIVE_FOLLOWER";



export const createFollow = follow => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = follow => ({
  type: DELETE_FOLLOW,
  follow
});


export const followUser = id => dispatch => (
  FollowAPIUtil.follow(id)
    .then(user => dispatch(receiveTargetUser(user)))
);

export const unfollowUser = id => dispatch => (
  FollowAPIUtil.unfollow(id)
    .then(user => dispatch(receiveTargetUser(user)))
)

export const followUserFromFollowBox = id => dispatch => (
  FollowAPIUtil.follow(id)
  .then(user => dispatch(receiveFollower(user)))
);

export const unfollowUserFromFollowBox = id => dispatch => (
  FollowAPIUtil.unfollow(id)
    .then(user => dispatch(receiveFollower(user)))
)

export const requestNewFollowers = () => dispatch => (
  FollowAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveFollowers(users)))
)

//
//
// export const requestNewFollowers = () => ({
//   type: REQUEST_NEW_FOLLOWERS
// });

export const receiveFollowers = (followers) => ({
  type: RECEIVE_FOLLOWERS,
  followers
});

export const receiveFollower = (follower) => ({
  type: RECEIVE_FOLLOWER,
  follower
});
