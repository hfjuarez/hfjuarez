import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Container from '@/components/common/layout/container';
import HeightWrapper from '@/components/common/layout/height';
import Text from '@/components/common/layout/text';

import valuesStyles from './values.module.scss';

const Values = () => {
	const committedTextRef = useRef<HTMLInputElement>(null);
	const innovativeTextRef = useRef<HTMLInputElement>(null);
	const resultsDrivenTextRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const committedElement = committedTextRef.current;
		const innovativeElement = innovativeTextRef.current;
		const resultsDrivenElement = resultsDrivenTextRef.current;
		if (!committedElement || !innovativeElement || !resultsDrivenElement)
			return;

		committedElement.classList.add(valuesStyles.afterAnimation);
		const flipstate1 = Flip.getState([committedElement]);
		committedElement.classList.remove(valuesStyles.afterAnimation);
		Flip.to(flipstate1, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: `+=${innerHeight + 600}`,
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: committedElement,
			},
			simple: true,
			stagger: 0,
		});

		innovativeElement.classList.add(valuesStyles.afterAnimation);
		const flipstate2 = Flip.getState([innovativeElement]);
		innovativeElement.classList.remove(valuesStyles.afterAnimation);
		Flip.to(flipstate2, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: `+=${innerHeight * 1.75}`,
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: innovativeElement,
			},
			simple: true,
			stagger: 0,
		});

		resultsDrivenElement.classList.add(valuesStyles.afterAnimation);
		const flipstate3 = Flip.getState([resultsDrivenElement]);
		resultsDrivenElement.classList.remove(valuesStyles.afterAnimation);
		Flip.to(flipstate3, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: `+=${innerHeight * 1.75}`,
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: resultsDrivenElement,
			},
			simple: true,
			stagger: 0,
		});
	}, []);
	return (
		<HeightWrapper as="div" id="values" className={valuesStyles.bgColor}>
			<Container as="div" className={valuesStyles.values}>
				<div className={valuesStyles.committed} ref={committedTextRef}>
					<Text>Committed</Text>
					<Text>Committed</Text>
					<Text>Committed</Text>
					<Text>Committed</Text>
					<Text>Committed</Text>
				</div>
				<div className={valuesStyles.innovative} ref={innovativeTextRef}>
					<Text>Innovative</Text>
					<Text>Innovative</Text>
					<Text>Innovative</Text>
					<Text>Innovative</Text>
					<Text>Innovative</Text>
				</div>
				<div className={valuesStyles.resultsDriven} ref={resultsDrivenTextRef}>
					<Text>Results-Driven</Text>
					<Text>Results-Driven</Text>
					<Text>Results-Driven</Text>
					<Text>Results-Driven</Text>
					<Text>Results-Driven</Text>
					<Text>Results-Driven</Text>
				</div>
				<div className={valuesStyles.backgroundText}>
					<Text className={valuesStyles.bgTextCommitted}>Committed</Text>
				</div>
				<div className={valuesStyles.backgroundText}>
					<Text className={valuesStyles.bgTextInnovative}>Innovative</Text>
				</div>
				<div className={valuesStyles.backgroundText}>
					<Text className={valuesStyles.bgTextResultsDrive}>
						Results-Driven
					</Text>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Values;
