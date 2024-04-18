import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<div className='w-full text-lightBlue'>
			<div className='max-w-6xl mx-auto px-4 py-20'>
				<div>
					<div className='flex items-center justify-center'>
						<div className='w-[25rem] md:w-[30rem]'>
							<h1 className='text-2xl font-bold text-blue mb-3'>Contact us</h1>
							<p className='font-semibold'>
								Feel free to contact us at any time. we would get back to you as
								soon as we can
							</p>
						</div>
					</div>
					<form action='' className='flex items-center justify-center mt-10'>
						<div className='grid gap-5 w-[25rem] md:w-[30rem]'>
							{/* name */}
							<div>
								<label
									htmlFor='full_name'
									className='block mb-2 text-sm font-medium'>
									Full-name
								</label>
								<input
									type='text'
									className='text-sm rounded-lg block w-full p-2.5 bg-blueForm border-white text-blue outline-none'
									required
								/>
							</div>
							{/* email */}
							<div>
								<label
									htmlFor='full_name'
									className='block mb-2 text-sm font-medium'>
									E-mail
								</label>
								<input
									type='email'
									className='text-sm rounded-lg block w-full p-2.5 bg-blueForm border-white text-blue outline-none'
									required
								/>
							</div>
							{/* phone */}
							<div>
								<label
									htmlFor='full_name'
									className='block mb-2 text-sm font-medium'>
									Phone Number
								</label>
								<input
									type='text'
									className='text-sm rounded-lg block w-full p-2.5 bg-blueForm border-white text-blue outline-none'
									required
								/>
							</div>
							{/* message */}
							<div>
								<label
									htmlFor='message'
									className='block mb-2 text-sm font-medium'>
									Your message
								</label>
								<textarea
									id='message'
									rows='4'
									className='block p-2.5 w-full text-sm rounded-lg bg-blueForm border-white text-blue outline-none'></textarea>
							</div>

							<Link>
								<button className='btn bg-blue text-white border border-blue hover:bg-white hover:text-blue'>
									Submit
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
