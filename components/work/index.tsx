import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Text from '@/components/common/layout/text';

import work from './work.module.scss';

const Work = () => {
	return (
		<HeightWrapper as="section" id="work" style={{ paddingBlock: '8rem' }}>
			<Container as="div" className={work.container}>
				<Heading as="h2">My work</Heading>
				<div className={work.grid}>
					<div className={work.card}>
						<Heading as="h3">LAND Sale</Heading>
						<Heading as="h4">Full Stack Engineer & Technical Lead</Heading>
						<Heading as="h5">The Sandbox Game, 2022-Present</Heading>
						<Text>
							The LAND Sale project was a groundbreaking initiative aimed at
							revolutionizing land sales within our gaming platform.
						</Text>
						<Text>
							As a Full Stack Engineer I was a key part of the development of
							this critical system from conception to execution. As the
							technical lead, I spearheaded the development of incredible new
							features.
						</Text>
						<Text>
							We designed and implemented a robust and secure platform for users
							to purchase virtual lands, enabling them to create immersive
							gaming experiences within the metaverse.
						</Text>
						<ul className={work.pills}>
							<li className={work.red}>Vue.js</li>
							<li className={work.yellow}>Node.js</li>
							<li className={work.yellow}>SQL (Sequelize)</li>
							<li className={work.yellow}>Architectural Decision</li>
							<li className={work.green}>Problem-Solving</li>
							<li className={work.green}>Project Management</li>
							<li className={work.green}>Project Leadership</li>
							<li className={work.green}>Blockchain</li>
							<li className={work.green}>Security</li>
						</ul>
					</div>
					<div className={work.card}>
						<Heading as="h3">Private Healthcare</Heading>
						<Heading as="h4">Full Stack Developer & Technical Lead</Heading>
						<Heading as="h5">Cualit, 2021-2022</Heading>
						<Text>
							The Private Healthcare Web App & Mobile App project was a
							comprehensive solution catering to the needs of healthcare
							provider and their patients.
						</Text>
						<Text>
							Beginning as a Full Stack Developer, I transitioned into the role
							of Technical Lead, overseeing the evolution and enhancement of the
							platform.
						</Text>
						<Text>
							We facilitated seamless interactions between healthcare
							professionals and patients. Noteworthy achievements include the
							successful integration of a new payment gateway (Plexo), migration
							to a new server infrastructure, and resolution of long-standing
							bugs.
						</Text>
						<Text>
							Additionally, I led the transition to a new provider following the
							acquisition of Cualit by The Sandbox Game, ensuring uninterrupted
							service for users.
						</Text>
						<ul className={work.pills}>
							<li className={work.red}>Ionic</li>
							<li className={work.red}>Angular</li>
							<li className={work.yellow}>Ruby on Rails</li>
							<li className={work.yellow}>SQL</li>
							<li className={work.yellow}>AWS</li>
							<li className={work.yellow}>Payment Gateway Integration</li>
							<li className={work.yellow}>Server Maintenance</li>
							<li className={work.green}>Project Leadership</li>
						</ul>
					</div>
					<div className={work.card}>
						<Heading as="h3">Simple & Supper</Heading>
						<Heading as="h4">Full Stack Developer</Heading>
						<Heading as="h5">Cualit, 2021-2022</Heading>
						<Text>
							The Simple & Supper project was a fundamental system designed for
							electronic billing, stock management, and customer relations.
						</Text>
						<Text>
							As part of a five-member development team, I contributed to the
							end-to-end development of the system.
						</Text>
						<Text>
							This system addressed critical business needs, streamlining
							billing processes, managing inventory efficiently, and enhancing
							customer relationships.
						</Text>
						<ul className={work.pills}>
							<li className={work.red}>Vue.js</li>
							<li className={work.yellow}>Node.js</li>
							<li className={work.yellow}>MongoDB (Mongoose)</li>
							<li className={work.green}>Agile Methodologies</li>
						</ul>
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Work;
