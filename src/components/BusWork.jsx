import React from 'react';

const BusWork = () => {
	return (
		<div>
			<div className='w-full text-lightBlue relative'>
				<div className='max-w-6xl mx-auto px-4 py-20 relative z-50'>
					<div className='flex flex-col sm:flex-row gap-10 sm:justify-evenly text-sm md:text-lg'>
						{/* skills */}
						<div className='flex flex-col gap-7'>
							<h1 className='font-semibold text-lg md:text-xl underline'>
								Workplace Essentials
							</h1>
							<ol className='grid gap-1 list-decimal'>
								<li>Appreciative Inquiry</li>
								<li>Business Acumen</li>
								<li>Business Ethics</li>
								<li>Business Etiquette</li>
								<li>Change Management</li>
								<li>Conflict Resolution</li>
								<li>Customer Service</li>
								<li>Customer Support</li>
								<li>Cyber Security</li>
								<li>Delivering Constructive Criticism</li>
								<li>Developing Corporate Behavior</li>
								<li>Handling a Difficult Customer</li>
								<li>Networking Within the Company</li>
								<li>Networking Outside the Company</li>
								<li>Respect in the Workspace</li>
								<li>Responsibility in the Workspace</li>
								<li>Risk Assessment and Management</li>
								<li>Safety in the Workplace</li>
								<li>Teamwork And Team Building</li>
							</ol>

							<div className='flex flex-col sm:mt-20 gap-7'>
								<h1 className='font-semibold text-lg md:text-xl'>
									Essential Microsoft Software
								</h1>

								<ul className='list-decimal grid gap-1'>
									<li>Excel (Beginner, Intermediate and Advanced)</li>
									<li>Outlook Essentials</li>
									<li>Powerpoint Essentials</li>
									<li>Word (Beginner, Intermediate and Advanced)</li>
									<li>Project (Beginner, Intermediate and Advanced)</li>
									<li>Visio Essential</li>
								</ul>
							</div>
						</div>
						{/* human */}
						<div className='flex flex-col gap-7'>
							<h1 className='font-semibold text-lg md:text-xl underline'>
								Personal Development
							</h1>
							<ol className='grid gap-1 list-decimal'>
								<li>Anger Management</li>
								<li>Attention Management</li>
								<li>Being A likeable Boss</li>
								<li>Critical Thinking</li>
								<li>Emotional Intelligence</li>
								<li>Improving Mindfulness</li>
								<li>Improving Self-Awareness</li>
								<li>Increasing Your Happiness</li>
								<li>Job Search Skills</li>
								<li>Life Coaching Essentials</li>
								<li>Managing Personal Finances</li>
								<li>Managing Workplace Anxiety</li>
								<li>Personal Productivity</li>
								<li>Public Speaking</li>
								<li>Social Intelligence</li>
								<li>Social Learning</li>
								<li>Stress Management</li>
								<li>Taking Initiative</li>
								<li>Trust Building and Resilience</li>
								<li>Work-Life Balance</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusWork;
