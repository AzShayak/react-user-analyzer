import React, { useContext } from 'react';
import './EditFilter.css';

import FilterForm from '../components/FilterForm';
import AppContext from '../config/AppContext';

export default function EditFilter() {
	const { setFilters, setScreen } = useContext(AppContext);

	return (
		<div className='container4'>
			<div>
				<h1>Edit Filter</h1>
				<button onClick={() => setScreen(2)}>&#215;</button>
			</div>
			<FilterForm setFilters={setFilters} setScreen={setScreen} />
		</div>
	);
}
