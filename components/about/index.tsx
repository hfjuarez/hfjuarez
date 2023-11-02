import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
// import Text from '@/components/common/layout/text';

// Styles
import styles from './about.module.scss';

// Utils

const About = () => {
	const backgroundRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const bgElement = backgroundRef.current;
		if (!bgElement) return;

		bgElement.classList.add(styles.afterAnimation);
		const flipstate1 = Flip.getState([bgElement]);
		bgElement.classList.remove(styles.afterAnimation);
		Flip.to(flipstate1, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
			scale: true,
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: `top center`,
				trigger: bgElement,
			},
			simple: true,
			stagger: 0,
		});
	}, []);
	return (
		<div className={styles.height}>
			<Container as="section" className={styles.centeredWrapper}>
				<Heading as="h2" className={styles.title}>
					I&apos;m a Full Stack developer proficient in <span>JavaScript</span>,{' '}
					<span>Node.js</span>, <span>Java</span>, <span>Vue.js</span>, and{' '}
					<span>React</span>. I&apos;m passionate about delivering
					<span> innovative</span> solutions that <span>drive success</span> and
					have a <span>significant impact</span> on projects.
				</Heading>
			</Container>
		</div>
	);
};

export default About;
