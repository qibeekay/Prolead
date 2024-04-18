import React from 'react';

const AboutValue = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='font-medium'>
					<h1 className='text-center font-bold text-xl mb-10'>CORE VALUES</h1>

					<p className='mb-10 md:pr-[10rem]'>
						Our values shape the culture of our organization and define the
						character of our firm which are exhibited daily by our highly
						talented team.
					</p>

					<ul className='list-disc pl-8'>
						<li>Professionalism</li>
						<li>Collaboration</li>
						<li>People</li>
						<li>Godliness</li>
						<li>Integrity</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutValue;
