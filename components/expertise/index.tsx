import React, { useEffect, useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Heading from '@/components/common/layout/heading';
import Container from '@/components/common/layout/container';

// Styles
import styles from './expertise.module.scss';
import FrontendExpertise from './FrontendExpertise';
import Button from '../common/button';

const Expertise = () => {
	const [showFrontendCodeCompiled, setShowFrontendCodeCompiled] =
		useState(false);

	const handleFrontendPreview = () => {
		setShowFrontendCodeCompiled(!showFrontendCodeCompiled);
	};

	const frontendExpertiseCode = `import React from 'react';

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';

const FrontendExpertise = () => {
	const startDate = new Date('2021-03-01');
	const currentDate = new Date();
	const diffInMonths =
		(currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
	const years = Math.floor(diffInMonths / 12);

	return (
		<div>
			<Heading as="h3">Frontend</Heading>
			<Text>
				Over {years} years of development experience in HTML,
				CSS, JS, Vue.js, React, NextJS and Nuxt frameworks.
			</Text>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JS</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Redux</li>
				<li>React Native</li>
				<li>Vue.js</li>
				<li>Nuxt.js</li>
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
		paragraph: \`Proficiency in backend development. \`,
		list: ['node', 'java', 'ruby', 'express']
	};
	res.json(backendExpertise);
});

app.listen(port, () => {
	console.log(\`Server listening at http://localhost:\${port}\`);
});
`;
	const otherExpertiseCode = `# Others Expertise

- Git
- Docker
- AWS
- SQL
- MongoDB
- REST API
- Unit Testing
- Integration Testing
- End-to-End Testing
`;

	const titleRef = useRef<HTMLHeadingElement>(null);
	const cardContainersRef = useRef(null);
	const expertiseRef = useRef(null);

	useEffect(() => {
		const title = titleRef.current;
		const cardContainers = cardContainersRef.current;
		const expertise = expertiseRef.current;

		gsap.to(title, {
			delay: 0,
			duration: 1.5,
			ease: 'power1.inOut',
			fontStretch: '90%',
			scale: 1.05,
			scrollTrigger: {
				start: 'top 50%',
				trigger: expertise,
			},
		});
		gsap.to(cardContainers, {
			delay: 0,
			duration: 1.5,
			ease: 'power1.inOut',
			marginTop: '-1.75rem',
			opacity: 1,
			scrollTrigger: {
				start: 'top 50%',
				trigger: expertise,
			},
		});
	}, []);

	return (
		<div className={styles.height} ref={expertiseRef}>
			<Container as="section">
				<Heading as="h2" className={styles.sectionTitle} ref={titleRef}>
					My Expertise
				</Heading>
				<div className={styles.cardContainers} ref={cardContainersRef}>
					<div className={styles.cardWrapper}>
						<div className={styles.card}>
							<div className={styles.topBar}>
								<div className={styles.macosClose} />
								<div className={styles.macosMinimize} />
								<div className={styles.macosMaximize} />
							</div>
							<div className={styles.content}>
								{showFrontendCodeCompiled ? (
									<div className={styles.frontendExpertise}>
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
							{showFrontendCodeCompiled
								? 'View Source Code'
								: 'View Compiled Code'}
						</Button>
					</div>

					<div className={styles.cardWrapper}>
						<div className={styles.card}>
							<div className={styles.topBar}>
								<div className={styles.macosClose} />
								<div className={styles.macosMinimize} />
								<div className={styles.macosMaximize} />
							</div>

							<div className={styles.content}>
								<SyntaxHighlighter
									language="javascript"
									showLineNumbers
									style={gruvboxDark}
								>
									{backendExpertiseCode}
								</SyntaxHighlighter>
							</div>
						</div>
						<Button onClick={handleFrontendPreview}>View Response</Button>
					</div>
					<div className={styles.cardWrapper}>
						<div className={styles.card}>
							<div className={styles.topBar}>
								<div className={styles.macosClose} />
								<div className={styles.macosMinimize} />
								<div className={styles.macosMaximize} />
							</div>
							<div className={styles.content}>
								<SyntaxHighlighter
									language="markdown"
									showLineNumbers
									style={gruvboxDark}
								>
									{otherExpertiseCode}
								</SyntaxHighlighter>
							</div>
						</div>
						<Button onClick={handleFrontendPreview}>Preview Markdown</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Expertise;
