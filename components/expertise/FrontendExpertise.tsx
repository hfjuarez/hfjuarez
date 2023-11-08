import React from 'react';

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
				Over {years} years of development experience in HTML, CSS, JS, Vue.js,
				React, NextJS and Nuxt frameworks.
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

export default FrontendExpertise;
