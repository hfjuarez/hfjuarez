import React from 'react';

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import { UIColors } from 'utils/ui';

const FrontendExpertise = () => {
	const startDate = new Date('2021-01');
	const currentDate = new Date();
	const diffInMonths =
		(currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
	const years = Math.round(diffInMonths / 12);

	return (
		<>
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
		</>
	);
};

export default FrontendExpertise;
