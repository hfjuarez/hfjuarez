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
import colorsStyles from '@/styles/colors.module.scss';
import heroStyles from './hero.module.scss';

const Header = () => {
	const contact = () => {
		window.location.href = 'mailto:herfj4@gmail.com';
	};
	return (
		<Container as="div" className={heroStyles['reduce-height']}>
			<header className={heroStyles.header} aria-label="Hey! I'm Hernán">
				<div className={heroStyles.introduction}>
					<Text className={heroStyles.hey}>Hey!</Text>
					<Heading as="h1">I&apos;m Hernán.</Heading>
					<Heading as="h2">
						<span>Full Stack</span>
						<span className={colorsStyles[UIColors.SECONDARY]}>
							&nbsp;developer
						</span>
					</Heading>
					<div className={heroStyles.pills}>
						<Pill colorScheme={UIColors.SECONDARY}>NodeJS</Pill>
						<Pill colorScheme={UIColors.SECONDARY}>VueJS</Pill>
						<Pill colorScheme={UIColors.SECONDARY}>ReactJS</Pill>
					</div>
				</div>
				<div className={heroStyles.description}>
					<Text>
						I&apos;m an ambitious and proactive developer specializing in
						creating end-to-end developments, with a proven record in large
						projects.
					</Text>
					<Text>
						Every project I&apos;ve been worked on is being developed with a
						focus on functionality, performance, and security.
					</Text>
					<Button colorScheme={UIColors.SECONDARY} onClick={contact}>
						What I&apos;ve been up to...
					</Button>
				</div>
			</header>
		</Container>
	);
};

export default Header;
