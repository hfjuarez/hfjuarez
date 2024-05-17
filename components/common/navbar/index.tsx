/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Link from '@/components/common/layout/link';
// Styles
import styles from './navbar.module.scss';

const Navbar = () => {
	const halfContainerMaxWidth = 864;
	const [isDarkNavbar, setIsDarkNavbar] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const linkClasses = classNames({
		[styles.linkText]: true,
	});
	const navbarClasses = classNames(
		styles.navbar,
		isDarkNavbar ? styles.dark : null,
		isHidden ? styles.hideNavbar : styles.showNavbar,
	);

	useEffect(() => {
		const about = document.getElementById('about');
		const contact = document.getElementById('contact');
		const footer = document.getElementById('footer');
		if (!contact || !about || !footer) return;

		const handleScroll = () => {
			const aboutOffset = about.offsetTop;
			const aboutHeight = about.offsetHeight;
			const contactOffset = contact.offsetTop;
			const contactHeight = contact.offsetHeight;
			const footerOffset = footer.offsetTop;

			const isMobile = window.innerWidth < halfContainerMaxWidth;
			const mobileDarkNavbarCondition =
				(window.scrollY > contactOffset - contactHeight &&
					window.scrollY < contactOffset) ||
				(window.scrollY > aboutOffset - aboutHeight &&
					window.scrollY < aboutOffset);
			const desktopDarkNavbarCondition =
				(window.scrollY > contactOffset - window.innerHeight / 2 &&
					window.scrollY <
						contactOffset + contactHeight - window.innerHeight / 2) ||
				(window.scrollY > aboutOffset - window.innerHeight / 2 &&
					window.scrollY < aboutOffset + aboutHeight - window.innerHeight / 2);
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
			<div className={styles.navbarContent}>
				<Link href="#about" type="text">
					<span className={styles.number}>1. </span>
					<span className={linkClasses}>About</span>
				</Link>
				<Link href="#experience" type="text">
					<span className={styles.number}>2. </span>
					<span className={linkClasses}>Experience</span>
				</Link>
				<Link href="#projects" type="text">
					<span className={styles.number}>3. </span>
					<span className={linkClasses}>Projects</span>
				</Link>
				<Link href="#contact" type="text">
					<span className={styles.number}>4. </span>
					<span className={linkClasses}>Contact</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
