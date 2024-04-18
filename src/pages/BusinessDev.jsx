import React from 'react';
import BusHero from '../components/BusHero';
import BusDetails from '../components/BusDetails';

const BusinessDev = () => {
	const h1 = 'Business Development';
	const link = 'business-development';
	const bg = 'bg-business';
	return (
		<div>
			<BusHero me={h1} to={link} bg={bg} />
			<BusDetails />
		</div>
	);
};

export default BusinessDev;
