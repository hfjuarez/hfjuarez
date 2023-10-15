import React from 'react';
// Components
import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Introduction from '@/components/about';
import Skill from '@/components/skill';
import Work from '@/components/work';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Introduction />
				<Skill />
				<Work />
			</Container>
		</>
	);
}
