import React, { useState } from 'react';
import './FilterForm.css';

export default function FilterForm({ setFilters, setScreen }) {
	// This form prevents user from selecting invalid date
	// date-from should not be after date-to
	// date-to should not be before date-from
	// and date-to should not be after current date

	const [dateFrom, setDateFrom] = useState('2015-01-01');
	const [dateTo, setDateTo] = useState('2017-01-01');
	const now = new Date();
	const currentDate = now.getFullYear() + '-' + now.getMonth() + 1 + '-' + now.getDate();

	const handleSubmit = (event) => {
		event.preventDefault();

		setFilters({
			dateFrom: event.target.from.value,
			dateTo: event.target.to.value,
			status: event.target.status.value,
		});

		setScreen(2);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Date</h1>
			<hr />

			<div className='date-selector'>
				<label htmlFor='date-from'>From</label>
				<input
					onChange={(e) => setDateFrom(e.target.value)}
					type='date'
					name='from'
					id='date-from'
					min='2015-01-01'
					max={dateTo}
					required
				/>
			</div>

			<div className='date-selector'>
				<label htmlFor='date-to'>To</label>
				<input
					onChange={(e) => setDateTo(e.target.value)}
					type='date'
					name='to'
					id='date-to'
					min={dateFrom}
					max={currentDate}
					required
				/>
			</div>

			<br />
			<h1>Status</h1>
			<hr />

			<div className='status-option'>
				<input type='radio' name='status' value='active' id='status-active' required />
				<label htmlFor='status-active'>Active</label>
			</div>

			<div className='status-option'>
				<input type='radio' name='status' value='super' id='status-super' required />
				<label htmlFor='status-super'>Super Active</label>
			</div>

			<div className='status-option'>
				<input type='radio' name='status' value='bored' id='status-bored' required />
				<label htmlFor='status-bored'>Bored</label>
			</div>

			<button type='submit'>Generate</button>
		</form>
	);
}
