import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';

import summaryStyles from './summary.module.scss';

const Summary = () => {
	return (
		<HeightWrapper id="summary">
			<Container as="section" className={summaryStyles.centeredWrapper}>
				<Heading as="h2" className={summaryStyles.title}>
					Passionate Full Stack Engineer focused on delivering
					<span> innovative</span> solutions that <span>drive success</span> and
					create <span>real significant impact.</span>
				</Heading>
			</Container>
		</HeightWrapper>
	);
};

export default Summary;
