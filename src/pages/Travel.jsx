import React from 'react';
import BusHero from '../components/BusHero';
import TravelDetails from '../components/TravelDetails';

const Travel = () => {
	const h1 = 'Travels';
	const link = 'travel';
	const bg = 'bg-travel';

	return (
		<div>
			<div>
				<BusHero me={h1} to={link} bg={bg} />
				<TravelDetails />
			</div>
		</div>
	);
};

export default Travel;
