import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Text from '@/components/common/layout/text';
import Container from '@/components/common/layout/container';
import MacosActions from '@/components/common/macosActions';

import {
	backendSkills,
	frontendSkills,
	othersSkills,
} from '@/data/contents/skills';

import styles from './expertise.module.scss';

const Expertise = () => {
	const startDate = new Date('2021-01');
	const currentDate = new Date();
	const diffInMonths =
		(currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
	const years = Math.round(diffInMonths / 12);

	const titleRef = useRef<HTMLHeadingElement>(null);
	const card1Ref = useRef(null);
	const card2Ref = useRef(null);
	const card3Ref = useRef(null);
	const expertiseRef = useRef(null);

	useEffect(() => {
		const title = titleRef?.current;
		const card1 = card1Ref?.current;
		const card2 = card2Ref?.current;
		const card3 = card3Ref?.current;
		const expertise = expertiseRef?.current;
		if (!title || !card1 || !card2 || !card3 || !expertise) return;

		gsap.to(title, {
			ease: 'none',
			keyframes: {
				'0%': {
					fontSize: '6.5rem',
					marginTop: '-2rem',
					opacity: 0.0,
				},
				'100%': {
					fontSize: '7.5rem',
					fontStretch: '95%',
					fontWeight: 600,
					letterSpacing: '0.125rem',
					marginTop: 0,
					opacity: 1,
				},
			},
			scrollTrigger: {
				end: 'top 50%',
				scrub: true,
				start: 'top 100%',
				trigger: expertise,
			},
		});
		gsap.to(card1, {
			delay: 0,
			ease: 'none',
			marginTop: 0,
			opacity: 1,
			scrollTrigger: {
				end: 'top 50%',
				scrub: true,
				start: 'top 100%',
				trigger: expertise,
			},
		});
		gsap.to(card2, {
			ease: 'none',
			marginTop: 0,
			opacity: 1,
			scrollTrigger: {
				end: 'top 25%',
				scrub: true,
				start: 'top 75%',
				trigger: expertise,
			},
		});
		gsap.to(card3, {
			ease: 'none',
			marginTop: 0,
			opacity: 1,
			scrollTrigger: {
				end: 'top top',
				scrub: true,
				start: 'top 50%',
				trigger: expertise,
			},
		});
	}, []);

	return (
		<HeightWrapper
			as="section"
			ref={expertiseRef}
			id="expertise"
			className={styles.expertiseSection}
		>
			<Container as="div">
				<Heading as="h2" className={styles.title} ref={titleRef}>
					My&nbsp;
					<br />
					Expertise
				</Heading>
				<div className={styles.cardContainers}>
					<div className={styles.cardWrapper} ref={card1Ref}>
						<div className={styles.card}>
							<MacosActions />
							<div className={styles.content}>
								<Heading as="h3">Frontend</Heading>
								<Text>
									With {years}+ years of frontend development experience, I
									specialize in creating dynamic, user-centric interfaces.
								</Text>
								<ul>
									{frontendSkills
										.filter((skill) => skill.primary)
										.map((skill, index) => (
											<li key={index}>{skill.name}</li>
										))}
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.cardWrapper} ref={card2Ref}>
						<div className={styles.card}>
							<MacosActions />
							<div className={styles.content}>
								<Heading as="h3">Backend</Heading>
								<Text>
									Proficient in backend development, I specialize in building
									robust, scalable server-side solutions.
								</Text>
								<ul>
									{backendSkills
										.filter((skill) => skill.primary)
										.map((skill, index) => (
											<li key={index}>{skill.name}</li>
										))}
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.cardWrapper} ref={card3Ref}>
						<div className={styles.card}>
							<MacosActions />
							<div className={styles.content}>
								<Heading as="h3">Others</Heading>
								<Text>
									I offer a diverse skill set that enriches my capacity to
									provide holistic solutions.
								</Text>
								<ul>
									{othersSkills
										.filter((skill) => skill.primary)
										.map((skill, index) => (
											<li key={index}>{skill.name}</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Expertise;
