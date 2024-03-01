import React from 'react';

import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Values from '@/components/values';
import Expertise from '@/components/expertise';
import Summary from '@/components/summary';
import Works from '@/components/works';
import Contact from '@/components/contact';
import Footer from '@/components/common/layout/footer';
import Education from '@/components/education';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Values />
				<Summary />
				<Expertise />
				<Works />
				<Education />
				<Contact />
			</Container>
			<Footer />
		</>
	);
}
