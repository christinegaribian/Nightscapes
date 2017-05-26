
export const follow = id => (
  changeFollowStatus(id, "POST")
);

export const unfollow = id => (
  changeFollowStatus(id, "DELETE")
);

export const changeFollowStatus = (id, method) => (
  $.ajax({
    url: `api/users/${id}/follow`,
    method
  })
);

export const fetchAllUsers = () => (
	$.ajax({
		method: 'GET',
		url: '/api/users'
	})
);
