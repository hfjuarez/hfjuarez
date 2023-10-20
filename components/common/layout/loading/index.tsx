import React from 'react';
// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Pill from '@/components/common/pill';
import Button from '@/components/common/button';

// Utils
import { UIColors } from 'utils/ui';

// Styles
import loadingStyle from './loading.module.scss';

const Loading = () => {
	const contact = () => {
		window.location.href = 'mailto:hello@hernanfabrica.com';
	};
	return (
		<div className={loadingStyle.background}>
			<div className={loadingStyle.wrapper}>
				<Container as="section" className={loadingStyle.centeredContainer}>
					<header className={loadingStyle.header}>
						<Heading as="h5">
							Looking for
							<br />
							your next developer?
						</Heading>
						<Heading as="h5" className={loadingStyle.centered}>
							Full Stack Developer
						</Heading>
						{/* <Heading as="h5">Get in touch!</Heading> */}
						<Button
							onClick={contact}
							id="loading-cta"
							className={loadingStyle.button}
						>
							Get in touch!
						</Button>
					</header>
					<div className={loadingStyle.titleWrapper}>
						<Heading as="h1">
							<span>I&apos;am</span>
							<br />
							Hernán
						</Heading>
					</div>
					<footer className={loadingStyle.footer}>
						<div className={loadingStyle.pills}>
							<Pill colorScheme={UIColors.WHITE}>NodeJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>VueJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>ReactJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>Ruby on Rails</Pill>
							<Pill colorScheme={UIColors.WHITE}>Java</Pill>
						</div>
					</footer>
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
