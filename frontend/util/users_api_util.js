export const fetchTargetUser = function(id) {
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`
	});
};
