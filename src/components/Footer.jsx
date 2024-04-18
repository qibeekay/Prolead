import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/f-logo.png';

const Footer = () => {
	return (
		<div className='w-full bg-blue text-white'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='flex flex-col gap-24 md:flex-row md:justify-between md:items-center'>
					{/* logo */}
					<div className=''>
						<Link className=''>
							<img className='w-[6rem]' src={Img} alt='' />
						</Link>
					</div>
					<div className='flex flex-col sm:flex-row gap-10 md:justify-evenly '>
						{/* contact */}
						<div className='sm:w-[50%] lg:w-[40%]'>
							<div className='flex flex-col gap-5'>
								<h1 className='font-bold text-lg'>Office Addresses:</h1>
								<div>
									<p className=' font-bold'>Canada</p>
									<p className=''>6167 Oak Meadows Drive, Ottawa, ON K1C 7G8</p>
								</div>

								<div>
									<p className='font-bold'>Abuja</p>
									<p className=''>
										Suite B010, Shekinah Plaza, Samuel Ladoke Akintola Boulevard
										Garki II, Abuja 
									</p>
									<p>Phone: +1 343 987 3818</p>
								</div>

								<div>
									<p className='font-bold'>Osogbo</p>
									<p className=''>
										Unique Success Academy Akinlade by Adewale Road, Alekuwodo,
										Osogbo, Osun State.
									</p>
								</div>
							</div>
						</div>
						{/* links */}
						<div>
							<div className='flex flex-col gap-5'>
								<h1 className='font-bold text-lg'>Quick Links</h1>
								<div className='grid gap-2'>
									<p>
										<Link to={'/business-development'}>
											Business Development
										</Link>
									</p>
									<p>
										<Link to={'/project-management'}>Project Management</Link>
									</p>
									<p>
										<Link to={'/testimonials'}>Testimonial</Link>
									</p>
									<p>
										<Link to={'/about-us'}>About us</Link>
									</p>
								</div>

								<div>
									<h1 className='font-bold text-lg mb-4'>
										{' '}
										For Enquiry/Support
									</h1>
									<p className=''>+1 343 987 3818</p>
									<p className='mt-2'>+234 803 154 3818</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
