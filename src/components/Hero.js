import React from 'react';
import smog from '../assets/smog-hero.jpg';
import bike from '../assets/bike-hero.jpg';

function Hero() {
	return (
		<div className='flex items-center'>
			<div className='absolute z-10 mx-auto left-0 right-0 text-center'>
				<h1 className='text-5xl font-bold text-neutral-content mb-5'>
					Clear the air
				</h1>
				<a href='#converter' className='btn btn-primary'>
					Get Started
				</a>
			</div>
			<div
				className='hero custom-vh-80 grayscale'
				style={{ backgroundImage: `url(${smog})` }}
			>
				<div className='hero-overlay bg-opacity-60'></div>
			</div>
			<div
				className='hero custom-vh-80'
				style={{ backgroundImage: `url(${bike})` }}
			>
				<div className='hero-overlay bg-opacity-20'></div>
			</div>
		</div>
	);
}

export default Hero;
