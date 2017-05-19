import { merge } from 'lodash';

import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_SINGLE_PHOTO,
  RECEIVE_ERRORS
} from '../actions/photo_actions';
// ?  RECEIVE_NEW_PHOTO,


const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_SINGLE_PHOTO:
      return merge({}, state, {
        [action.photo.id]: action.photo
      });
    default:
      return state;
  }
};

export default PhotoReducer;
