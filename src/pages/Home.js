import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Home() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Nav />
			<h1 className='text-3xl text-primary font-semibold text-center mt-10'>
				Hello World!
			</h1>
			<Footer />
		</div>
	);
}

export default Home;
