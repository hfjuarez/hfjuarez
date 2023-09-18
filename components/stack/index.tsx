import React from 'react';

// Components
import Heading from '@/components/common/layout/heading';
import Container from '../common/layout/container';
import Pill from '../common/pill';

import styles from './stack.module.scss';

import { skillsPills } from 'data/skills';

export default function Stack() {
	const skillsPillsList = skillsPills.map((skill, index) => (
		<Pill
			colorScheme={skill.colorScheme}
			key={`skill-pill-${skill.name.toLowerCase()}-${index}`}
		>
			{skill.name}
		</Pill>
	));
	return (
		<div className={styles.stackWrapper}>
			<Container as="section">
				<Heading as="h1" className={styles.stackTitle}>
					Skills
				</Heading>
				<div className={styles.pills}>{skillsPillsList}</div>
				<div className={styles.stackContent}>
					<div className={`card ${styles.stackItem}`}>
						<ul className={styles.stackList}>
							<li>Vue</li>
							<li>React</li>
							<li>React Native</li>
						</ul>
					</div>
					<div className={`card ${styles.stackItem}`}>
						<ul className={styles.stackList}>
							<li>NodeJs</li>
							<li>Ruby on Rails</li>
							<li>Java</li>
						</ul>
					</div>
					<div className={`card ${styles.stackItem}`}>
						<ul className={styles.stackList}>
							<li>SQL</li>
							<li>MongoDB</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
}
