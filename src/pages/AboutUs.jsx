import React from 'react';
import OtherHero from '../components/OtherHero';
import AboutDetail from '../components/AboutDetail';
import AboutMission from '../components/AboutMission';
import AboutValue from '../components/AboutValue';

const AboutUs = () => {
	const h1 = 'About us';
	const link = 'about-us';
	const bg = 'bg-about';
	return (
		<div>
			<div>
				<OtherHero me={h1} to={link} bg={bg} />
				<AboutDetail />
				<AboutMission />
				<AboutValue />
			</div>
		</div>
	);
};

export default AboutUs;
