import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectManage from './pages/ProjectManage';
import ContactUs from './pages/ContactUs';
import Scholedge from './pages/Scholedge';
import Travel from './pages/Travel';
import Testimonials from './pages/Testimonials';
import BusinessDev from './pages/BusinessDev';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Corporate from './pages/Corporate';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/project-management' element={<ProjectManage />} />
				<Route path='/scholedge' element={<Scholedge />} />
				<Route path='/testimonials' element={<Testimonials />} />
				<Route path='/travel' element={<Travel />} />
				<Route path='/careers' element={<Careers />} />
				<Route path='/corporate-training' element={<Corporate />} />
				<Route path='/business-development' element={<BusinessDev />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
