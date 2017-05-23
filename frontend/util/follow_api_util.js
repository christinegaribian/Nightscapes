export const follow = id => (
  APIUtil.changeFollowStatus(id, "POST")
);

export const unfollow = id => (
  APIUtil.changeFollowStatus(id, "DELETE")
);

export const changeFollowStatus = (id, method) => (
  $.ajax({
    url: `api/users/${id}/follow`,
    method
  })
);
