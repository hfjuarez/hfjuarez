import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skill from '@/components/skill';
import Work from '@/components/work';

// Styles
import homeStyle from './home.module.scss';

export default function Home() {
	const backgroundElement = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const element = backgroundElement.current;
		if (!element) return;
		// Temporarily add the final class to capture the final state
		element.classList.add(homeStyle.afterAnimation);
		const flipstate = Flip.getState([element]);
		// Remove the final class to revert to the initial state
		element.classList.remove(homeStyle.afterAnimation);

		// Create the Flip animation timeline
		Flip.to(flipstate, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element,
			},
			simple: true,
			stagger: 0,
		});
	}, []);
	return (
		<>
			<Hero />
			<Container as="main">
				<Container as="section" className={homeStyle.backgroundSection}>
					<About />
					<Skill />
					<div
						className={homeStyle.background}
						ref={backgroundElement}
						id="background-animation"
					/>
				</Container>
				<Work />
			</Container>
		</>
	);
}
