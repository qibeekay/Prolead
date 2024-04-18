import React from 'react';
import Img from '../assets/img-17.png';

const ProjectHero = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='font-medium flex flex-col gap-10'>
					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						Accelerate value delivery in your organization by engaging our firm
						to manage your projects. Our talented and high performing team with
						multi-industry experience are waiting to help you achieve your
						project goals within your budget and schedule.
					</p>

					<div>
						<h1 className='font-bold text-lg'>
							We offer consulting services in the following areas:
						</h1>

						<ul className='list-disc pl-8 leading-8'>
							<li>Project Management Consultancy</li>
							<li>End-to-end Project Execution</li>
							<li>Project Planning</li>
							<li>Project Review, repositioning and evaluation</li>
							<li>Adopting Agile Methodology</li>
							<li>Adopting Lean/Six Sigma</li>
							<li>Developing Project Management Tools and Templates</li>
							<li>Project Management Training</li>
						</ul>
					</div>

					<div>
						<div className='aspect-[2/1] overflow-hidden'>
							<img className='' src={Img} alt='' />
						</div>
					</div>

					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						Project managers are positioned to help organizations respond
						rapidly to the increasing complexities and dynamics in the business
						environment, meet customers’ needs, maximize resources, and save
						time by establishing consistent, repeatable methodologies that
						reduce risk, cut waste, and provide competitive advantage.
					</p>

					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						Are you planning to switch careers? Or do you need a world class
						project management certification to advance your career? We
						understand and we are with you. We will lead you to ace your
						certification examination on first attempt by taking you through our
						trusted strategies and unique approach with real life examples. We
						also go beyond that as we introduce you to processes, tools and
						techniques that will fortify your level of confidence whether you
						are a new entrant into the field or not.{' '}
						<span className='font-bold text-xl'>WE HAVE THE SECRET!</span>
					</p>

					<div>
						<h1 className='text-lg font-medium'>
							The 100% online training program is designed for:
						</h1>

						<ul className='list-disc leading-8 md:pr-[12rem] pl-8'>
							<li>
								Individuals in the field of Project/Program Management who are
								required to, or desire to scale up their career with world most
								recognized PM certifications.
							</li>
							<li>
								Professionals in fields such as constructions, healthcare,
								government, education, IT, non-profit, etc., that require
								project management skills.
							</li>
							<li>
								Individuals or group desiring to start a career in a most
								sought-after field.
							</li>
							<li>
								Project management students or graduates who seek to be properly
								positioned in the field.
							</li>
						</ul>
						<p className='text-lg font-medium mt-5'>
							Our training will adequately prepare you for various professional
							certification examinations such as Project Management Institute's
							CAPM and PMP, as well as any Scrum Master certification of your
							choice.
						</p>
					</div>

					{/* tables */}
					{/* <div>
						<div className='w-full grid grid-cols-8 grid-template gap-[2px] text-[7px] md:text-[10px] lg:text-sm font-normal text-white'>
							<p className='a bg-blue p-1 md:px-4 md:py-3'>Course</p>
							<p className='b bg-blue p-1 md:px-4 md:py-3'>Issuing Body</p>
							<p className='c bg-blue p-1 md:px-4 md:py-3'>
								Practice Questions
							</p> */}
					{/* <p className='d bg-blue p-1 md:px-4 md:py-3'>Duration</p>
							<p className='e bg-blue p-1 md:px-4 md:py-3'>Price($)</p>
							<p className='f bg-blue p-1 md:px-4 md:py-3'></p> */}
					{/* second */}
					{/* <p className='g bg-blue p-1 md:px-4 md:py-3'>PMP</p>
							<p className='h bg-blue p-1 md:px-4 md:py-3'>PMI</p>
							<p className='i bg-blue p-1 md:px-4 md:py-3'></p>
							<p className='j bg-blue p-1 md:px-4 md:py-3'>4 - 8 weeks</p>
							<p className='k bg-blue p-1 md:px-4 md:py-3'>200</p>
							<p className='l bg-blue p-1 md:px-4 md:py-3'>Buy/Add to Cart</p> */}
					{/* third */}
					{/* <p className='m bg-blue p-1 md:px-4 md:py-3'>Scrum</p>
							<p className='n bg-blue p-1 md:px-4 md:py-3'>Scrum.org</p>
							<p className='o bg-blue p-1 md:px-4 md:py-3'></p>
							<p className='p bg-blue p-1 md:px-4 md:py-3'>4 weeks</p>
							<p className='q bg-blue p-1 md:px-4 md:py-3'>200</p>
							<p className='r bg-blue p-1 md:px-4 md:py-3'>Buy/Add to Cart</p> */}
					{/* fourth */}
					{/* <p className='s bg-blue p-1 md:px-4 md:py-3'>MS Project</p>
							<p className='t bg-blue p-1 md:px-4 md:py-3'></p>
							<p className='u bg-blue p-1 md:px-4 md:py-3'></p>
							<p className='v bg-blue p-1 md:px-4 md:py-3'>4 weeks</p>
							<p className='w bg-blue p-1 md:px-4 md:py-3'>150</p>
							<p className='x bg-blue p-1 md:px-4 md:py-3'>Buy/Add to Cart</p> */}
					{/* last */}
					{/* <p className='y bg-blue p-1 md:px-4 md:py-3'>
								Important Notice: Our courses are preparatory and do not include
								the cost of the certification examination by the issuing
								institutions.
							</p>
						</div> */}
					{/* </div> */}

					<h1 className='font-bold text-xl mt-5'>
						Project Management for non- PM Professionals
					</h1>

					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						This training is designed for professionals in various sectors
						including healthcare, construction, government, non-profit,
						construction, etc., who are responsible for managing projects or
						desire to acquire specific project management skills. The program
						has been simplified to equip non-project management professionals
						with skills to plan, execute, and track projects effectively and
						successfully. You will learn different approaches to Project
						Management and all the essentials to deliver on complex projects
						seamlessly.
					</p>

					<div>
						<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
							We have designed a wide range of courses to suit your project
							management training needs. They include:
						</p>
						<ul className='list-disc leading-8 md:pr-[12rem] pl-8'>
							<li>Approaches to Project Management</li>
							<li>Project Management Processes and Phases</li>
							<li>Project management components</li>
							<li>Project Planning</li>
							<li>The Planning Cycle</li>
							<li>Knowledge Areas</li>
							<li>Project Management Tools and Techniques</li>
							<li>Monitoring, Evaluation and Lesson Learned</li>
							<li>Effective Project Management</li>
							<li>Negotiation Skills</li>
							<li>Microsoft Project</li>
							<li>Lean Six Sigma Approach</li>
							<li>Agile Methodologies</li>
							<li>Best Practices for Successful Project Management</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectHero;
