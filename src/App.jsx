import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Header/Header';
import Feature from './components/Feature/Feature';
import Details from './components/Details/Details';
import Services from './components/Services/Services';
import Package from './components/Package/Package';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			<Feature />
			<Details />
			<Services />
			<Package />
			<Contact />
			<Footer />
		</React.Fragment>
	);
};

export default App;
