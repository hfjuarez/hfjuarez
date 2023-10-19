import React from 'react';
// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';

// Styles
import loadingStyle from './loading.module.scss';

const Loading = () => {
	return (
		<div className={loadingStyle.background}>
			<div className={loadingStyle.wrapper}>
				<Container as="section" className={loadingStyle.centeredContainer}>
					<Heading as="h1" className={loadingStyle.hey}>
						Hey!
					</Heading>
					<Heading as="h1">I&apos;am Hernán.</Heading>
					<Heading as="h4" className={loadingStyle.subtitle}>
						Full Stack Developer
					</Heading>
				</Container>
			</div>
			<div className={loadingStyle.bgTextContainer}>
				<div className={loadingStyle.left}>
					<div>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
					</div>
				</div>
				<div className={loadingStyle.right}>
					<div>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
						<Text>Hello</Text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
