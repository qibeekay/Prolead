import React from 'react';
import Img from '../assets/img-18.png';

const ScholedgeDetails = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='font-medium flex flex-col gap-10'>
					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						Scholedge is a virtual peer academic and social interaction platform
						for higher institution students. It is an environment where learners
						across the globe meet, share knowledge, and collaborate seamlessly
						online. It aims to bridge knowledge and information gap and
						encourage innovation and collaboration among students globally.
					</p>
					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						Join us as we lunch this innovative and revolutionary Software
						application. that will transform how students learn, collaborate,
						share knowledge, and socialize. With Scholedge Software application,
						students around the world can meet and interact seamlessly. The
						Software application provides the opportunity to share ideas and
						collaborate to achieve goals better and faster, while also building
						friendship and social integration.
					</p>

					<div>
						<div className='aspect-[2/.8] overflow-hidden'>
							<img src={Img} alt='' />
						</div>
					</div>

					<div>
						<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
							The main aim of this Software application is to provide a unique
							platform for students to:
						</p>

						<ul className='list-disc pl-8 leading-8'>
							<li>Collaborate seamlessly and share knowledge and resources</li>
							<li>
								Interact with lecturers and students globally to discuss topics
								of interest and get solution to specific or general academic
								problems
							</li>
							<li>
								Create study groups within and across institutions and share
								knowledge and resources within a specific field
							</li>
							<li>
								Share video and audio recordings as well as text on academic
								topics and issues of interest
							</li>
							<li>
								Socialize with other students across institutions and beyond
								national borders.
							</li>
							<li>
								Learn out of the box. Gain other skills such as technical,
								vocational, or entrepreneurial skills
							</li>
							<li>
								Stay relevant on academic and career opportunities around the
								world
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScholedgeDetails;
