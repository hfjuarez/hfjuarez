import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

import Heading from '@/components/common/layout/heading';
import Link from '@/components/common/layout/link';
import Text from '@/components/common/layout/text';

import heroStyles from './hero.module.scss';
import heightWrapperStyle from '@/components/common/layout/height/height.module.scss';

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
						Get in touch!
					</Link>
				</div>
				<div className={heroStyles.centered} ref={titleRef}>
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
				</div>
				<div className={heroStyles.links}>
					<Link href="https://github.com/hfjuarez" className={heroStyles.link}>
						<svg
							width="15px"
							height="15px"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 98 96"
						>
							<title>Github Logo</title>
							<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
						</svg>
						&nbsp;Github
					</Link>
					<Link
						href="https://www.linkedin.com/in/hfjuarez/"
						className={heroStyles.link}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0,0,256,256"
							width="15px"
							height="15px"
						>
							<title>Linkedin Logo</title>
							<g transform="translate(-25.6,-25.6) scale(1.2,1.2)">
								<g
									fill="#ffffff"
									fill-rule="nonzero"
									stroke="none"
									stroke-width="1"
									stroke-linecap="butt"
									stroke-linejoin="miter"
									stroke-miterlimit="10"
									stroke-dasharray=""
									stroke-dashoffset="0"
									font-family="none"
									font-weight="none"
									font-size="none"
									text-anchor="none"
									style={{ mixBlendMode: 'normal' }}
								>
									<g transform="scale(5.12,5.12)">
										<path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
									</g>
								</g>
							</g>
						</svg>
						&nbsp;Linkedin
					</Link>
				</div>
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
