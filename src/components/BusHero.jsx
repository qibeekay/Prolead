import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BusHero = (props) => {
	return (
		<div
			className={`w-full text-white relative h-full ${props.bg} bg-cover bg-center bg-no-repeat`}>
			<div className='w-full h-full absolute bg-gradient-to-r from-black to-black/70 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 py-14 md:py-28 relative z-50'>
				<div>
					<h1 className='xs:text-3xl md:text-5xl font-bold mb-10 md:mb-14'>
						{props.me}
					</h1>
					<p className='flex flex-wrap items-center gap-2 text-xs sm:text-base'>
						<Link to={'/'}>Home </Link>
						<HiChevronRight />
						<Link to={'/business-development'}>Product and Services</Link>
						<HiChevronRight />
						<Link to={`/${props.to}`}>{props.me}</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default BusHero;
