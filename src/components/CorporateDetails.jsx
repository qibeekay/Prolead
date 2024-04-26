import React, { useState } from 'react';

const CorporateDetails = () => {
	const [accord, setAccord] = useState(false);

	const toggle = (e) => {
		if (accord === e) {
			return setAccord(null);
		}

		setAccord(e);
	};
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl px-4 mx-auto py-20'>
				<div className='font-medium flex flex-col gap-10'>
					<p className='leading-8 md:pr-[10rem] grid'>
						<i className='text-sm mb-2'>
							<q>Once we stop learning, we start dying.</q> - Albert Einstein
						</i>
						Our corporate training programs are designed to equip business
						leaders, managers, and employees at all levels with the essential
						skills needed to address the growing complexities, challenges, and
						uncertainties of today's business landscape. As the work environment
						evolves with rapid technological advances and continuous innovation,
						maintaining relevance requires ongoing, on-the-job learning. No one,
						from top executives to entry-level staff, is exempt from this
						requirement. Our comprehensive training offerings span a broad
						spectrum of topics, ensuring that both organizational and personal
						development needs are met effectively. Our services cover:
					</p>

					{/* accordion */}
					<div>
						<div className='grid gap-8'>
							<div className=''>
								<div
									className='flex flex-col gap-2 xs:flex-row xs:gap-5 font-bold text-xs xs:text-sm sm:text-base md:text-2xl cursor-pointer bg-white'
									onClick={() => toggle('executive')}>
									<div className='bg-lightBlue text-white w-4 xs:w-5 sm:w-6 md:w-8 grid items-center justify-center aspect-square rounded-full'>
										<span className=''>
											{accord === 'executive' ? '-' : '+'}
										</span>
									</div>
									<h1>EXECUTIVE AND BUSINESS LEADERS</h1>
								</div>
								<div
									className={
										accord === 'executive'
											? 'max-h-[9999px] h-auto w-[70%] mt-4 ml-8 xs:ml-14 px-4 pt-6 pb-20 bg-blueCyan/20 rounded-xl grid gap-5'
											: 'max-h-0 overflow-hidden'
									}>
									<p className='text-xs xs:text-sm sm:text-base'>
										"Leadership and learning are indispensable to each other." -
										John Fizgerald Kennedy
									</p>
									<p className='text-xs xs:text-sm sm:text-base'>
										Our leadership training is designed to provide skills and
										techniques that will help you become a 21st century
										transformational leader. You will learn how to move your
										organisation to a new horizon using cutting-edge leadership
										styles and tools. The leadership school is designed for
										senior and middle management staff who have responsibilty
										for other people, and for thos aspiring to become leaders.
									</p>
									<p className='text-xs xs:text-sm sm:text-base'>
										We have packaged a wide range of courses that will help you
										become an exceptional leader in your business or workplace.
										They Include:
									</p>
									<ul className='list-disc ml-8 text-xs xs:text-sm sm:text-base'>
										<li>New concepts in Strategic Leadership</li>
										<li>Leadership and Motivation</li>
										<li>Crisis Management</li>
										<li>Team Building and Team Management</li>
										<li>Delagation and Superision</li>
										<li>Coaching and Mentoring</li>
										<li>Business Risk Management</li>
										<li>Corporate Governace</li>
										<li>Agile Business Management</li>
										<li>Change Mangement</li>
										<li>Effective Business Communication</li>
										<li>Succession Planning</li>
										<li>Effective Time Management</li>
										<li>Stress Management</li>
									</ul>
								</div>
							</div>

							{/* Manager */}
							<div className=''>
								<div
									className='flex flex-col gap-2 xs:flex-row xs:gap-5 font-bold text-xs xs:text-sm sm:text-base md:text-2xl cursor-pointer bg-white'
									onClick={() => toggle('manage')}>
									<div className='bg-lightBlue text-white w-4 xs:w-5 sm:w-6 md:w-8 grid items-center justify-center aspect-square rounded-full'>
										<span className=''>{accord === 'manage' ? '-' : '+'}</span>
									</div>
									<h1>MANAGERS AND SUPERVISORS</h1>
								</div>
								<div
									className={
										accord === 'manage'
											? 'max-h-[9999px] h-auto w-[70%] mt-4 ml-8 xs:ml-14 px-4 pt-6 pb-20 bg-blueCyan/20 rounded-xl grid gap-5'
											: 'max-h-0 overflow-hidden'
									}>
									<p className='text-xs xs:text-sm sm:text-base'>
										One critical attribute of a good manager is continous
										improvement. Regardless of your sector or the number of
										staff you supervise, you need to stay relevant and ahead by
										constantly sharpening and upgrading your skill set.
									</p>
									<p className='text-xs xs:text-sm sm:text-base'>
										And yesy, we recognize your busy schedules and frequently
										travelling. Maybe you are not even sure about what new
										skills suits you at the moment, We have it all figured out
										and will work with your calendar and current role to design
										a most appropriate program for you. Our topics include among
										others:
									</p>
									<ul className='list-disc ml-8 text-xs xs:text-sm sm:text-base'>
										<li>Leadership and Management</li>
										<li>Employee Motivation</li>
										<li>Lean Process And Six Sigma</li>
										<li>Office politics for Managers</li>
										<li>Supervising Others</li>
										<li>Team Building</li>
										<li>Virtual Team Building and Management</li>
										<li>Self-Leadership</li>
										<li>Knowledge Management</li>
										<li>Conducting Employee Reviews</li>
										<li>Facilitation Skills</li>
										<li>Budgeting and Financial Reports</li>
										<li>Developing New Managers</li>
										<li>Procurement Management</li>
										<li>Coaching Sales Team</li>
										<li>Project Management</li>
										<li>Event Planning</li>
										<li>Motivating Your Sales Team</li>
										<li>Presentation Skills</li>
										<li>Servant Leadership</li>
										<li>Trade Show Staff Training</li>
										<li>Business Succession Planning</li>
										<li>Contract Management</li>
										<li>Crisis Management</li>
									</ul>
								</div>
							</div>

							{/* Employee */}
							<div className=''>
								<div
									className='flex flex-col gap-2 xs:flex-row xs:gap-5 font-bold text-xs xs:text-sm sm:text-base md:text-2xl cursor-pointer bg-white'
									onClick={() => toggle('employee')}>
									<div className='bg-lightBlue text-white w-4 xs:w-5 sm:w-6 md:w-8 grid items-center justify-center aspect-square rounded-full'>
										<span className=''>
											{accord === 'employee' ? '-' : '+'}
										</span>
									</div>
									<h1>EMPLOYEE TRAINING PROGRAMME</h1>
								</div>
								<div
									className={
										accord === 'employee'
											? 'max-h-[9999px] h-auto w-[70%] mt-4 ml-8 xs:ml-14 px-4 pt-6 pb-20 bg-blueCyan/20 rounded-xl'
											: 'max-h-0 overflow-hidden'
									}>
									<p className='text-xs xs:text-sm sm:text-base'>
										Employee continuous improvement is key to getting the job
										done and achieving competitive advantage. We have identified
										a vast collection of topics to choose from, whether you need
										to update an existing skill or introduce a new one to your
										employees, you can select as many topics as you desire, and
										we will deliver with utmost professionalism and flexibility
										within your budget. Also, for individual employees who are
										striving to up their career game and climb the leader fast,
										contact us today.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CorporateDetails;
