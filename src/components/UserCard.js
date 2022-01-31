import React from 'react';
import './UserCard.css';

export default function UserCard({ onClick, profile }) {
	return (
		<button onClick={onClick} className='user-card'>
			<img src={profile.pictureUrl} alt={'Profile of ' + profile.name} />
			<div>
				<h3>{profile.name}</h3>
				<p>{profile.userId}</p>
			</div>
		</button>
	);
}
