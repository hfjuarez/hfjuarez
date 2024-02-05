import React from 'react';

import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Values from '@/components/values';
import Expertise from '@/components/expertise';
import Summary from '@/components/summary';
import Work from '@/components/work';
import Contact from '@/components/contact';
import Footer from '@/components/common/layout/footer';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Values />
				<Expertise />
				<Work />
				<Summary />
				{/* <Portfolio/> */}
				{/* <Education/> */}
				<Contact />
				<Footer />
			</Container>
		</>
	);
}
