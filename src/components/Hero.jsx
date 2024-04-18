import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className='w-full relative bg-hero h-full bg-cover bg-center bg-no-repeat'>
			<div className='w-full h-full absolute bg-gradient-to-r from-black to-blue/80 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 py-10 sm:py-16 lg:py-20 relative z-50 flex flex-col items-center justify-center md:flex-row '>
				{/* hero text */}
				<div className=' text-white mb-10'>
					<h1 className='flex flex-col text-xl xs:text-3xl sm:text-5xl md:text-4xl lg:text-[3.5rem] lg:leading-[4.5rem] font-bold'>
						Superior <span>Consulting Service</span>
					</h1>

					<p className='text-xs text-white/70 mr-[20%] lg:mr-[40%] my-5 md:my-10 leading-6'>
						At Prolead Consulting, We Leverage on Professionalism, leadership,
						our high performing team, and contemporary technology to provide
						outstanding consulting and training services to our Esteemed
						customers
					</p>

					<Link
						to={'/contact-us'}
						className='bg-white text-blue hover:bg-blue hover:text-white duration-300 ease-in btn'>
						<button>Contact us</button>
					</Link>
				</div>
				{/* hero img */}
				<div className='relative'>
					<div className='hidden xs:block xs:absolute bg-blueCyan xs:left-[4rem] md:left-[3rem] md:top-4 lg:left-[4rem] lg:top-4 w-[5rem] aspect-square rounded-full'></div>
					<div className='hidden xs:block xs:absolute bg-lightBlue xs:right-[3rem] md:right-[1rem] md:top-6 lg:right-[2rem] lg:top-7 w-[7rem] aspect-square rounded-full'></div>
					<div className='hidden xs:block xs:absolute xs:bottom-[3rem] md:bottom-[3rem] lg:bottom-[4rem] lg:left-0 bg-lightBlue w-[6rem] aspect-square rounded-full'></div>
					<div className='relative w-[80vw] md:w-[40vw] aspect-square rounded-full overflow-hidden bg-hero1 bg-cover bg-no-repeat bg-center'></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
