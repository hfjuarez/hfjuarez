import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Work from '@/components/work/index-2';

import styles from './works.module.scss';

import works from '@/data/contents/works';

const Works = () => {
	return (
		<HeightWrapper
			as="section"
			id="work"
			className={styles.customHeightWrapper}
		>
			<Container as="div" className={styles.container}>
				<Heading as="h2">Selected Work</Heading>
				<div className={styles.workList}>
					{works?.length &&
						works.map((work, idx) => <Work work={work} key={'work' + idx} />)}
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Works;
