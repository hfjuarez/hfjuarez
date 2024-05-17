import React, { ReactNode } from 'react';
// import Lenis from '@studio-freight/lenis';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';

// Styles
import styles from './layout.module.scss';
// Data
import skills from '@/data/contents/skills';
import me from '@/data/contents/me';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const parsedSkills: string[] = skills.map((skill) => skill.name);
	const keywords = [
		...parsedSkills,
		'resume',
		'portfolio',
		'full stack developer',
		'developer',
		'technical lead',
	].join(',');
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Hernán Fabrica - Full Stack Developer - Portfolio</title>
				<meta
					name="description"
					content={`${me.professional.currentPosition} with ${me.professional.yearsOfExperience}+ years of experience crafting beautifully and highly functional code, creating modern sites, and architecting robust systems that make our clients happier :)`}
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
