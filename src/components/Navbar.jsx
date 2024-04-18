import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const Navbar = () => {
	const [modal, setModal] = useState(false);
	const [nav, setNav] = useState(false);

	const handleModal = () => setModal(!modal);
	// const handleNav = () => setNav(!modal);
	return (
		<header className='w-full'>
			<nav className='max-w-6xl p-4 mx-auto'>
				{/* desktop nav */}
				<div className='flex items-center justify-between text-blue'>
					{/* logo */}
					<Link to='/'>
						<img className='w-[8rem]' src={Logo} alt='logo' />
					</Link>

					{/* links */}
					<div className='hidden md:flex'>
						<ul className='flex items-center'>
							<li
								className=' font-semibold relative md:mr-10 lg:mr-14 cursor-pointer hover:text-darkBlue'
								onClick={handleModal}>
								<p className='flex items-center'>
									Services <FaCaretDown size={30} />
								</p>
								<div className={modal ? 'block' : 'hidden'}>
									{/* dropdownf */}
									<ul className='absolute -left-28 top-10 rounded-lg z-[100] w-[15rem] bg-lightBlue text-white overflow-hidden'>
										<Link to='/business-development'>
											<li className='p-3 hover:bg-blue'>
												Business Development
											</li>
										</Link>
										<Link to='/project-management'>
											<li className='p-3 hover:bg-blue'>Project Management</li>
										</Link>
										<Link
											to='/corporate-training'
											onClick={() => setNav(false)}>
											<li className='p-3 hover:bg-blue'>Corporate Training</li>
										</Link>
										<Link to='/scholedge'>
											<li className='p-3 hover:bg-blue'>Scholedge</li>
										</Link>
										<Link to='/travel'>
											<li className='p-3 hover:bg-blue'>Travel</li>
										</Link>
									</ul>
								</div>
							</li>
							<li className='font-semibold md:mr-10 lg:mr-14 hover:text-darkBlue'>
								<Link to='/testimonials'>Testimonials</Link>
							</li>
							<li className='font-semibold md:mr-10 lg:mr-14 hover:text-darkBlue'>
								<Link to='/about-us'>About us</Link>
							</li>
							<li
								className='font-semibold md:mr-10 lg:mr-14'
								onClick={() => setNav(false)}>
								<Link to='/careers'>Careers</Link>
							</li>
							<li className='font-semibold hover:text-darkBlue'>
								<Link to='contact-us'>Contact us</Link>
							</li>
						</ul>
					</div>

					{/* Burger Icon */}
					<div className=' md:hidden'>
						<div onClick={() => setNav(true)} className=' cursor-pointer'>
							<HiOutlineMenuAlt1 size={30} />
						</div>
					</div>
				</div>

				{/* mobile nav */}
				<div className={nav ? ' md:hidden relative text-blue' : ''}>
					<div
						className={
							nav
								? 'fixed bg-white top-0 left-0 p-4 w-full h-screen ease-out duration-500 z-[100]'
								: 'fixed bg-white top-0 left-[-100%] p-4 w-full h-screen ease-in duration-500 z-[100]'
						}>
						{/* logo */}
						<div className='flex items-center justify-between'>
							<Link to='/'>
								<img className='w-[8rem]' src={Logo} alt='logo' />
							</Link>
						</div>

						{/* links */}
						<div className='mt-20'>
							<ul className='flex flex-col gap-5'>
								<li
									className=' font-semibold relative md:mr-14 lg:mr-20 cursor-pointer'
									onClick={handleModal}>
									<p className='flex items-center'>
										Services <FaCaretDown size={30} />
									</p>
									<div className={modal ? 'block' : 'hidden'}>
										{/* dropdownf */}
										<ul className='absolute top-10 rounded-lg z-20 w-[15rem] bg-lightBlue text-white overflow-hidden'>
											<Link
												to='/business-development'
												onClick={() => setNav(false)}>
												<li className='p-3 hover:bg-blue'>
													Business Development
												</li>
											</Link>
											<Link
												to='/project-management'
												onClick={() => setNav(false)}>
												<li className='p-3 hover:bg-blue'>
													Project Management
												</li>
											</Link>
											<Link
												to='/corporate-training'
												onClick={() => setNav(false)}>
												<li className='p-3 hover:bg-blue'>
													Corporate Training
												</li>
											</Link>
											<Link to='/scholedge' onClick={() => setNav(false)}>
												<li className='p-3 hover:bg-blue'>Scholedge</li>
											</Link>
											<Link to='/travel' onClick={() => setNav(false)}>
												<li className='p-3 hover:bg-blue'>Travel</li>
											</Link>
										</ul>
									</div>
								</li>
								<li className='font-semibold' onClick={() => setNav(false)}>
									<Link to='/testimonials'>Testimonials</Link>
								</li>
								<li className='font-semibold' onClick={() => setNav(false)}>
									<Link to='/about-us'>About us</Link>
								</li>
								<li className='font-semibold' onClick={() => setNav(false)}>
									<Link to='/careers'>Careers</Link>
								</li>
								<li className='font-semibold' onClick={() => setNav(false)}>
									<Link to='contact-us'>Contact us</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
