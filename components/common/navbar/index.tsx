import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
// Components
import Link from '@/components/common/layout/link';
import Button from '@/components/common/button';

// Styles
import navbarStyles from './navbar.module.scss';
// Utils
import { UIColors } from 'utils/ui';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const navbarClasses = classNames(
		navbarStyles.navbar,
		isScrolled && navbarStyles['navbar-border'],
	);
	const contact = () => {
		window.location.href = 'mailto:herfj4@gmail.com';
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 80);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={navbarClasses}>
			<div className={navbarStyles['navbar-content']}>
				<Link href="/about" type="text">
					About
				</Link>
				<Link href="/works" type="text">
					Work
				</Link>
				<Button colorScheme={UIColors.PRIMARY} onClick={contact}>
					LET&apos;S TALK
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
