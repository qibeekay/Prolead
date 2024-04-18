import React from 'react';
import Img from '../assets/img-20.png';
import Img1 from '../assets/img-19.png';

const TravelDetails = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div className='font-medium flex flex-col gap-10'>
					<p className='leading-8'>
						Are you a student desiring to study abroad? Or your plan is to
						relocate to Canada by yourself or with your family? Or you desire to
						make your next holiday memorable by sightseeing some of the most
						beautiful places in Canada for a few weeks or months? We have you
						covered. Contact us today and we will help you achieve your goal
						without lifting a finger.
					</p>

					<div>
						<div>
							<img src={Img} alt='' />
						</div>
					</div>

					<h1 className='font-bold text-xl'>Relocate to Canada</h1>

					<p className='leading-8'>
						Canada, the second largest country, in the world is a beautiful
						place with wonderful people. However, with ageing population and
						high capital, the country has embarked on massive immigration
						programs over the past years and plans to increase the numbers in
						the coming years. Canada currently has up to 16 different programs
						to encourage people to relocate permanently to the country. Each
						program has different qualification criteria and requirements. Do
						not worry, we will help you evaluate your profile, qualifications
						and circumstances and provide advice and guidance on the most
						suitable options for you.
					</p>

					<img src={Img1} alt='' />

					<h1 className='font-bold text-xl'>Canada Express Entry Program</h1>

					<p className='leading-8'>
						A point-based immigration program established by the Canadian
						government to attract skilled professionals to the Maple Leave
						country. At Prolead, we offer step-by-step application process, free
						eligibility assessment, point improvement strategies, and other
						advisory services.
					</p>

					<div>
						<p className='leading-8 font-lg font-semibold'>
							Other immigration programs include:
						</p>
						<ul className='list-disc pl-8 leading-8'>
							<li>Provincial Nomination Program</li>
							<li>Family Class Immigration</li>
							<li>Quebec Selected Immigration</li>
							<li>Atlantic Immigration Pilot</li>
							<li>Start-Up Visa</li>
							<li>Self-Employed</li>
							<li>Caregivers</li>
							<li>Agri-Food Pilot</li>
							<li>Health-care workers permanent residence pathway</li>
							<li>Rural and Northern Immigration Pilot</li>
							<li>Economic Mobility Pathways Pilot</li>
							<li>Temporary resident to permanent resident pathway</li>
							<li>Studentship and Work permit</li>
							<li>Global Talent Stream</li>
						</ul>
					</div>

					<h1 className='font-bold text-xl'>Study in Canada and the US</h1>

					<p className=''>We offer the following services:</p>

					<ul className='list-disc pl-8 leading-8'>
						<li>
							Admission Processing – From selecting the right school and
							program, to preparing a winning academic statement, and getting
							affordable student accommodation.
						</li>
						<li>
							Visa processing – We handle your visa processing from application,
							through follow-up, to approval.
						</li>
						<li>
							Financing – We stand out from the crowd by assisting our clients
							with access to soft loans through our loan department, by standing
							as a cosigner, and/or by providing referrals to our partners.
						</li>
						<li>
							Advisory services – Making a decision to study abroad can be
							difficult with so many contrasting ideas, financial
							considerations, etc. Talk to us today and thank us later.
						</li>
					</ul>

					<div>
						<h1 className='font-bold text-2xl mb-3'>Visit Canada</h1>
						<p>
							From the wonderful nature gift of Niagara Falls to several rich
							indigenous cultural museums and exciting urban adventures, Canada
							is home to numerous beautiful tourist attractions. You can spend
							up to 6 months in Canada with the Canada visitor visa. Our team
							will take care of the hassle from start to finish including visa
							processing, hotel reservations and memorable places to visit in
							Canada. Contact us today and let’s plan your next holiday
							together.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelDetails;
