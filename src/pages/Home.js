import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Converter from '../components/Converter';

function Home() {
	return (
		<div className='flex flex-col w-full scroll-smooth '>
			<Nav />
			<Hero />
			<Converter />
			<Footer />
		</div>
	);
}

export default Home;
