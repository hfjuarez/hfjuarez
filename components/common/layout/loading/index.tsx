import React from 'react';
// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';

// Styles
import loadingStyle from './loading.module.scss';

const Loading = () => {
	return (
		<Container as="section" className={loadingStyle.loadingContainer}>
			<Heading as="h1" className={loadingStyle.loadingHey}>
				Hey! 👋
			</Heading>
			<Heading as="h1">I&apos;am Hernán.</Heading>
			<Heading as="h4" className={loadingStyle.loadingSubtitle}>
				Coming soon...
			</Heading>
		</Container>
	);
};

export default Loading;
