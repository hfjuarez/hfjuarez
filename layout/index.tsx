import React, { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/layout/footer';
// Styles
import documentStyle from '@/styles/document.module.scss';
import styles from './layout.module.scss';
// Data
import { skillsPills } from 'data/skills';

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
		document.body.className = documentStyle.body;
	});
	return (
		<>
			<Head>
				<title>Hernán Fabrica</title>
				{/* TODO: description */}
				<meta name="description" content="" />
				<meta name="author" content="Hernán Fabrica / @hfjuarez" />
				<meta
					name="keywords"
					content={skillsPills.map((skill) => skill.name).join(',')}
				/>
				<meta
					name="theme-colorScheme"
					content="#fff"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#202022"
					media="(prefers-color-scheme: dark)"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<div className={styles.main}>{children}</div>
			<Footer />
		</>
	);
}
