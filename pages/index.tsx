import React from 'react';

import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Expertise from '@/components/expertise/v2';
import Works from '@/components/works';
import Contact from '@/components/contact';
import Footer from '@/components/common/layout/footer';
// import Education from '@/components/education';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Expertise />
				<Works />
				{/* <Education /> */}
				<Contact />
			</Container>
			<Footer />
		</>
	);
}
