import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Link from '@/components/common/layout/link';

// Styles
import navbarStyles from './navbar.module.scss';
// Utils

const Navbar = () => {
	// create a useEffect that detect if #contact is visible
	// if it is visible, change the color of the navbar to white
	// else, change the color of the navbar to black
	const [isWhiteText, setIsWhiteText] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const isWhite = classNames({
		[navbarStyles.diff]: isWhiteText,
	});
	const navbarClasses = classNames(
		navbarStyles.navbar,
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
		const footerHeight = footer.offsetHeight;

		const handleScroll = () => {
			if (
				(window.scrollY >= contactOffset - contactHeight / 2 &&
					window.scrollY <= contactOffset + contactHeight / 2) ||
				(window.scrollY >= aboutOffset - aboutHeight / 2 &&
					window.scrollY <= aboutOffset + aboutHeight / 2)
			) {
				setIsWhiteText(true);
			} else {
				setIsWhiteText(false);
			}
			if (window.scrollY >= footerOffset - footerHeight / 2) {
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
			<ol className={navbarStyles.navbarContent}>
				<Link href="#about" type="text">
					<li className={isWhite}>About</li>
				</Link>
				<Link href="#experience" type="text">
					<li className={isWhite}>Experience</li>
				</Link>
				<Link href="#projects" type="text">
					<li className={isWhite}>Projects</li>
				</Link>
				<Link href="#contact" type="text">
					<li className={isWhite}>Contact</li>
				</Link>
			</ol>
		</nav>
	);
};

export default Navbar;
