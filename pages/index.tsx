import React from 'react';

import About from '@/components/about';
import Contact from '@/components/contact';
import Container from '@/components/common/layout/container';
import Expertise from '@/components/expertise';
import Footer from '@/components/common/layout/footer';
import Hero from '@/components/hero';
import Values from '@/components/values';
// import Work from '@/components/work';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Values />
				<Expertise />
				<About />
				{/* <Work /> */}
				<Contact />
				<Footer />
			</Container>
		</>
	);
}
