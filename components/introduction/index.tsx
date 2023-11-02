import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
import Text from '@/components/common/layout/text';

// Styles
import styles from './introduction.module.scss';

const Introduction = () => {
	const committedTextRef = useRef<HTMLInputElement>(null);
	const innovativeTextRef = useRef<HTMLInputElement>(null);
	const resultsDrivenTextRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const committedElement = committedTextRef.current;
		const innovativeElement = innovativeTextRef.current;
		const resultsDrivenElement = resultsDrivenTextRef.current;
		if (!committedElement || !innovativeElement || !resultsDrivenElement)
			return;

		committedElement.classList.add(styles.afterAnimation);
		const flipstate1 = Flip.getState([committedElement]);
		committedElement.classList.remove(styles.afterAnimation);
		Flip.to(flipstate1, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
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

		innovativeElement.classList.add(styles.afterAnimation);
		const flipstate2 = Flip.getState([innovativeElement]);
		innovativeElement.classList.remove(styles.afterAnimation);
		Flip.to(flipstate2, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
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

		resultsDrivenElement.classList.add(styles.afterAnimation);
		const flipstate3 = Flip.getState([resultsDrivenElement]);
		resultsDrivenElement.classList.remove(styles.afterAnimation);
		Flip.to(flipstate3, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
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
		<>
			<div className={styles.height} id="introduction">
				<Container as="section">
					<div className={styles.introduction}>
						<div className={styles.committed} ref={committedTextRef}>
							<Text>Committed</Text>
							<Text>Committed</Text>
							<Text>Committed</Text>
							<Text>Committed</Text>
							<Text>Committed</Text>
						</div>
						<div className={styles.innovative} ref={innovativeTextRef}>
							<Text>Innovative</Text>
							<Text>Innovative</Text>
							<Text>Innovative</Text>
							<Text>Innovative</Text>
							<Text>Innovative</Text>
						</div>
						<div className={styles.resultsDriven} ref={resultsDrivenTextRef}>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
						</div>
						<div className={styles.backgroundText}>
							<Text className={styles.bgTextCommitted}>Committed</Text>
						</div>
						<div className={styles.backgroundText}>
							<Text className={styles.bgTextInnovative}>Innovative</Text>
						</div>
						<div className={styles.backgroundText}>
							<Text className={styles.bgTextResultsDrive}>Results-Drive</Text>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Introduction;
