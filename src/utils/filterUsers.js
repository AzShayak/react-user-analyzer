/**
 * @param {object[]} allUsers - Array of users to filter from
 * @param {object} filters - An object with filter parameters
 * @returns {object[]} An array of users after filtering
 */
export default function filterUsers(allUsers, filters) {
	const activeUsers = [];
	const superUsers = [];
	const boredUsers = [];

	const dateFrom = new Date(filters.dateFrom);
	const dateTo = new Date(filters.dateTo);

	allUsers.forEach((user) => {
		let mealCount = 0;

		// Find the dayId of first and last day the user had meals
		let firstDate = dateTo;
		let lastDate = dateFrom;
		let firstDayId = '';
		let lastDayId = '';

		for (const dateKey in user.calendar.dateToDayId) {
			const date = new Date(dateKey);

			if (date >= dateFrom && date <= firstDate) {
				firstDate = date;
				firstDayId = user.calendar.dateToDayId[dateKey];
			}

			if (date >= lastDate && date <= dateTo) {
				lastDate = date;
				lastDayId = user.calendar.dateToDayId[dateKey];
			}
		}

		// Count meals within the first and last dayId
		for (const mealKey in user.calendar.mealIdToDayId) {
			const mealIdToDayId = user.calendar.mealIdToDayId[mealKey];

			if (mealIdToDayId >= firstDayId && mealIdToDayId <= lastDayId) mealCount++;
		}

		// Add some properties to user
		const newUser = { ...user };
		newUser['earliestDate'] = firstDate;
		newUser['latestDate'] = lastDate;
		newUser['totalMeals'] = mealCount;

		// Add user to appropriate array
		// Active: users who had at least 5 meals in the specified period
		// Superactive: users who had more than 10 meals in the specified period
		// Bored: Users who were “active” in the preceding period, but not “active” in the specified period.
		if (mealCount > 0 && mealCount < 5) boredUsers.push(newUser);
		else if (mealCount >= 5 && mealCount <= 10) activeUsers.push(newUser);
		else if (mealCount > 10) superUsers.push(newUser);
	});

	if (filters.status === 'active') return activeUsers;
	if (filters.status === 'super') return superUsers;
	return boredUsers;
}
