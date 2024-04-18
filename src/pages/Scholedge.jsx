import React from 'react';
import BusHero from '../components/BusHero';
import ScholedgeDetails from '../components/ScholedgeDetails';

const Scholedge = () => {
	const h1 = 'Scholedge';
	const link = 'scholedge';
	const bg = 'bg-scholedge';
	return (
		<div>
			<div>
				<BusHero me={h1} to={link} bg={bg} />
				<ScholedgeDetails />
			</div>
		</div>
	);
};

export default Scholedge;
