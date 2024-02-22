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
				<Summary />
				<Expertise />
				<Work />
				{/* <Portfolio/> */}
				{/**
	 * Education: Technological University of Uruguay

Degree: Technologist Degree in Computer Science

Duration: 2019 - 2021

Description: At the Technological University of Uruguay, I pursued a comprehensive curriculum focused on computer science, software development, and testing. With a GPA of 4.37/5, I specialized in building and evaluating IT solutions integrating various technologies. My capstone project involved developing a Chatbot with AI capabilities for high-profile clients, managing a projected 10,000+ requests per month. Additionally, I gained proficiency in database management, network infrastructure, and software evaluation methodologies.

Key Highlights:

Graduated with a GPA of 4.37/5.
Specialized in software development and testing.
Proficient in database and network infrastructure management.
Capstone Project: Developed a Chatbot with AI capabilities for high-profile clients, managing a projected 10,000+ requests per month.




	 */}
				<Contact />
			</Container>
			<Footer />
		</>
	);
}
