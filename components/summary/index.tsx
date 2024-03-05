import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';

import summaryStyles from './summary.module.scss';

const Summary = () => {
	const summaryTextRef = useRef<HTMLDivElement>(null);
	const heightWrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const summaryElement = summaryTextRef.current;
		const heightWrapperElement = heightWrapperRef.current;

		if (!summaryElement || !heightWrapperElement) return;
		gsap.to(summaryElement, {
			keyframes: {
				'0%': { marginTop: '10rem', opacity: 0.4, scale: 0.7 },
				'100%': { marginTop: 0, opacity: 1, scale: 1 },
			},
			scrollTrigger: {
				end: 'top top',
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: heightWrapperElement,
			},
		});
	}, []);
	return (
		<HeightWrapper
			as="section"
			id="summary"
			className={summaryStyles.customHeightWrapper}
			ref={heightWrapperRef}
		>
			<Container as="div" className={summaryStyles.container}>
				<Heading as="h3" className={summaryStyles.summary} ref={summaryTextRef}>
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
