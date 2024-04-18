import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/scholedg.png';

const Scholed = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='flex flex-col gap-10'>
					<h1 className='font-bold text-2xl xs:text-3xl'>Scholedge</h1>
					<div className='w-[85%] bg-scho bg-cover bg-no-repeat bg-center aspect-[2/1] rounded-tr-[2rem] rounded-tl-[2rem] overflow-hidden'>
						{/* <img className='w-full' src={Img} alt='' /> */}
					</div>
					<p className='  text-base xs:text-justify sm:text-lg font-medium w-[80%] leading-8'>
						Scholedge is a virtual peer academic and social interaction platform
						for higher institution students. it is an environment where learners
						across the globe meet, share knowledge, and collaborate seamlessly
						online. it aims to bridge knowledge and information gap and
						encourage innovation and collaboration among students globally
					</p>

					<p className=' text-base xs:text-justify sm:text-lg font-medium w-[80%] leading-8'>
						Join us as we launch this innovative and revolutionary Software
						application. that will tranform how students learn, collaborate,
						share knowledge, and socialize. With Scholedge Software application,
						students around the world can meet and interact seamlessy. The
						Software application provides the opportunity to share ideas and
						collaborate to achieve goals better and faster, while also building
						friendship and social integration
					</p>

					<Link
						to={'/scholedge'}
						className='bg-blue text-white hover:bg-white hover:text-blue duration-300 ease-in btn w-fit'>
						<button>Contact us</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Scholed;
