import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Link from '@/components/common/layout/link';

// Styles
import introductionStyles from './introduction.module.scss';
import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

const Introduction = () => {
	const introductionElement = useRef(null);
	const headingRef = useRef(null);
	const [removeBottomBorderRadius, setRemoveBottomBorderRadius] =
		useState(false);

	const introductionClasses = classNames(
		introductionStyles.introduction,
		removeBottomBorderRadius && introductionStyles.removeBottomBorderRadius,
	);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPositionInVh = (window.scrollY / window.innerHeight) * 100;
			// Check if the scroll position is greater than or equal to 150vh
			if (scrollPositionInVh >= 100) {
				setRemoveBottomBorderRadius(true);
			} else {
				setRemoveBottomBorderRadius(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		const element1: any = introductionElement.current;
		const element2: any = headingRef.current;

		// Temporarily add the final class to capture the final state
		element1.classList.add(introductionStyles.afterAnimation);
		const flipstate1 = Flip.getState([element1]);
		// Remove the final class to revert to the initial state
		element1.classList.remove(introductionStyles.afterAnimation);

		// Create the Flip animation timeline
		Flip.to(flipstate1, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element1,
			},
			simple: true,
			stagger: 0,
		});
		gsap.to(element2, {
			marginTop: '12rem',
			maxWidth: '75rem',
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element1,
			},
		});
		gsap.to(element2.children[0], {
			fontSize: '7.75rem',
			lineHeight: '7.75rem',
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element1,
			},
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<Container as="section" key="introduction--recap">
				<div ref={headingRef} className={introductionStyles.heading}>
					<Heading as={'h1'}>
						Ambitious,
						<br />
						Compromised,
						<br />
						& Passionate
						<br />
						<span className={colorsStyles[UIColors.SECONDARY]}>developer.</span>
					</Heading>
				</div>
				<div className={introductionClasses} ref={introductionElement} />
			</Container>

			<div className={introductionStyles.aboutMeAndExperienceRecap}>
				<Container as="section" key="introduction--about--experience">
					<div className={introductionStyles.aboutMe}>
						<Heading as={'h6'}>A bit about me</Heading>
						<Text>
							I&apos;m a person detail oriented that always want to learn new
							things and listen to new ideas. As a developer always do
							everything with all my compromise and passion to create the best
							possible solution for each challenge.
						</Text>
						<Link href="/me" type={UIColors.WHITE}>
							About Me
						</Link>
					</div>
					<div className={introductionStyles.myExperience}>
						<Heading as={'h6'}>A bit about my experience</Heading>
						<Text>
							My experience lies in building scalable, maintainable, and secure
							web applications and their APIs. One of my biggest challenge was
							create the new LANDSale system to improve our community. Giving
							significant profit to the company.
						</Text>
						<Text>And now I have the total ownership of all that system.</Text>
						<Link href="/experience" type={UIColors.WHITE}>
							My Experience
						</Link>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Introduction;
