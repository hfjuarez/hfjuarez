import React from 'react';

import Navbar from '@/components/common/navbar';
import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Expertise from '@/components/expertise/v2';
import Works from '@/components/works';
import Contact from '@/components/contact';
import Footer from '@/components/common/layout/footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Container as="main">
				<Expertise />
				<Works />
				<Contact />
			</Container>
			<Footer />
		</>
	);
}
