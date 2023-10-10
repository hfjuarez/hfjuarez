/* eslint-disable sort-keys */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Link from '@/components/common/layout/link';

// Styles
import aboutStyle from '../components/introduction/introduction.module.scss';

import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

gsap.registerPlugin(Flip, ScrollTrigger);

const Example = () => {
	const groupElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const element = groupElement.current;
		if (element) {
			// Temporarily add the final class to capture the final state
			element.classList.add(aboutStyle.fullViewport);
			const flipstate = Flip.getState([element], { props: 'filter, opacity' });

			// Remove the final class to revert to the initial state
			element.classList.remove(aboutStyle.fullViewport);

			// Create the Flip animation timeline
			// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
			const tl = Flip.to(flipstate, {
				ease: 'none',
				absoluteOnLeave: false,
				absolute: false,
				scale: true,
				simple: true,
				scrollTrigger: {
					trigger: element,
					start: 'top center',
					end: 'center center',
					scrub: true,
					markers: true,
				},
				stagger: 0,
			});
		}
	}, []);

	return (
		<Container as="section" key="intro">
			<div style={{ height: '200vh', width: '100%' }}></div>

			<div className={aboutStyle.introduction} ref={groupElement}>
				<div className={aboutStyle.main}>
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
				<div className={aboutStyle['section-1']}>
					<Heading as={'h6'}>A bit about me</Heading>
					<Text>
						Im a person detail oriented that always want to learn new things and
						listen to new ideas. As a developer always do everything with all my
						compromise and passion to create the best possible solution for each
						challenge.
					</Text>
					<Link href="/me" type={UIColors.SECONDARY}>
						About Me
					</Link>
				</div>
				<div className={aboutStyle['section-2']}>
					<Heading as={'h6'}>A bit about my experience</Heading>
					<Text>
						My experience lies in building scalable, maintainable, and secure
						web applications and their APIs. One of my biggest challenge was
						create the new LANDSale system to improve our community. Giving
						significant profit to the company.
					</Text>
					<Text>And now I have the total ownership of all that system.</Text>
					<Link href="/experience" type={UIColors.SECONDARY}>
						My Experience
					</Link>
				</div>
			</div>
			<div style={{ height: '200vh', width: '100%' }}></div>
		</Container>
	);
};

export default Example;
