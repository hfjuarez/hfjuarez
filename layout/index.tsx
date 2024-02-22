import React, { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
// import Navbar from '@/components/common/navbar';

// Styles
import styles from './layout.module.scss';
// Data
import skills from 'data/skills';

type LayoutProps = {
	children: ReactNode;
};

let lenis: Lenis;
// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true, // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time: number) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

export default function Layout({ children }: LayoutProps) {
	useEffect(() => {
		initSmoothScrolling();
	});
	return (
		<>
			<Head>
				<title>Hernán Fabrica</title>
				{/* TODO: description */}

				<meta
					name="description"
					content="
					Full Stack Engineer
				"
				/>
				<meta name="author" content="Hernán Fabrica / @hfjuarez" />
				<meta
					name="keywords"
					content={skills.map((skill) => skill.name).join(',')}
				/>
				<meta
					name="theme-colorScheme"
					content="#161617"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#161617"
					media="(prefers-color-scheme: dark)"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="/fonts/mona-sans-1.0.1/Mona-Sans.woff2"
					as="font"
					type="font/woff2"
				></link>
			</Head>
			{/* <Navbar /> */}
			<>
				<div className={styles.main}>{children}</div>
			</>
		</>
	);
}
