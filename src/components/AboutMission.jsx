import React from 'react';

const AboutMission = () => {
	return (
		<div className='w-full text-white relative bg-mission h-full bg-cover bg-center bg-no-repeat'>
			<div className='w-full h-full absolute bg-gradient-to-r from-black/90 to-blue/80 z-10'></div>
			<div className='max-w-6xl mx-auto px-4 relative z-50 py-20 md:py-32 flex flex-col md:flex-row sm:gap-10 md:gap-20'>
				<div>
					<div className='grid gap-5'>
						<h1 className='text-xl xs:text-2xl font-bold'>VISION STATEMENT</h1>
						<p className='text-sm xs:text-base md:text-xl font-bold sm:w-[27rem] md:w-[42rem]'>
							An agile firm focused on attaining global leadership in the
							business of consulting through innovative value co-creation and
							continuous improvement; leveraging on our cohesive team and
							contemporary technology.
						</p>
					</div>
					<div className='grid gap-5 mt-28'>
						<h1 className='text-xl xs:text-2xl font-bold'>MISSION STATEMENT</h1>
						<p className='text-sm xs:text-base md:text-xl font-bold sm:w-[27rem] md:w-[42rem]'>
							A modern company with futuristic approach committed to developing
							exceptional professionals and organizations through our simplified
							and cutting-edge business model.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMission;
