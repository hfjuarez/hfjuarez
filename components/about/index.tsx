import React from 'react';

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';

// Styles
import aboutStyle from './about.module.scss';

// Utils
import { UIColors } from 'utils/ui';

const About = () => {
	return (
		<Container as="section" className={aboutStyle.centeredWrapper}>
			<Heading as={'h1'} colorScheme={UIColors.PRIMARY}>
				About me
			</Heading>
			<Text>
				On my journey as a Full Stack developer, my focus has always been on
				pushing the boundaries of what&apos;s possible. I am driven by a deep
				passion for Back-end development, and my ambition is clear: I want to
				continue creating innovative solutions that drive success and make a
				significant impact on projects. I offer a proven track record in
				spearheading high-impact endeavors, such as the creation and leadership
				of the all-new LAND Sale system for The Sandbox Game, and I led a
				significant private healthcare provider project. With proficiency in a
				wide array of technologies, including JavaScript, Node, Java, Vue,
				React, and more, I am ready to take on the challenges of complex
				technical projects.
			</Text>
			<Text>
				What sets me apart is not just my technical expertise but also my
				commitment to results and my ability to lead and collaborate
				effectively. I have demonstrated my capabilities by owning and leading
				projects, making critical technical decisions, and collaborating with
				cross-functional teams to deliver successful integrations and new
				features. My dedication to improving accessibility, performance, and the
				stability of web applications, along with my experience in developing
				robust APIs, highlights my well-rounded skill set.
			</Text>
			<Text>
				I am also a strong believer in the power of teamwork. I love working
				with visionary teams and organizations that share my passion for
				innovation and are open to teaching and learning from each other.
			</Text>
			<Text>
				If you are looking for a Full Stack developer who is detail-oriented,
				proactive, a fast learner, and passionate about delivering innovative
				solutions, I&apos;m always ready to bring my skills and experience to
				the table and help you achieve your goals.
			</Text>
		</Container>
	);
};

export default About;
