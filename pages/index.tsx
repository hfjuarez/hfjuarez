import React from 'react';

// import Navbar from '@/components/common/navbar';
import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import About from '@/components/about';
import Works from '@/components/works';
import Contact from '@/components/contact';
import Footer from '@/components/common/layout/footer';

export default function Home() {
	return (
		<>
			{/* <Navbar /> */}
			<Hero />
			<Container as="main">
				<About />
				<Works />
				<Contact />
			</Container>
			<Footer />
		</>
	);
}
