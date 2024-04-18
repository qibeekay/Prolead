import React from 'react';
import OtherHero from '../components/OtherHero';
import BusSkill from '../components/BusSkill';
import BusWork from '../components/BusWork';
import CorporateDetails from '../components/CorporateDetails';

const Corporate = () => {
	const h1 = 'Corporate Training';
	const link = 'corporate-training';
	const bg = 'bg-corporate';
	return (
		<div>
			<OtherHero me={h1} to={link} bg={bg} />
			<CorporateDetails />
			<BusSkill />
			<BusWork />
		</div>
	);
};

export default Corporate;
