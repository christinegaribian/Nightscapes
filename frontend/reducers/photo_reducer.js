import { merge } from 'lodash';

import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_NEW_PHOTO
} from '../actions/photo_actions';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_NEW_PHOTO:
      debugger
      return merge({}, state, {
        [action.photo.id]: action.photo
      });
    default:
      return state;
  }
};

export default PhotoReducer;
