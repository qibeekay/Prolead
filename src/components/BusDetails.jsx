import React, { useState } from 'react';
import Img from '../assets/img-15.jpg';

const BusDetails = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl px-4 mx-auto py-20'>
				<div className='font-medium flex flex-col gap-10'>
					<p className=' leading-8 md:pr-[12rem]'>
						Our business development division offers a full suite of services to
						large corporations and small-scale businesses alike. Whether you are
						a fortune 500 company or a coffee shop by the next street;
						established corporation or aspiring start-up, you are guaranteed an
						equal space, attention, and respect from our ever-supportive team.
						Our services include:
					</p>
					<div>
						<ul className='list-disc pl-8 leading-8'>
							<li>Management Consulting</li>
							<li>Strategic Business planning and modelling</li>
							<li>Marketing and branding</li>
							<li>Market research and feasibilty study</li>
							<li>Business and Contract Documents Preparation</li>
							<li>Financial analysis</li>
							<li>Operational review</li>
							<li>Bookkeeping, Accounting, and Payroll</li>
							<li>Technical Presentations and Content Creation</li>
						</ul>
					</div>
					{/* image */}
					<div>
						<div className='aspect-[2/1] rounded-[3rem] overflow-hidden'>
							<img className='w-full' src={Img} alt='' />
						</div>
					</div>

					<div className='mt-6'>
						<p className='leading-8 md:pr-[10rem]'>
							Unleash your company's full potential with Prolead Business
							Consulting services. Our seasoned advisors will partner with you
							to transform challenges into growth opportunities. We tailor
							innovative strategies that refine your operations, ignite
							productivity, and amplify your market presence. Experience the
							alchemy of wisdom and creativity with Prolead through the
							following consulting services:
						</p>
					</div>

					<div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>
								Strategic Business Planning and Modeling
							</p>
							<p className='leading-8 md:pr-[10rem]'>
								Chart your course to success with our unique approach to
								Strategic Business Planning and Modeling. We sculpt your vision
								into a strategic masterpiece, blending industry insights with
								innovation for a bespoke roadmap. Our dynamic models simulate
								your business universe, ensuring you're primed for success.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>
								Business Plan and Proposal Writing
							</p>
							<p className='leading-8 md:pr-[10rem]'>
								Ignite potential with our unique Business Plan and Proposal
								Writing style. Let our wordsmiths craft compelling stories that
								capture your essence, attracting stakeholders with narratives
								that resonate. Propel your ambitions from concept to captivating
								proposals that open doors.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Marketing and Branding</p>
							<p className='leading-8 md:pr-[10rem]'>
								We are excited to transform your brand with Our Marketing and
								Branding magic. We weave your unique value into an enchanting
								brand tapestry, captivating customers and setting you apart. Our
								strategic alchemy turns your brand into a beacon in the
								marketplace.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>
								Market Research and Feasibility Study
							</p>
							<p className='leading-8 md:pr-[10rem]'>
								At Prolead, we are equipped with excellent talents to help you
								navigate the market through a thorough Market Research and
								Feasibility Studies. We unearth hidden gems and gauge the wind
								of demand with our incisive analysis. We transform data into
								your strategic compass, guiding your journey to market
								leadership.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>
								Business and Contract Documents Development and Review
							</p>
							<p className='leading-8 md:pr-[10rem]'>
								Elevate your business dealings with our expert document
								development and review services. We ensure every contract and
								document reflects your vision and strategic intentions with
								precision and legal acuity, strengthening your negotiation
								position.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Financial Analysis</p>
							<p className='leading-8 md:pr-[10rem]'>
								Illuminate your financial landscape with our comprehensive
								financial analysis. Our Financial Analysis cuts through the fog,
								revealing the fiscal impacts of your strategic choices. Command
								your finances with insights that sharpen your competitive edge
								and fuel prosperity.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Strategic Repositioning</p>
							<p className='leading-8 md:pr-[10rem]'>
								Secure your market dominance with our strategic repositioning
								services. We develop a robust brand identity that not only
								resonates with your audience but also stands the test of time.
								Through meticulous trend analysis and asset realignment, we
								guide your business towards unprecedented success. Let's turn
								your vision into a magnetic force in the marketplace.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Economic Forecasting</p>
							<p className='leading-8 md:pr-[10rem]'>
								Navigate the future's economic landscape with confidence. With
								cutting-edge analytics and seasoned insight, we forecast pivotal
								trends and economic shifts to empower your decision-making.
								Partner with us to harness the power of foresight, securing your
								business's tomorrow, today.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Policy Analysis</p>
							<p className='leading-8 md:pr-[10rem]'>
								Our experts will help shape the future of your organization by
								dissecting the fabric of policy implications, ensuring you are
								steps ahead in regulatory landscapes. We translate complex
								policy into clear, actionable intelligence, positioning your
								business as an informed leader ready for regulatory evolutions.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Business Coaching</p>
							<p className='leading-8 md:pr-[10rem]'>
								Unlock your leadership potential with our transformative
								business coaching. We're your catalyst for transformation,
								challenging and nurturing your leadership. Forge a legacy of
								success with a coach who believes in your abilities and the
								power of your dreams.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Operational Review</p>
							<p className='leading-8 md:pr-[10rem]'>
								At Prolead, we dissect your processes, infusing them with
								efficiency and excellence. Our meticulous approach reengineers
								your daily operations, turning every cog in your operation into
								a stride towards peak performance.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>
								Bookkeeping, Accounting, and Payroll
							</p>
							<p className='leading-8 md:pr-[10rem]'>
								Control your financial narrative with our bookkeeping,
								accounting, and payroll services. Our meticulous management
								translates financial data into strategic insights, paving the
								way for continuous financial success.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>
								Technical Presentations and Content Creation
							</p>
							<p className='leading-8 md:pr-[10rem]'>
								Captivate your audience with outstanding Technical Presentations
								and Content Creation. Our blend of technical prowess and
								storytelling turns complex concepts into compelling tales.
								Elevate your message with content that informs, engages, and
								inspires action.
							</p>
						</div>
						<div className='mt-4'>
							<p className='font-bold text-lg'>Project Management</p>
							<p className='leading-8 md:pr-[10rem]'>
								Realize your project goals with our expert project management
								services. Our strategic foresight and meticulous planning
								transform your projects into monuments of efficiency. Join
								forces with us to steer your endeavors towards legendary
								completions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusDetails;
