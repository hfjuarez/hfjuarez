import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
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
		gsap.to(heightWrapperElement, {
			keyframes: {
				'0%': {
					background: 'radial-gradient(circle, #ffbe98 0%, white 0%)',
				},
				'100%': {
					background: 'radial-gradient(circle, #ffbe98 7.5%, white 50%)',
				},
			},
			scrollTrigger: {
				end: 'top top',
				scrub: true,
				start: `-=${innerHeight * 0.75}`,
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
					I&apos;m a committed Full Stack Engineer with a proven history of
					driving impactful projects, creating innovative solutions, and
					delivering powerful results.
				</Heading>
			</Container>
		</HeightWrapper>
	);
};

export default Summary;
