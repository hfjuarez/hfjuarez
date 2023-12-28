import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';

import styles from './about.module.scss';

const About = () => {
	return (
		<HeightWrapper>
			<Container as="section" className={styles.centeredWrapper}>
				<Heading as="h2" className={styles.title}>
					Passionate Full Stack Engineer focused on delivering
					<span> innovative</span> solutions that <span>drive success</span> and
					have a <span>significant impact</span> on projects.
				</Heading>
			</Container>
		</HeightWrapper>
	);
};

export default About;
