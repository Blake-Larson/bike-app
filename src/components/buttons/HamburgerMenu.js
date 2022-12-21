import React from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu() {
	return (
		<div className='dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-ghost'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</label>
			<ul
				tabIndex={0}
				className='dropdown-content bg-base-100 menu p-2 shadow-lg rounded-box w-32 items-end'
			>
				<li className='text-lg'>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li className='text-lg'>
					<NavLink to='/resources'>Resources</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default HamburgerMenu;
