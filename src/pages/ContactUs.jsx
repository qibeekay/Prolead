import React from 'react';
import OtherHero from '../components/OtherHero';
import Contact from '../components/Contact';

const ContactUs = () => {
	const h1 = 'Contact us';
	const link = 'contact-us';
	const bg = 'bg-contact';
	return (
		<div>
			<div>
				<OtherHero me={h1} to={link} bg={bg} />
				<Contact />
			</div>
		</div>
	);
};

export default ContactUs;
