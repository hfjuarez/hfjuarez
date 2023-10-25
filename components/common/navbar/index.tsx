import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Link from '@/components/common/layout/link';
import Button from '@/components/common/button';

// Styles
import navbarStyles from './navbar.module.scss';
// Utils

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState<string | null>(null);

	const navbarClasses = classNames(
		navbarStyles.navbar,
		navbarColor,
		isScrolled ? navbarStyles.showNavbar : navbarStyles.hideNavbar,
	);
	const contact = () => {
		window.location.href = 'mailto:hello@hernanfabrica.com';
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 200);
			const scrollPositionInVh = (window.scrollY / window.innerHeight) * 100;
			if (scrollPositionInVh >= 1) {
				setNavbarColor(navbarStyles.secondary);
			} else {
				setNavbarColor(null);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<nav className={navbarClasses}>
			<div className={navbarStyles.navbarContent}>
				<Link href="#about" type="text">
					About
				</Link>
				<Link href="#works" type="text">
					Work
				</Link>
				<Button onClick={contact} id="navbar-principal-cta">
					LET&apos;S TALK
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
