import React from 'react';
import Hero from './Hero';
import Product from './Product';
import Project from './Project';
import Scholed from './Scholed';
import Travel from './Travel';
import About from './About';
import Testimonial from './Testimonial';

const Home = () => {
	return (
		<div>
			<Hero />
			<Product />
			<Project />
			<Scholed />
			<Travel />
			<About />
			<Testimonial />
		</div>
	);
};

export default Home;
