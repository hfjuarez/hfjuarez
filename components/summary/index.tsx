import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';

import summaryStyles from './summary.module.scss';

const Summary = () => {
	return (
		<HeightWrapper
			as="section"
			id="summary"
			style={{ backgroundColor: '#000', paddingBlock: '6rem' }}
		>
			<Container as="div" className={summaryStyles.centeredWrapper}>
				<Heading as="h3" className={summaryStyles.title}>
					{/* I’m a Full Stack Engineer specializing in Vue.js, Node.js, and React. I
					excel in developing scalable web and mobile apps for various sectors,
					including gaming, healthcare, and real estate. My strong attention to
					detail, user-centric approach, and adaptability have contributed to my
					success in dynamic environments and garnered recognition for client
					success. */}
					{/* Results-driven Full Stack Engineer with a proven track record in
					spearheading high-impact projects, including the creation of the
					all-new LAND Sale system at The Sandbox Game and leading a significant
					private healthcare provider project. Proficient in JavaScript, Node,
					Java, Vue, React and a range of technologies. Committed to delivering
					innovative solutions that drive success. */}
					Dynamic Full Stack Engineer with a proven history of driving impactful
					projects, such as pioneering the innovative LAND Sale system at The
					Sandbox Game. Proficient in JavaScript, Node, Java, Vue, and React,
					with a focus on delivering results and innovative solutions. Ready to
					contribute expertise to your team&apos;s success.
				</Heading>
			</Container>
		</HeightWrapper>
	);
};

export default Summary;
