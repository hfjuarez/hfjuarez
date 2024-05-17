import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Container from '@/components/common/layout/container';

import heightWrapperStyle from '@/components/common/layout/height/height.module.scss';
import styles from './hero.module.scss';

import me from '@/data/contents/me';

const Hero = () => {
	const gridCanvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		gsap.to(container, {
			keyframes: {
				'0%': {},
				'100%': {
					transform: 'scale(0.9)',
				},
			},
			scrollTrigger: {
				end: 'top top-=100%',
				scrub: true,
				start: 'top top',
				trigger: container,
			},
		});
		// create a interval to change the active element by 1 second

		const gridCanvas = gridCanvasRef.current;

		if (!gridCanvas) return;

		const gridCtx = gridCanvas.getContext('2d');
		if (!gridCtx) return;

		const drawGrid = () => {
			const squareSize = 6;
			const transparentColor = 'rgba(0, 0, 0, 0)';
			const gridColor = '#45454510';
			const getFillStyle = (x: number, y: number) =>
				(x / squareSize + y / squareSize) % 2 === 0
					? transparentColor
					: gridColor;

			for (let x = 0; x < gridCanvas.width; x += squareSize) {
				for (let y = 0; y < gridCanvas.height; y += squareSize) {
					gridCtx.fillStyle = getFillStyle(x, y);
					gridCtx.fillRect(x, y, squareSize, squareSize);
				}
			}
		};

		const resizeCanvas = () => {
			gridCanvas.width = window.innerWidth;
			gridCanvas.height = window.innerHeight;
			drawGrid();
		};

		window.addEventListener('resize', resizeCanvas);

		resizeCanvas(); // Initial call to draw the grid

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	});

	return (
		<header
			id="hero"
			className={[heightWrapperStyle.wrapper, styles.header].join(' ')}
			aria-label="Hernán Fabrica"
		>
			<Container as="div" className={styles.container} ref={containerRef}>
				<Heading as="h1">{me.personal.name}</Heading>
				<Heading as="h2" className={styles.customH2}>
					{me.professional.currentPosition}
				</Heading>
				<div className={styles.description}>
					<Text className={styles.label}>[Hi]</Text>
					<Text>
						Welcome to my website. You can call me Herni. <br />
						Please take a look at my portfolio and have a wonderful time
						exploring.
					</Text>
					<Text className={styles.label}>[Who I am]</Text>
					<Text>
						{me.personal.age} years old. Uruguayan 🇺🇾. {me.education.degree}.
						Backend Enthusiast. Energetic. Innovative. Creative. Committed.
						Result-driven. Good Friend. Passionate about technology. Always
						learning.
					</Text>
					<Text className={styles.label}>[What I Offer]</Text>
					<Text>
						Crafting clean and highly functional code, architecting robust
						systems, creating modern websites, and consistently delivering
						projects that drive powerful impact and exceed clients&apos;
						expectations. An exceptional team player, always looking to
						collaborate, improve and learn together.
					</Text>
				</div>
				<div className={styles.footer}>
					<Image
						src="/images/icons/scroll-arrow.svg"
						alt="Scroll Down Arrow"
						width={60}
						height={80}
					/>
					<Text className={styles.quote}>Make the difference together.</Text>
				</div>
			</Container>
			<canvas ref={gridCanvasRef} className={styles.gridCanvas} />
		</header>
	);
};
export default Hero;
