import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import HeightWrapper from '@/components/common/layout/height';

import educationStyle from './education.module.scss';

const Education = () => {
	return (
		<HeightWrapper
			as="section"
			id="education"
			className={educationStyle.customHeightWrapper}
		>
			<Container as="div">
				<Heading as="h2">My Studies</Heading>
				<div className={educationStyle.card}>
					<Heading as="h3">Technologist Degree in Computer Science</Heading>
					<Heading as="h4">UTEC - UDELAR, 2019 - 2021</Heading>
					<Heading as="h5">Description</Heading>
					<Text>
						At the Technological University of Uruguay, I pursued a
						comprehensive curriculum focused on computer science, software
						development, and testing. With a GPA of 4.37/5, I specialized in
						building and evaluating IT solutions integrating various
						technologies. My capstone project involved developing a Chatbot with
						AI capabilities for high-profile clients, managing a projected
						10,000+ requests per month. Additionally, I gained proficiency in
						database management, network infrastructure, and software evaluation
						methodologies.
					</Text>
					<Heading as="h5">Key Highlights</Heading>
					<Text>
						Graduated with a GPA of 4.37/5. Specialized in software development
						and testing. Proficient in database and network infrastructure
						management.
					</Text>
					<Heading as="h5">Capstone Project</Heading>
					<Text>
						Developed a Chatbot with AI capabilities for high-profile clients,
						managing a projected 10,000+ requests per month.
					</Text>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Education;
