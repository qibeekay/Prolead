import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/img-10.png';

const Travel = () => {
	return (
		<div className='w-full text-white relative bg-travel h-full bg-cover bg-no-repeat'>
			<div className='w-full h-full absolute bg-gradient-to-r from-black to-blue/80 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 py-20 relative z-50'>
				<div>
					<h1 className='text-4xl font-bold mb-10'>Travel</h1>
					<div className='flex flex-col md:flex-row gap-10 md:gap-20'>
						<div>
							<p className='sm:text-justify leading-6 lg:text-xl lg:leading-10'>
								Are you a student desiring to study abroad? Or your plan is to
								relocate to Canda by yourself or with your family? or you desire
								to make your next holiday memorable by sightseeing some of the
								most beautiful places in Canada for a few weeks or months? We
								have you covered. Contact us today and we will help you achieve
								your goal without lifting a finger.
							</p>
						</div>
						{/* image */}
						<div className=''>
							<div className='md:w-[40vw]'>
								<img src={Img} alt='' />
							</div>
						</div>
					</div>

					<div className='mt-10'>
						<h1 className='text-2xl font-bold'>
							Other immigration program include:
						</h1>

						<div className='mt-10 flex flex-col md:flex-row md:justify-between lg:text-xl gap-10 md:gap-0'>
							<ul className='pl-10 list-disc'>
								<li className='pb-2'>Agric-Food Pilot</li>
								<li className='pb-2'>
									Health-care worker permanent resident pathway
								</li>
								<li className='pb-2'>Rural and Northern Immigration Pilot</li>
								<li className='pb-2'>Economic Mobility Pathways Pilot</li>
								<li className='pb-2'>
									Temporary resident to permanent resident pathway
								</li>
								<li className='pb-2'>Studentship and Work permit</li>
								<li className='pb-2'>Global Talent Stream</li>
							</ul>
							<ul className='pl-10 md:pl-0 list-disc mb-14'>
								<li className='pb-2'>Provincial Nomination Program</li>
								<li className='pb-2'>Family Class Immigration</li>
								<li className='pb-2'>Quebec Selected Immigration</li>
								<li className='pb-2'>Atlantic Immigration Pilot</li>
								<li className='pb-2'>Start-Up Visa</li>
								<li className='pb-2'>Self-Employed</li>
								<li className='pb-2'>Caregivers</li>
							</ul>
						</div>
						<Link
							to={'/travel'}
							className='bg-white text-lightBlue hover:bg-blue hover:text-white duration-300 ease-in btn w-fit'>
							<button>View Details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Travel;
