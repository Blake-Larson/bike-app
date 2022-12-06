import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

function Home() {
	return (
		<div className='min-h-screen flex flex-col w-full scroll-smooth'>
			<Nav />
			{/* <h1 className='text-3xl text-primary font-semibold text-center mt-10'>
				Hello World!
			</h1> */}
			<Hero />
			<main id='converter'>
				<button className='btn btn-primary'>Hey</button>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
