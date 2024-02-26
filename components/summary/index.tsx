import React from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';

import summaryStyles from './summary.module.scss';

const Summary = () => {
	return (
		<HeightWrapper
			as="section"
			id="summary"
			className={summaryStyles.customHeightWrapper}
		>
			<Container as="div" className={summaryStyles.container}>
				<Heading as="h3" className={summaryStyles.summary}>
					Dynamic Full Stack Engineer with a proven history of driving impactful
					projects, such as pioneering the innovative LAND Sale system at The
					Sandbox Game. Proficient in JavaScript, Node, Java, Vue, and React,
					with a focus on delivering results and innovative solutions. Ready to
					contribute expertise to your team&apos;s success.
				</Heading>
			</Container>
		</HeightWrapper>
	);
};

export default Summary;
