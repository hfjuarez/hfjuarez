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
import { UIColors } from 'utils/ui';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isNavbarColored, setIsNavbarColored] = useState(false);

	const navbarClasses = classNames(
		navbarStyles.navbar,
		isScrolled && navbarStyles.navbarBorder,
		isNavbarColored && navbarStyles.isNavbarColored,
	);
	const linkColorClass = isNavbarColored ? UIColors.WHITE : UIColors.PRIMARY;
	const buttonColorClass = isNavbarColored ? UIColors.WHITE : UIColors.BASE;
	const contact = () => {
		window.location.href = 'mailto:herfj4@gmail.com';
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 80);
			const scrollPositionInVh = (window.scrollY / window.innerHeight) * 100;
			// Check if the scroll position is greater than or equal to 150vh
			if (scrollPositionInVh >= 100) {
				setIsNavbarColored(true);
			} else {
				setIsNavbarColored(false);
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
				<Link colorScheme={linkColorClass} href="/about" type="text">
					About
				</Link>
				<Link colorScheme={linkColorClass} href="/works" type="text">
					Work
				</Link>
				<Button colorScheme={buttonColorClass} onClick={contact}>
					LET&apos;S TALK
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
