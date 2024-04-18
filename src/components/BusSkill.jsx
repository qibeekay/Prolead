import React from 'react';

const BusSkill = () => {
	return (
		<div className='w-full text-white relative bg-hero h-full bg-cover bg-center bg-no-repeat'>
			<div className='w-full h-full absolute bg-gradient-to-r from-black to-blue/80 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 py-20 relative z-50'>
				<div className='flex flex-col sm:flex-row gap-10 sm:justify-evenly text-sm md:text-lg'>
					{/* skills */}
					<div className='flex flex-col gap-7'>
						<h1 className='font-semibold text-lg md:text-xl underline'>
							ADMNISTRATIVE SKILLS
						</h1>
						<ul className='grid gap-1'>
							<li>Accountability in the Workplace</li>
							<li>Administrative Office Procedures</li>
							<li>Administrative Support</li>
							<li>Archiving and Records Management</li>
							<li>Basic Accounting and Bookkeeping</li>
							<li>Payroll Administration</li>
							<li>Filing and Inventory Management</li>
							<li>Business Writing</li>
							<li>Collaborative Business Writing</li>
							<li>Executive and Personal Assistants</li>
							<li>Meeting Management</li>
							<li>Organizational Skills</li>
							<li>Social Media in the Workplace</li>
							<li>Supply Chain Management</li>
						</ul>
					</div>
					{/* human */}
					<div className='flex flex-col gap-7'>
						<h1 className='font-semibold text-lg md:text-xl underline'>
							HUMAN RESOURCES SUPPORT
						</h1>
						<ul className='grid gap-1'>
							<li>Business Succession Planning</li>
							<li>Contract Management</li>
							<li>Crisis Management</li>
							<li>Developing a Lunch and Learn</li>
							<li>Diversity and Inclusion</li>
							<li>Employee Onboarding</li>
							<li>Employee Recruitment</li>
							<li>Employee Termination Processes</li>
							<li>Generation Gaps</li>
							<li>Health and Wellness at Work</li>
							<li>Hiring Strategies</li>
							<li>Human Resource Management</li>
							<li>Managing Workplace Harassment</li>
							<li>Measuring Results from Training</li>
							<li>Millennial Onboarding</li>
							<li>Office Health and Safety</li>
							<li>Sensitivity Training</li>
							<li>Talent Management</li>
							<li>Train-The-Trainer</li>
							<li>Unconscious Bias</li>
							<li>Universal Safety Practices</li>
							<li>Workplace Bullying</li>
							<li>Workplace Diversity</li>
							<li>Workplace Harassment</li>
							<li>Workplace Violence</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusSkill;
