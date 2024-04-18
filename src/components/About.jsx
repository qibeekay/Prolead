import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/img-4.png';
import Img1 from '../assets/img-7.png';
import Img2 from '../assets/img-8.png';

const About = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div>
					<h1 className='text-3xl font-bold text-center mb-10'>About Us</h1>

					<div className='grid gap-24'>
						{/* grid-1 */}
						<div className='flex flex-col gap-10 md:flex-row md:gap-20'>
							{/* text */}
							<div>
								<p className=' leading-6 sm:text-xl sm:leading-10'>
									We can help you imagine it, create it and nurture it. At
									Prolead Consulting, we leverage professionalism, leadership,
									our high performing team, and contemporary technology. We
									combine innovation with agility to provide outstanding
									consulting and training services to our esteemed customers.
								</p>
							</div>
							{/* image */}
							<div>
								<div className='md:w-[40vw]'>
									<img src={Img} alt='' />
								</div>
							</div>
						</div>

						{/* grid-2 */}
						<div className='flex flex-col gap-10 md:flex-row-reverse md:gap-20'>
							{/* text */}
							<div>
								<p className=' leading-8 sm:text-xl sm:leading-10'>
									Our futuristic and adaptive approach, specialized services, as
									well as flexible and affordable pricing tailored to suit your
									specific needs have distinguished us in the consulting
									business.
								</p>
							</div>
							{/* image */}
							<div>
								<div className='md:w-[40vw]'>
									<img src={Img1} alt='' />
								</div>
							</div>
						</div>

						{/* grid-3 */}
						<div className='flex flex-col gap-10 md:flex-row md:gap-20'>
							{/* text */}
							<div>
								<p className=' leading-8 sm:text-xl sm:leading-10'>
									We pride ourselves in the ability to provide exceptional
									services in our key focus areas of business development,
									entrepreneurship, project management, education, and
									international travels.
								</p>
							</div>
							{/* image */}
							<div>
								<div className='md:w-[40vw]'>
									<img src={Img2} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
