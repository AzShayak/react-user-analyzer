/**
 * @param {object[]} allUsers - Array of users to search from
 * @param {string} queryString - Search query to match names with
 * @returns {object[]} An array of users who's names matched the query
 */
export default function searchUsers(allUsers, queryString) {
	const users = [];

	allUsers.forEach((user) => {
		// Convert name and query to lowerscase
		if (user.profile.name.toLowerCase().includes(queryString.toLowerCase())) {
			users.push(user);
		}
	});

	return users;
}
