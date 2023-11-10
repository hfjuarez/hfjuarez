import React from 'react';

// Components
import About from '@/components/about';
import Container from '@/components/common/layout/container';
import Expertise from '@/components/expertise';
import Footer from '@/components/common/layout/footer';
import Hero from '@/components/hero';
import Values from '@/components/values';
// import Skill from '@/components/skill';
// import Work from '@/components/work';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Values />
				<Expertise />
				<About />
				{/* <Skill />	 */}
				{/* <Work /> */}
				{/* <Contact /> */}
				<Footer />
			</Container>
		</>
	);
}
