import React from 'react';
import OtherHero from '../components/OtherHero';
import CareersDetails from '../components/CareersDetails';

const Careers = () => {
	const h1 = 'Careers';
	const link = 'careers';
	const bg = 'bg-about';
	return (
		<div>
			<OtherHero me={h1} to={link} bg={bg} />
			<CareersDetails />
		</div>
	);
};

export default Careers;
