/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Link from '@/components/common/layout/link';
// Styles
import navbarStyles from './navbar.module.scss';

const Navbar = () => {
	const halfContainerMaxWidth = 864;
	const [isDarkNavbar, setIsDarkNavbar] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const linkClasses = classNames({
		[navbarStyles.linkText]: true,
	});
	const navbarClasses = classNames(
		navbarStyles.navbar,
		isDarkNavbar ? navbarStyles.dark : null,
		isHidden ? navbarStyles.hideNavbar : navbarStyles.showNavbar,
	);

	useEffect(() => {
		const about = document.getElementById('about');
		const contact = document.getElementById('contact');
		const footer = document.getElementById('footer');
		if (!contact || !about || !footer) return;
		const aboutOffset = about.offsetTop;
		const aboutHeight = about.offsetHeight;
		const contactOffset = contact.offsetTop;
		const contactHeight = contact.offsetHeight;
		const footerOffset = footer.offsetTop;

		const handleScroll = () => {
			const isMobile = window.innerWidth < halfContainerMaxWidth;
			const mobileDarkNavbarCondition =
				(window.scrollY > contactOffset - contactHeight &&
					window.scrollY < contactOffset) ||
				(window.scrollY > aboutOffset - aboutHeight &&
					window.scrollY < aboutOffset);
			const desktopDarkNavbarCondition =
				(window.scrollY > contactOffset - contactHeight / 2 &&
					window.scrollY < contactOffset + contactHeight / 2) ||
				(window.scrollY > aboutOffset - aboutHeight / 2 &&
					window.scrollY < aboutOffset + aboutHeight / 2);
			const darkNavbarCondition = isMobile
				? mobileDarkNavbarCondition
				: desktopDarkNavbarCondition;
			if (darkNavbarCondition) {
				setIsDarkNavbar(true);
			} else {
				setIsDarkNavbar(false);
			}
			console.error(
				'scrollY',
				window.scrollY,
				'contactOffset',
				contactOffset,
				'contactHeight',
				contactHeight,
			);
			if (
				isMobile
					? window.scrollY >= footerOffset - window.innerHeight - 100
					: window.scrollY >= contactOffset
			) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
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
					<span className={navbarStyles.number}>1. </span>
					<span className={linkClasses}>About</span>
				</Link>
				<Link href="#experience" type="text">
					<span className={navbarStyles.number}>2. </span>
					<span className={linkClasses}>Experience</span>
				</Link>
				<Link href="#projects" type="text">
					<span className={navbarStyles.number}>3. </span>
					<span className={linkClasses}>Projects</span>
				</Link>
				<Link href="#contact" type="text">
					<span className={navbarStyles.number}>4. </span>
					<span className={linkClasses}>Contact</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
