import React from 'react';
// Components
import Container from '@/components/common/layout/container';
import Hero from '@/components/hero';
import Introduction from '@/components/introduction';
import Stack from '@/components/stack';
import Work from '@/components/work';

export default function Home() {
	return (
		<>
			<Hero />
			<Container as="main">
				<Introduction />
				<Stack />
				<Work />
			</Container>
		</>
	);
}
