export const fetchAllPhotos = () => (
	$.ajax({
		method: 'GET',
		url: '/api/photos'
	})
);

export const fetchFeedPhotos = (id) => (
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}/feed`
	})
);

export const fetchUserPhotos  = (id) => (
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}/photos`
	})
);

export const postPhoto =  (photo) => (
	$.ajax({
		method:'POST',
		url: `/api/users/${photo.user_id}/photos`,
		data: {photo}
	})
);

export const fetchSinglePhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);
