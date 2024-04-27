import React, { ReactNode } from 'react';
// import Lenis from '@studio-freight/lenis';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';

// Styles
import styles from './layout.module.scss';
// Data
import skills from '@/data/contents/skills';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	// count years from march 2021 to now, round down
	const yearsOfExperience = Math.floor(
		(new Date().getTime() - new Date('2021-03-01').getTime()) /
			(1000 * 60 * 60 * 24 * 365),
	);
	const parsedSkills: string[] = skills.map((skill) => skill.name);
	const keywords = [
		...parsedSkills,
		'resume',
		'portfolio',
		'full stack engineer',
		'developer',
		'technical lead',
	].join(',');
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Hernán Fabrica - Full Stack Engineer - Portfolio</title>
				<meta
					name="description"
					content={`Full Stack Engineer & Technical Lead with ${yearsOfExperience}+ years of experience crafting beautifully and highly functional code, creating modern sites, and architecting robust systems that make our clients happier :)`}
				/>
				<meta name="author" content="Hernán Fabrica / @hfjuarez" />
				<meta name="keywords" content={keywords} />

				{/* Open Graph / Facebook  */}
				{/* Twitter Card */}

				<meta
					name="theme-color"
					content="#fffbee"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#fffbee"
					media="(prefers-color-scheme: dark)"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="/fonts/mona-sans-1.0.1/Mona-Sans.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/playfair_display/PlayfairDisplay-VariableFont_wght.ttf"
					as="font"
					crossOrigin="anonymous"
				/>
			</Head>
			<>
				<div className={styles.main}>{children}</div>
			</>
		</>
	);
}
