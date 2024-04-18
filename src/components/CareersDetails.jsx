import React from 'react';
import { Link } from 'react-router-dom';

const CareersDetails = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='flex flex-col gap-6'>
					<h1 className='font-bold text-2xl xs:text-3xl'>
						Join Our Team at Prolead Consulting
					</h1>
					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem]'>
						At Prolead Consulting, we believe in the transformative power of
						guidance and expertise to navigate the intricate landscape of
						business. Our mission is to empower organizations with innovative
						strategies, insightful analyses, and actionable solutions, driving
						them toward sustainable growth and excellence. As a budding leader
						in management and training consulting, our strength lies in our
						diverse team of professionals, whose passion, creativity, and
						dedication set the benchmark for industry standards.
					</p>
				</div>

				<div className='mt-6'>
					<p className='font-bold text-lg'>Why Prolead Consulting?</p>
					<div className='mt-4'>
						<ul className='list-disc pl-8 leading-8'>
							<li>
								Empowerment Through Diversity: At Prolead, we celebrate
								diversity in all its forms. We believe that a plethora of
								perspectives fosters innovation and creativity. Here, your voice
								is not just heard; it's valued.
							</li>
							<li>
								Continuous Learning and Growth: Professional development is not
								just an option; it's our ethos. With access to cutting-edge
								research, tools, and methodologies, you're always on the growth
								trajectory, ensuring you stay at the forefront of the industry.
							</li>
							<li>
								A Culture of Collaboration: Our collaborative environment
								encourages the sharing of ideas and best practices. By working
								together, we achieve more, creating lasting impacts for our
								clients and our communities.
							</li>
							<li>
								Make a Real Difference: With a focus on actionable insights and
								tailored strategies, your work directly contributes to the
								success and transformation of our clients' businesses. Witness
								the tangible impact of your contributions and be a part of their
								success stories.
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-6'>
					<p className='font-bold text-lg'>Your Pathway to Impact</p>
					<p className='leading-8 md:pr-[12rem] lg:pr-[6rem] mt-4'>
						Embarking on a career with Prolead Consulting means becoming part of
						a team that values bold ideas and a commitment to excellence. We are
						always looking for talented individuals who are eager to challenge
						the status quo and make a difference.
					</p>
					<div className='mt-6'>
						<p className='font-bold text-lg'>Available Positions</p>
						<p className='mt-4'>
							Below are some roles we are currently looking to fill:
						</p>
						<ul className='list-disc pl-8 leading-8 mt-4'>
							<li>
								<span className='font-bold'>Management Consultants:</span> Help
								our clients navigate their most complex challenges and turn
								insights into actions. Ideal candidates have a knack for
								strategic thinking and a passion for solving problems.
							</li>
							<li>
								<span className='font-bold'>Project Managers:</span> Challenge
								yourself by overseeing project planning and execution, ensuring
								timely delivery of value within budget, while coordinating team
								efforts and stakeholder communication.
							</li>
							<li>
								<span className='font-bold'>Project Coordinators:</span> Support
								the project planning and execution, handling logistics,
								scheduling, and assisting the Project Manager to ensure smooth
								project progression.
							</li>
							<li>
								<span className='font-bold'>Soft Developers:</span> create and
								maintain software applications, ensuring they meet user needs
								and deliver a seamless, high-quality digital experience.
							</li>
							<li>
								<span className='font-bold'>Training Specialists:</span> Develop
								and deliver dynamic training programs tailored to our clients'
								needs. This role is perfect for those who excel in communication
								and have a passion for empowering others through knowledge.
							</li>
							<li>
								<span className='font-bold'>Business Analysts:</span> Utilize
								your analytical prowess to provide deep insights and actionable
								recommendations. This role is suited for detail-oriented
								individuals with a strong quantitative background.
							</li>
							<li>
								<span className='font-bold'>Marketing Strategists:</span> Craft
								compelling narratives and strategies to enhance our brand's
								presence and drive engagement. Creative thinkers with a
								strategic mindset are welcome.
							</li>
							<li>
								<span className='font-bold'>HR Specialists:</span> Be at the
								heart of our growth by attracting, developing, and retaining top
								talent. This role is for those passionate about creating an
								enriching workplace culture.
							</li>
							<li>
								<span className='font-bold'>IT Support Specialists:</span>{' '}
								Support our mission with your technical skills by ensuring our
								systems are efficient, secure, and up-to-date. Ideal for problem
								solvers passionate about technology.
							</li>
						</ul>
					</div>

					<div className='mt-6'>
						<p className='font-bold text-lg'>How to Apply</p>
						<p className='leading-8 md:pr-[12rem] lg:pr-[6rem] mt-4'>
							Ready to take the next step? Send your CV along with a cover
							letter explaining why you're the perfect fit for Prolead
							Consulting to inquiries@proleadconsulting.com. For specific roles,
							please refer to the job descriptions and requirements listed on
							our careers page.
						</p>
						<p className='leading-8 md:pr-[12rem] lg:pr-[6rem] mt-4'>
							Prolead Consulting is an equal-opportunity employer. We celebrate
							diversity and are committed to creating an inclusive environment
							for all employees.
						</p>
					</div>

					<div className='mt-6'>
						<p className='font-bold text-lg'>Connect With Us</p>
						<p className='leading-8 md:pr-[12rem] lg:pr-[6rem] mt-4'>
							Have questions or want to know more about life at Prolead
							Consulting? Connect with us on LinkedIn or drop us an email at
							inquiries@proleadconsulting.com. Your future at Prolead Consulting
							starts today!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareersDetails;
