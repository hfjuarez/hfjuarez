import React from 'react';

// Components
import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Introduction from '@/components/introduction';
import About from '@/components/about';
import Footer from '@/components/common/layout/footer';
// import Skill from '@/components/skill';
// import Work from '@/components/work';

// Styles
import styles from './index.module.scss';

export default function Home() {
	return (
		<>
			<div className={styles.parallax}>
				<Hero />
			</div>
			<Container as="main">
				<Introduction />
				<About />
				<Footer />
			</Container>
		</>
	);
}
