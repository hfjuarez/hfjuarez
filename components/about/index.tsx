import React from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';

// Styles
import styles from './about.module.scss';

const About = () => {
	return (
		<div className={styles.height}>
			<Container as="section" className={styles.centeredWrapper}>
				<Heading as="h2" className={styles.title}>
					Passionate Full Stack Developer about delivering
					<span> innovative</span> solutions that <span>drive success</span> and
					have a <span>significant impact</span> on projects.
				</Heading>
			</Container>
		</div>
	);
};

export default About;
