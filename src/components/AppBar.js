import React from 'react';
import './AppBar.css';

export default function AppBar({ screen, setScreen }) {
	return (
		<div className='appbar'>
			<div>
				{screen > 1 && (
					<button className='back-button' onClick={() => setScreen(screen - 1)}>
						<i className='fa fa-long-arrow-left fa-lg' />
					</button>
				)}
			</div>
		</div>
	);
}
