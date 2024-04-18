/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBlue: '#000E70',
				blue: '#2E3192',
				lightBlue: '#494CA2',
				blueCyan: '#C6CBEF',
				blueForm: '#ECECFF',
			},
			backgroundImage: {
				hero: "url('./assets/img-1.png')",
				product: "url('./assets/hero-2.jpg')",
				hero1: "url('./assets/hero-1.jpg')",
				project1: "url('./assets/img-11.png')",
				project2: "url('./assets/img-13.png')",
				travel: "url('./assets/img-3.png')",
				testimonial: "url('./assets/img-2.png')",
				about: "url('./assets/about.png')",
				project: "url('./assets/project.png')",
				business: "url('./assets/business.png')",
				travel: "url('./assets/travel.png')",
				contact: "url('./assets/contact.png')",
				scho: "url('./assets/scholedg.png')",
				scholedge: "url('./assets/scholedge.png')",
				abt1: "url('./assets/abt-1.png')",
				abt2: "url('./assets/abt-2.jpg')",
				abt3: "url('./assets/abt-3.png')",
				mission: "url('./assets/mission.png')",
				corporate: "url('./assets/imgs.jpg')",
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			nunito: ['Montserrat', 'sans-serif'],
		},
		// backgroundImage: {
		// 	hero: "url('./assets/img-1.png')",
		// },
	},
	plugins: [],
};
