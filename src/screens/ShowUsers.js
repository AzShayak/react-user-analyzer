import React, { useContext, useEffect, useMemo, useState } from 'react';
import './ShowUsers.css';

import UserCard from '../components/UserCard';

import searchUsers from '../utils/searchUsers';
import AppContext from '../config/AppContext';

export default function ShowUsers() {
	const { filters, filteredUsers, setUserDetails, setScreen } = useContext(AppContext);

	const [displayedUsers, setDisplayedUsers] = useState([]);

	// Get the filtered users
	useEffect(() => setDisplayedUsers(filteredUsers), [filteredUsers]);

	const handleSearch = (event) => {
		setDisplayedUsers(searchUsers(filteredUsers, event.target.value));
	};

	let message = '';
	if (filters.status === 'super') message = 'Showing super active users';
	if (filters.status === 'active') message = 'Showing active users';
	if (filters.status === 'bored') message = 'Showing bored users';

	// This will render the gird of all users
	// if there are no users, it renders a message
	// useMemo prevents unnecessary re-renders
	const usersDisplay = useMemo(() => {
		if (displayedUsers.length > 0)
			return (
				<div className='users-grid-container'>
					{displayedUsers.map((user) => (
						<UserCard
							key={user.profile.userId}
							onClick={() => {
								setUserDetails(user);
								setScreen(3);
							}}
							profile={user.profile}
						/>
					))}
				</div>
			);

		return <p>No matching user</p>;
	}, [displayedUsers]);

	return (
		<div className='container2'>
			<div className='filters-section'>
				<p>
					{message}
					<br />
					<span>
						{new Date(filters.dateFrom).toDateString() +
							' - ' +
							new Date(filters.dateTo).toDateString()}
					</span>
				</p>
				<button onClick={() => setScreen(4)}>
					Edit filters <i className='fa fa-sliders' />
				</button>
			</div>

			<div className='searchbar-section'>
				<label htmlFor='search-user'>
					<i className='fa fa-search' />
				</label>
				<input
					onChange={handleSearch}
					type='search'
					id='search-user'
					placeholder='Search by name'
				/>
			</div>

			{usersDisplay}
		</div>
	);
}
