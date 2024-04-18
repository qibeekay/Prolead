import React from 'react';

const AboutDetail = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='grid gap-16'>
					<div className='flex flex-col gap-10 md:flex-row md:items-center md:gap-20'>
						{/* image */}
						<div className=''>
							<div className=' md:w-[40vw] aspect-[1/1] bg-abt2 bg-cover bg-center bg-blue rounded-[2rem]'></div>
						</div>
						{/* text */}
						<div>
							<p className='text-lg font-bold lg:text-2xl mb-2'>
								We Create & nurture
							</p>
							<p className='leading-6 sm:leading-8 lg:text-xl lg:leading-10'>
								We can help you imagine it, create it and nurture it. At Prolead
								Consulting, we leverage on professionalism, leadership, our high
								performing team, and contemporary technology. We combine
								innovation with agility to provide outstanding consulting and
								training services to our esteem customers.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-10 md:flex-row md:items-center md:gap-20 '>
						{/* image */}
						<div className=''>
							<div className=' md:w-[40vw] aspect-[1/1] bg-abt1 bg-cover bg-center rounded-[2rem]'></div>
						</div>
						{/* text */}
						<div>
							<p className='text-lg font-bold lg:text-2xl mb-5'>
								Flexible & Approach
							</p>
							<p className='leading-6 sm:leading-8 lg:text-xl lg:leading-10'>
								Our futuristic and adaptive approach, specialized services, as
								well as flexible and affordable pricing tailored to suit your
								specific needs have distinguished us in the consulting business.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-10 md:flex-row md:items-center md:gap-20'>
						{/* image */}
						<div className=''>
							<div className=' md:w-[40vw] aspect-[1/1] bg-abt3 bg-cover bg-center rounded-[2rem]'></div>
						</div>
						{/* text */}
						<div>
							<p className='text-lg font-bold lg:text-2xl mb-5'>
								Exceptional Services
							</p>
							<p className='leading-6 sm:leading-8 lg:text-xl lg:leading-10'>
								We pride ourselves in the ability to provide exceptional
								services in our key focus areas of business development,
								entrepreneurship, project management, education, and
								international travels.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutDetail;
