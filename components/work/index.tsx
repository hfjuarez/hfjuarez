import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import work from './work.module.scss';

const Work = () => {
	return (
		<HeightWrapper id="work" style={{ paddingTop: '6rem' }}>
			<Container as="section" className={work.container}>
				<Heading as="h2" className={work.title}>
					My
					<br />
					Work
				</Heading>
				<div className={work.columns}>
					<div className={work.card}>
						<Heading as="h2">Landsale</Heading>
					</div>

					<div className={work.card}>
						<Heading as="h2">Mautone</Heading>
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Work;
