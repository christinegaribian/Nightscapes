import * as UserAPIUtil from '../util/users_api_util';


export const REQUEST_TARGET_USER = 'REQUEST_TARGET_USER';
export const RECEIVE_TARGET_USER = 'RECEIVE_TARGET_USER';


// export const requestTargetUser = id => ({
//   type: REQUEST_TARGET_USER,
//   id
// })

export const receieveTargetUser = user => ({
  type: RECEIVE_TARGET_USER,
  user
})

export const requestTargetUser = (id) => (dispatch) => {
  return UserAPIUtil.fetchTargetUser(id).then(user => {
    dispatch(receiveTargetUser(user));
  });
}
