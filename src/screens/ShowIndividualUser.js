import React, { useContext } from 'react';
import './ShowIndividualUser.css';

import AppContext from '../config/AppContext';

export default function ShowIndividualUser() {
	const { userDetails } = useContext(AppContext);

	return (
		<div className='container3'>
			<div className='profile-section'>
				<img
					src={userDetails && userDetails.profile.pictureUrl}
					alt={userDetails && userDetails.profile.name}
				/>

				<table cellSpacing='8'>
					<tbody>
						<tr>
							<td>Name</td>
							<td>:</td>
							<td>{userDetails && userDetails.profile.name}</td>
						</tr>
						<tr>
							<td>User ID</td>
							<td>:</td>
							<td>{userDetails && userDetails.profile.userId}</td>
						</tr>
						<tr>
							<td>Total meals</td>
							<td>:</td>
							<td>{userDetails && userDetails.totalMeals}</td>
						</tr>
						<tr>
							<td>Active from</td>
							<td>:</td>
							<td>
								{userDetails && new Date(userDetails.earliestDate).toDateString()}
							</td>
						</tr>
						<tr>
							<td>Active until</td>
							<td>:</td>
							<td>
								{userDetails && new Date(userDetails.latestDate).toDateString()}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3>Meals and Dishes</h3>

			{Object.values(userDetails.calendar.daysWithDetails).map((day) => (
				<div key={day.day.id} className='day-section'>
					<p>{new Date(day.day.date).toDateString()}</p>

					{Object.values(day.details.mealsWithDetails).map((meal) => (
						<div key={meal.meal.id} className='meal-section'>
							<p>{meal.meal.type}</p>
							<ul>
								{Object.values(meal.details.dishes).map((dish) => (
									<li key={dish.id}>{dish.name}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
