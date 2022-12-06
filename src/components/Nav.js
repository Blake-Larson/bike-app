import React from 'react';
import HamburgerMenu from './buttons/HamburgerMenu';
import Logo from './Logo';

function Nav() {
	return (
		<nav className='navbar bg-base-100 border border-base-200 sticky z-50 top-0'>
			<div className='flex-1'>
				<Logo />
				<span className='text-xl font-semibold'>My App</span>
			</div>
			<HamburgerMenu />
		</nav>
	);
}

export default Nav;
