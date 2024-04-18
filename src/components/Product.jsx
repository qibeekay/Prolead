import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
	return (
		<div className='w-full font-nunito text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 pb-10 pt-16'>
				<h1 className='text-center text-darkBlue text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-nunito font-bold my-5'>
					Product and Services
				</h1>

				<div className=' flex flex-col md:flex-row pt-6 pb-10'>
					<div className='flex flex-col gap-10'>
						<h1 className='text-darkBlue font-bold text-2xl'>
							Business Development
						</h1>

						<p className=' leading-8 lg:w-[73%]'>
							Our business development division offers a full suite of services
							to large corporations and small-scale businesses alike. Whether
							you are a fortune 500 company or a coffee shop by the next street;
							established corporation or aspiring start-up, you are guaranteed
							an equal space, attention, and respect from our ever-supportive
							team. Our services include:
						</p>

						<ul className='list-disc pl-4'>
							<li className='pb-1'>Management Consulting</li>
							<li className='pb-1'>
								Strategic Business Planning and Modelling
							</li>
							<li className='pb-1'>Marketing and Branding</li>
							<li className='pb-1'>Market Research and Feasibility Study</li>
							<li className='pb-1'>
								Business and Contract Documents Preparation
							</li>
							<li className='pb-1'>Financial Analysis</li>
							<li className='pb-1'>Operational Review</li>
							<li className='pb-1'>Bookkeeping, Accounting, and Payroll</li>
							<li className='pb-1'>
								Technical Presentations and Content Creation
							</li>
						</ul>

						<Link
							to={'/business-development'}
							className='bg-lightBlue text-white hover:bg-white hover:text-lightBlue duration-300 ease-in btn w-fit'>
							<button>View Details</button>
						</Link>
					</div>

					{/* image */}
					<div className='mt-20 md:mt-16 flex items-center justify-center md:block'>
						<div className='p-[6rem] xs:p-[8rem] sm:p-[12rem] w-[100px] h-[200px] xs:w-[150px] xs:h-[300px] sm:w-[220px] sm:h-[440px] rounded-[50%] border border-lightBlue bg-product bg-no-repeat bg-cover bg-center'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
