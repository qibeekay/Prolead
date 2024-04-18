import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
	return (
		<div className='w-full text-white relative bg-project2 h-full bg-cover bg-center bg-no-repeat'>
			<div className='w-full h-full absolute bg-gradient-to-r from-black/90 to-blue/80 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 relative z-50 py-20 flex flex-col md:flex-row sm:gap-10 md:gap-20'>
				{/* text */}
				<div className='w-full flex flex-col gap-14'>
					<h1 className='font-bold text-2xl'>Project Management</h1>
					<p className='leading-8'>
						Accelerate value delivery in your organization by engaging our firm
						to manage your projects. Our talented and high performing team with
						multi-industry experience are waiting to help you achieve your
						project goals within your budget and schedule.
					</p>
					<h1 className='font-bold text-2xl'>
						We offer consulting sevices in the followind areas:
					</h1>
					<ul className='list-disc pl-4'>
						<li className='pt-1'>End-to-end Project Execution</li>
						<li className='pt-1'>Project Planning</li>
						<li className='pt-1'>
							Project Review, repositioning and evaluation
						</li>
						<li className='pt-1'>Adopting Agile Methodology</li>
						<li className='pt-1'>Adopting Lean/Six Sigma</li>
						<li className='pt-1'>
							Developing Project Management Tools and Templates
						</li>
						<li className='pt-1'>Project Management Training</li>
					</ul>

					<Link
						to={'/project-management'}
						className='bg-white text-lightBlue hover:bg-lightBlue hover:text-white duration-300 ease-in btn w-fit'>
						<button>View Details</button>
					</Link>
				</div>
				{/* image */}
				<div className='mt-14 sm:mt-0 w-full sm:flex sm:items-center sm:justify-center md:block'>
					<div className='sm:w-[60vw] md:w-[40vw] h-[70vh] md:h-[90%] rounded-tr-[2rem] rounded-tl-[2rem] bg-project1 bg-cover bg-no-repeat bg-center'></div>
				</div>
			</div>
		</div>
	);
};

export default Project;
