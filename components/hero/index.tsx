import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Link from '@/components/common/layout/link';

import heroStyles from './hero.module.scss';
import heightWrapperStyle from '@/components/common/layout/height/height.module.scss';
import Container from '../common/layout/container';

const Hero = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const title = titleRef.current;
		const container = containerRef.current;
		if (!title || !container) return;
		gsap.to(title, {
			keyframes: {
				'0%': {},
				'100%': {
					transform: 'scale(0.8)',
				},
			},
			scrollTrigger: {
				end: 'top top-=100%',
				scrub: true,
				start: 'top top',
				trigger: container,
			},
		});
	}, []);
	return (
		<header
			id="hero"
			className={heightWrapperStyle.wrapper}
			style={{ position: 'sticky', top: 0 }}
			aria-label="Hello, I'm Hernán"
		>
			<div className={heroStyles.container} ref={containerRef}>
				<div className={heroStyles.top}>
					<Text>
						Looking for
						<br />
						your next developer?
					</Text>
					<Link
						href="mailto:hello@hernanfabrica.com"
						className={heroStyles.link}
					>
						Let’s work!
					</Link>
				</div>
				<Container as="div" className={heroStyles.centered} ref={titleRef}>
					<div>
						<Heading as="h1">Hernán Fabrica</Heading>
						<Heading as="h2">Full Stack Engineer & Technical Leader</Heading>
					</div>
					<ul className={heroStyles.pills}>
						<li>NodeJS</li>
						<li>VueJS</li>
						<li>ReactJS</li>
						<li>Ruby on Rails</li>
						<li>Java</li>
					</ul>
				</Container>
			</div>
			<div className={heroStyles.animation}>
				<div className={heroStyles.left}>
					<div>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
					</div>
				</div>
				<div className={heroStyles.right}>
					<div>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
