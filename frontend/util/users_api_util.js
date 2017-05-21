export const fetchTargetUser = (id) => (
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`
	})
);
