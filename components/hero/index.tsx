import React, { useEffect, useRef } from 'react';

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Container from '@/components/common/layout/container';

import heightWrapperStyle from '@/components/common/layout/height/height.module.scss';
import styles from './hero.module.scss';
import Image from 'next/image';

const Hero = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const squareSize = 6;
		const transparentColor = 'rgba(0, 0, 0, 0)';
		const gridColor = '#1a1a1a20';

		const getFillStyle = (x: number, y: number) =>
			(x / squareSize + y / squareSize) % 2 === 0
				? transparentColor
				: gridColor;

		const drawGrid = () => {
			for (let x = 0; x < canvas.width; x += squareSize) {
				for (let y = 0; y < canvas.height; y += squareSize) {
					ctx.fillStyle = getFillStyle(x, y);
					// create circle instead of square
					// ctx.beginPath();
					// ctx.arc(x, y, squareSize / 2, 0, Math.PI * 2);
					// ctx.fill();

					ctx.fillRect(x, y, squareSize, squareSize);
				}
			}
		};
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			drawGrid();
		};

		window.addEventListener('resize', resizeCanvas);

		resizeCanvas(); // Initial call to draw the grid

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, []);

	return (
		<header
			id="hero"
			className={[heightWrapperStyle.wrapper, styles.header].join(' ')}
			aria-label="Hernán Fabrica"
		>
			<Container as="div" className={styles.container}>
				<Text className={styles.question}>
					Looking for
					<br />
					your next developer?
				</Text>
				<Heading as="h1">Hernán Fabrica</Heading>
				<Heading as="h2" className={styles.customH2}>
					Full Stack Engineer & Technical Leader
				</Heading>
				<ul className={styles.principalSkillList}>
					<li>NodeJS</li>
					<li>VueJS</li>
					<li>ReactJS</li>
					<li>Ruby On Rails</li>
					<li>Java</li>
				</ul>
				<div className={styles.footer}>
					<Image
						src="/images/scroll-arrow.svg"
						alt="Scroll Arrow"
						width={70}
						height={90}
					/>
					<Text className={styles.description}>
						I&apos;m a committed Full Stack Engineer with a proven history of
						driving <span>impactful projects</span>, creating{' '}
						<span>innovative solutions</span>, and delivering{' '}
						<span>powerful results</span>.
					</Text>
				</div>
			</Container>
			<canvas ref={canvasRef}></canvas>
		</header>
	);
};
export default Hero;
