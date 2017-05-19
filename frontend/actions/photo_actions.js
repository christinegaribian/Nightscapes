export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_SINGLE_PHOTO = 'RECEIVE_SINGLE_PHOTO';
export const POST_PHOTO = 'POST_PHOTO';
// export const RECEIVE_NEW_PHOTO = 'RECEIVE_NEW_PHOTO';
export const RECEIVE_USER_PHOTOS = 'RECEIVE_USER_PHOTOS';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

import * as PhotoAPIUtil from '../util/photos_api_util';


export const requestAllPhotos = () => (dispatch) => {
  return PhotoAPIUtil.fetchAllPhotos()
    .then(photos => (
    dispatch(receiveAllPhotos(photos))
  ));
}

export const requestSinglePhoto = (id) => (dispatch) => {
  return PhotoAPIUtil.fetchSinglePhoto(id).then(photo => {
    dispatch(receiveSinglePhoto(photo));
  });
}
//
// return photo;


export const postPhoto = photo => dispatch => (
  PhotoAPIUtil.postPhoto(photo).then(photo => {
    dispatch(receiveSinglePhoto(photo));
    return photo;
  })
);
// .fail(err => dispatch(receivePhotosErrors(err.responseJSON)))

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveSinglePhoto = photo => ({
  type: RECEIVE_SINGLE_PHOTO,
  photo
});

// export const receiveNewPhoto = photo => ({
//   type: RECEIVE_NEW_PHOTO,
//   photo
// });

export const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});
