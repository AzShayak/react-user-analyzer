import React, { useEffect, useState } from 'react';

import AppBar from './components/AppBar';
import SelectFilter from './screens/SelectFilter';
import ShowUsers from './screens/ShowUsers';
import ShowIndividualUser from './screens/ShowIndividualUser';
import EditFilter from './screens/EditFilter';

import allUsers from './utils/importUsers';
import filterUsers from './utils/filterUsers';
import AppContext from './config/AppContext';

function App() {
	// Defining default state of the application
	const [screen, setScreen] = useState(1);
	const [filters, setFilters] = useState({
		dateFrom: '2015-01-01',
		dateTo: '2017-01-01',
		status: 'bored',
	});
	const [filteredUsers, setFilteredUsers] = useState(allUsers);
	const [userDetails, setUserDetails] = useState({});

	// Render different screens based on screen number
	const displayScreen = () => {
		switch (screen) {
			case 2:
				return <ShowUsers />;

			case 3:
				return <ShowIndividualUser />;

			case 4:
				return <EditFilter />;

			default:
				return <SelectFilter />;
		}
	};

	// Apply filters when in ShowUsers screen
	useEffect(() => {
		if (screen === 2) setFilteredUsers(filterUsers(allUsers, filters));
	}, [filters, screen]);

	return (
		<AppContext.Provider
			value={{
				screen,
				setScreen,
				filters,
				setFilters,
				filteredUsers,
				setFilteredUsers,
				userDetails,
				setUserDetails,
			}}>
			{
				// Show AppBar on every screen except EditFilter
				screen !== 4 && <AppBar screen={screen} setScreen={setScreen} />
			}
			{displayScreen()}
		</AppContext.Provider>
	);
}

export default App;
