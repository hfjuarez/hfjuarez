import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Container from '@/components/common/layout/container';
import HeightWrapper from '@/components/common/layout/height';
import Heading from '@/components/common/layout/heading';

import {
	backendSkills,
	// backendSkills,
	frontendSkills,
	othersSkills,
	// othersSkills,
} from '@/data/contents/skills';

import styles from './expertise.module.scss';

const Expertise = () => {
	const expertiseRef = useRef(null);

	return (
		<HeightWrapper
			as="section"
			ref={expertiseRef}
			id="about"
			className={styles.wrapper}
		>
			<Container as="div" className={styles.listContainer}>
				<div className={`${styles.list} ${styles.frontend}`}>
					<Heading as="h3" className={styles.expertiseTitle}>
						Frontend
					</Heading>
					<ul>
						{frontendSkills
							.filter((skill) => skill.primary)
							.map((skill, index) => (
								<li key={index}>{skill.name}</li>
							))}
					</ul>
				</div>
				<div className={`${styles.list} ${styles.frontend}`}>
					<Heading as="h3" className={styles.expertiseTitle}>
						Backend
					</Heading>
					<ul>
						{backendSkills
							.filter((skill) => skill.primary)
							.map((skill, index) => (
								<li key={index}>{skill.name}</li>
							))}
					</ul>
				</div>
				<div className={`${styles.list} ${styles.frontend}`}>
					<Heading as="h3" className={styles.expertiseTitle}>
						Others
					</Heading>
					<ul>
						{othersSkills
							.filter((skill) => skill.primary)
							.map((skill, index) => (
								<li key={index}>{skill.name}</li>
							))}
					</ul>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Expertise;
