import * as FollowAPIUtil from '../util/follow_api_util';


export const CREATE_FOLLOW = 'CREATE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';

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
    .then(follow => dispatch(createFollow(follow)))
);

export const unfollowUser = id => dispatch => (
  FollowAPIUtil.unfollow(id)
    .then(follow => dispatch(deleteFollow(follow)))
)
