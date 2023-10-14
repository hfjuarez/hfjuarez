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
import aboutStyle from './about.module.scss';
import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

const About = () => {
	const introductionElement = useRef<HTMLInputElement>(null);
	const headingRef = useRef<HTMLInputElement>(null);
	const [removeBottomBorderRadius, setRemoveBottomBorderRadius] =
		useState(false);
	const introductionClasses = classNames(
		aboutStyle.background,
		removeBottomBorderRadius && aboutStyle.removeBottomBorderRadius,
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

		const element1 = introductionElement.current;
		const element2 = headingRef.current;
		if (!element1 || !element2) return;
		// Temporarily add the final class to capture the final state
		element1.classList.add(aboutStyle.afterAnimation);
		const flipstate1 = Flip.getState([element1]);
		// Remove the final class to revert to the initial state
		element1.classList.remove(aboutStyle.afterAnimation);

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
			fontSize: '6.5rem',
			lineHeight: '6.5rem',
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
			<Container
				as="section"
				key="introduction--recap"
				className={aboutStyle.section}
			>
				<div ref={headingRef} className={aboutStyle.heading}>
					<Heading as={'h1'}>
						Committed,
						<br />
						Innovative,
						<br />
						& Results-Driven
						<br />
						<span className={colorsStyles[UIColors.SECONDARY]}>developer.</span>
					</Heading>
				</div>
				<div className={introductionClasses} ref={introductionElement} />
			</Container>

			<div className={aboutStyle.aboutMe}>
				<Container as="section" key="introduction--about">
					<Heading as={'h2'} colorScheme={UIColors.WHITE}>
						About me
					</Heading>
					<Text>
						Results-driven Full Stack developer, focused on Back-end
						development. With a proven track record in spearheading high-impact
						projects, including the creation of the LAND Sale system at The
						Sandbox Game and leading a significant private healthcare provider
						project. Proficient in JavaScript, Node, Java, Vue, React and a
						range of technologies. Committed to delivering innovative solutions
						that drive success.
					</Text>
					<Link href="/experience" type={UIColors.WHITE} outlined>
						Check more &gt;&gt;&gt;
					</Link>
				</Container>
			</div>
		</>
	);
};

export default About;
