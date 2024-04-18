import React from 'react';

const Testimonial = () => {
	return (
		<div className='w-full text-white relative bg-testimonial h-full bg-cover bg-no-repeat'>
			<div className='w-full h-full absolute bg-black/70 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 py-20 relative z-50'>
				<div>
					<h1 className='text-center mb-20 text-2xl xs:text-4xl font-bold'>
						Testimonials
					</h1>

					<div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
						{/* grid-1 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							{/* <div className='w-[4rem] aspect-square rounded-full overflow-hidden'>
								<img className='w-full' src={Img} alt='' />
							</div> */}
							<div>
								<h2 className='font-bold'>Wumi Akinola</h2>
								<p className='text-sm'>CEO, McKins Technology Ltd</p>
							</div>
							<p className='text-sm md:text-base'>
								Prolead's strategic business planning transformed our corporate
								strategy. Their insights and contemporary approach propelled our
								company into new markets with confidence. Their professionalism
								and leadership were evident throughout our engagement.
							</p>
						</div>

						{/* grid-2 /*/}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							{/* <div className='w-[4rem] aspect-square rounded-full overflow-hidden'>
								<img className='w-full' src={Img} alt='' />
							</div> */}
							<div>
								<h2 className='font-bold'>Ikechuckwu Nwakama</h2>
								<p className='text-sm'>Senior Partner, Nakudu Law Partners</p>
							</div>
							<p className='text-sm md:text-base'>
								Our team's performance skyrocketed after Prolead's corporate
								training. The diverse topics covered and the emphasis on
								continuous learning have significantly impacted our adaptability
								and competitiveness. The training session was truly
								transformative.
							</p>
						</div>

						{/* grid-3 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							<div>
								<h2 className='font-bold'>Ben</h2>
								<p className='text-sm'>
									Managing Director, Unique Success Academy
								</p>
							</div>
							<p className='text-sm md:text-base'>
								The leadership training provided by Prolead Consulting has been
								pivotal in my development as a transformational leader. The
								cutting-edge leadership styles and tools they introduced have
								set a new horizon for our organization. The training is highly
								recommended.
							</p>
						</div>

						{/* grid-4 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							<div>
								<h2 className='font-bold'>Tayo Akinola</h2>
								<p className='text-sm'>Managing Director, Oduak Projects Ltd</p>
							</div>
							<p className='text-sm md:text-base'>
								Engaging Prolead for project management consultancy brought our
								complex projects to successful completion within budget and on
								schedule. Their expertise and adaptive methodologies were
								exactly what we needed.
							</p>
						</div>

						{/* grid-5 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							<div>
								<h2 className='font-bold'>Bukola Oduwole (PMP)</h2>
							</div>
							<p className='text-xs md:text-sm'>
								Participating in Prolead's Project Management Training and PMP
								Certification course was an enlightening and transformative
								experience that exceeded all my expectations. The instructors
								were seasoned professionals who shared valuable insights and
								strategies, ensuring we were not only prepared to pass the PMP
								exam but also to excel in our project management roles. I highly
								recommend the training and PMP Certification course to anyone
								looking to advance their project management expertise and
								achieve professional certification.
							</p>
						</div>

						{/* grid-6 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							<div>
								<h2 className='font-bold'>Segun Alabi</h2>
								<p>Principal Consultant/Founder, Lumina Synergy Inc.</p>
							</div>
							<p className='text-sm md:text-base'>
								Prolead Consulting's Entrepreneurship Development program was
								instrumental in nurturing my startup. From idea to execution,
								their guidance helped me avoid common pitfalls and achieve my
								business goals.
							</p>
						</div>

						{/* grid-6 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							<div>
								<h2 className='font-bold'>Mayowa Oluwaseun</h2>
							</div>
							<p className='text-sm md:text-base'>
								Navigating Canada's immigration programs to choose the best
								option for my family was seamless with expert advice from the
								Prolead team. Their comprehensive support and personalized
								guidance made our Canada relocation process stress-free and
								successful.
							</p>
						</div>

						{/* grid-7 */}
						<div className='bg-black/70 px-6 pt-10 pb-24 rounded-[2rem] grid gap-5'>
							<div>
								<h2 className='font-bold'>
									Akin Busayo (Seneca College, Canada)
								</h2>
							</div>
							<p className='text-sm md:text-base'>
								Prolead's assistance in processing my admission and visa for
								studying in Canada was exceptional. Their advisory services are
								top-notch, making them an invaluable partner in international
								education planning."
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
