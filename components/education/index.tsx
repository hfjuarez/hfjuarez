import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
// import Text from '@/components/common/layout/text';
import HeightWrapper from '@/components/common/layout/height';

import styles from './education.module.scss';

const Education = () => {
	return (
		<HeightWrapper
			as="section"
			id="education"
			className={styles.customHeightWrapper}
		>
			<Container as="div">
				<Heading as="h2">My Studies</Heading>
				<div className={styles.cardsContainer}>
					<div className={styles.card}>
						<Heading as="h3">Technologist Degree in Computer Science</Heading>
						<Heading as="h4">UTEC - UDELAR, 2019 - 2021</Heading>
						{/* <Heading as="h5">Description</Heading>
					<Text>
						The Technologist Degree in Computer Science trains professionals
						with the skills to act in the development, implementation and
						administration of computer systems. Certification is granted by
						UTEC, UdelaR and UTU.
					</Text>
					<Text>
						As graduated of the Computer Technologist career I&apos;m able to
						build and evaluate computer solutions covering the tasks of software
						design and development, testing and documentation, eventually
						integrating different technologies. I can also work in areas related
						to IT infrastructure.
					</Text>
					<Heading as="h5">Key Highlights</Heading>
					<ul>
						<li>Software development and testing</li>
						<li>Database and network infrastructure management</li>
						<li>
							Build and evaluate IT solutions that cover building, testing and
							documentation tasks integrating different technologies.
						</li>
					</ul>
					<Heading as="h5">Capstone Project</Heading>
					<Text>
						Developed a Chatbot with AI capabilities for high-profile clients,
						managing a projected 10,000+ requests per month.
					</Text> */}
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Education;
