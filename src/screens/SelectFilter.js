import React, { useContext } from 'react';
import './SelectFilter.css';

import FilterForm from '../components/FilterForm';
import AppContext from '../config/AppContext';

export default function SelectFilter() {
	const { setFilters, setScreen } = useContext(AppContext);

	return (
		<div className='container1'>
			<h1>User Analyzer</h1>
			<p>Select filters to generate report</p>
			<FilterForm setFilters={setFilters} setScreen={setScreen} />
		</div>
	);
}
