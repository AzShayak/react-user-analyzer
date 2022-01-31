const context = require.context('../data/', true, /\.(json)$/);
const allUsers = [];

context.keys().forEach((filename) => {
	const user = context(filename);
	const userId = filename.replace('./', '').replace('.json', '');
	user.profile['userId'] = userId;
	allUsers.push(user);
});

export default allUsers;
