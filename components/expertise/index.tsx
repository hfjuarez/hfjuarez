import React, { useEffect, useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Button from '@/components/common/button';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Text from '@/components/common/layout/text';
import Container from '@/components/common/layout/container';
import FrontendExpertise from './FrontendExpertise';
import MacosActions from '@/components/common/macosActions';

import styles from './expertise.module.scss';

import { UIColors } from 'utils/ui';

// TODO: Integrate data/contents/skills.ts
const Expertise = () => {
	const [showFrontend, setShowFrontend] = useState(true);
	const [showBackend, setShowBackend] = useState(true);
	const [showOthers, setShowOthers] = useState(true);

	const handleFrontendPreview = () => {
		setShowFrontend(!showFrontend);
	};
	const handleBackendPreview = () => {
		setShowBackend(!showBackend);
	};
	const handleOtherExpertise = () => {
		setShowOthers(!showOthers);
	};

	const frontendExpertiseCode = `import React from 'react';

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';

const FrontendExpertise = () => {
	const startDate = new Date('2021-01');
	const currentDate = new Date();
	const diffInMonths =
		(currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
	const years = Math.round(diffInMonths / 12);

	return (
		<div>
			<Heading as="h3" colorScheme={UIColors.RED}>
				Frontend
			</Heading>
			<Text>
				With {years}+ years of frontend development experience, I specialize in
				creating dynamic, user-centric interfaces.
			</Text>
			<ul>
				<li>React</li>
				<li>Next.js</li>
				<li>Vue.js</li>
				<li>Nuxt.js</li>
				<li>JS</li>
				<li>CSS</li>
				<li>HTML - Semantic and Accessibility</li>
				<li>Redux</li>
				<li>React Native</li>
				<li>Webpack</li>
			</ul>
		</div>
	);
};

export default FrontendExpertise;`;
	const backendExpertiseCode = `import express from 'express';

const app = express();
const port = 3000;

app.get('/list-of-backend-expertise', (req, res) => {
	const backendExpertise = {
		title: 'Backend',
		paragraph: \`Proficient in backend development, I specialize in building robust, scalable server-side solutions.\`,
		list: ['NodeJS', 'Ruby on Rails', 'Java', 'Express', 'SQL', 'Sequelize', 'MongoDB', 'Mongoose', 'AWS - EC2 - RDS' ]
	};
	res.json(backendExpertise);
});

app.listen(port, () => {
	console.log(\`Server listening at http://localhost:\${port}\`);
});
`;
	const otherExpertiseCode = `### Others

I offer a diverse skill set that enriches my capacity to provide holistic solutions.

- Git
- Docker
- AWS
- REST API
- Unit Testing
- Integration Testing
- End-to-End Testing
- Fast Learning
- Detail-Oriented
- Proactive
- Problem-Solving
`;

	const titleRef = useRef<HTMLHeadingElement>(null);
	const card1Ref = useRef(null);
	const card2Ref = useRef(null);
	const card3Ref = useRef(null);
	const expertiseRef = useRef(null);

	useEffect(() => {
		const title = titleRef?.current;
		const card1 = card1Ref?.current;
		const card2 = card2Ref?.current;
		const card3 = card3Ref?.current;
		const expertise = expertiseRef?.current;
		if (!title || !card1 || !card2 || !card3 || !expertise) return;

		gsap.to(title, {
			delay: 0,
			duration: 0.75,
			ease: 'none',
			fontSize: '7.5rem',
			fontStretch: '95%',
			fontWeight: 800,
			marginTop: 0,
			scrollTrigger: {
				start: 'top 70%',
				trigger: expertise,
			},
		});
		gsap.to(card1, {
			delay: 0,
			duration: 0.5,
			ease: 'none',
			marginTop: 0,
			opacity: 1,
			scrollTrigger: {
				start: 'top 70%',
				trigger: expertise,
			},
		});
		gsap.to(card2, {
			delay: 0.2,
			duration: 0.75,
			ease: 'none',
			marginTop: 0,
			opacity: 1,
			scrollTrigger: {
				start: 'top 70%',
				trigger: expertise,
			},
		});
		gsap.to(card3, {
			delay: 0.4,
			duration: 1,
			ease: 'none',
			marginTop: 0,
			opacity: 1,
			scrollTrigger: {
				start: 'top 70%',
				trigger: expertise,
			},
		});
	}, []);

	return (
		<HeightWrapper
			as="section"
			ref={expertiseRef}
			id="expertise"
			style={{ backgroundColor: '#060606', paddingTop: '6rem' }}
		>
			<Container as="div">
				<Heading as="h2" className={styles.title} ref={titleRef}>
					My Expertise
				</Heading>
				<div className={styles.cardContainers}>
					<div className={styles.cardWrapper} ref={card1Ref}>
						<div className={styles.card}>
							<MacosActions />
							<div className={styles.content}>
								{showFrontend ? (
									<div className={styles.transpiledCode}>
										<FrontendExpertise />
									</div>
								) : (
									<SyntaxHighlighter
										language="javascript"
										showLineNumbers
										style={gruvboxDark}
									>
										{frontendExpertiseCode}
									</SyntaxHighlighter>
								)}
							</div>
						</div>
						<Button onClick={handleFrontendPreview}>
							{showFrontend ? 'View Source Code' : 'View Preview'}
						</Button>
					</div>

					<div className={styles.cardWrapper} ref={card2Ref}>
						<div className={styles.card}>
							<MacosActions />
							<div className={styles.content}>
								{showBackend ? (
									<div className={styles.transpiledCode}>
										<Heading as="h3" colorScheme={UIColors.YELLOW}>
											Backend
										</Heading>
										<Text>
											Proficient in backend development, I specialize in
											building robust, scalable server-side solutions.
										</Text>
										<ul>
											<li>NodeJS</li>
											<li>Ruby on Rails</li>
											<li>Java</li>
											<li>Express</li>
											<li>SQL</li>
											<li>Sequelize</li>
											<li>MongoDB</li>
											<li>Mongoose</li>
											<li>AWS - EC2 - RDS</li>
										</ul>
									</div>
								) : (
									<SyntaxHighlighter
										language="javascript"
										showLineNumbers
										style={gruvboxDark}
									>
										{backendExpertiseCode}
									</SyntaxHighlighter>
								)}
							</div>
						</div>
						<Button onClick={handleBackendPreview}>
							{showBackend ? 'View Source Code' : 'View Preview'}
						</Button>
					</div>
					<div className={styles.cardWrapper} ref={card3Ref}>
						<div className={styles.card}>
							<MacosActions />
							<div className={styles.content}>
								{showOthers ? (
									<div className={styles.transpiledCode}>
										<Heading as="h3" colorScheme={UIColors.GREEN}>
											Others
										</Heading>
										<Text>
											I offer a diverse skill set that enriches my capacity to
											provide holistic solutions.
										</Text>
										<ul>
											<li>Git</li>
											<li>Docker</li>
											<li>AWS</li>
											<li>REST API</li>
											<li>Unit Testing</li>
											<li>Integration Testing</li>
											<li>End-to-End Testing</li>
											<li> Fast Learning</li>
											<li>Detail-Oriented</li>
											<li>Proactive</li>
											<li>Problem-Solving</li>
										</ul>
									</div>
								) : (
									<SyntaxHighlighter
										language="markdown"
										showLineNumbers
										style={gruvboxDark}
									>
										{otherExpertiseCode}
									</SyntaxHighlighter>
								)}
							</div>
						</div>
						<Button onClick={handleOtherExpertise}>
							{showOthers ? 'View Source Code' : 'View Preview'}
						</Button>
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Expertise;
