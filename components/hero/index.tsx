import React from 'react';
// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Pill from '@/components/common/pill';
// Utils
import { UIColors } from 'utils/ui';
// Styles
import colorsStyles from '@/styles/colors.module.scss';
import heroStyles from './hero.module.scss';

const Header = () => {
	return (
		<Container as="div" className={heroStyles.reduceHeight}>
			<header className={heroStyles.header} aria-label="Hey! I'm Hernán">
				<div className={heroStyles.introduction}>
					<Text className={heroStyles.hey}>Hey!</Text>
					<Heading as="h1">I&apos;m Hernán.</Heading>
					<Heading as="h2">
						<span>SSr Full-stack</span>
						<span className={colorsStyles[UIColors.SECONDARY]}>
							&nbsp;developer
						</span>
					</Heading>
					<div className={heroStyles.primaryPills}>
						<Pill colorScheme={UIColors.SECONDARY}>NodeJS</Pill>
						<Pill colorScheme={UIColors.SECONDARY}>VueJS</Pill>
						<Pill colorScheme={UIColors.SECONDARY}>ReactJS</Pill>
					</div>
					<div className={heroStyles.secondaryPills}>
						<Pill colorScheme={UIColors.SECONDARY}>Ruby on Rails</Pill>
						<Pill colorScheme={UIColors.SECONDARY}>Java</Pill>
					</div>
				</div>
				<div className={heroStyles.description}>
					<Text>
						I&apos;m a Full-stack developer with a strong focus on Back-end
						development. Over the past 2+ years, my journey has been filled with
						amazing adventures, incredible challenges, and continuous learning,
						allowing me to grow faster than I could have ever expected.
					</Text>
					<Text>
						I&apos;ve had the privilege of contributing to large-scale projects
						at an international company, collaborating with talented
						professionals from across the globe to transform complex challenges
						into robust and successful solutions that have a significant impact.
					</Text>
					<Text className={heroStyles.stoke}>
						Let&apos;s explore my portfolio together.
					</Text>
				</div>
			</header>
		</Container>
	);
};

export default Header;
