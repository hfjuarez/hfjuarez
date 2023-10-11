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
					<Heading as="h1">
						<span className={colorsStyles[UIColors.BASE]}>
							I&apos;m Hernán.
						</span>
					</Heading>
					<Heading as="h2">
						<span>Full Stack</span>
						<span className={colorsStyles[UIColors.SECONDARY]}>
							&nbsp;developer
						</span>
					</Heading>
					<div className={heroStyles.pills}>
						<Pill colorScheme={UIColors.PRIMARY}>NodeJS</Pill>
						<Pill colorScheme={UIColors.PRIMARY}>VueJS</Pill>
						<Pill colorScheme={UIColors.PRIMARY}>ReactJS</Pill>
						<Pill colorScheme={UIColors.PRIMARY}>Ruby on Rails</Pill>
						<Pill colorScheme={UIColors.PRIMARY}>Java</Pill>
					</div>
				</div>
				<div className={heroStyles.description}>
					<Text>
						I&apos;m a Full Stack developer with a strong focus on Back-end
						development. Over the years, my journey has been filled with amazing
						adventures, incredible challenges, and continuous learning, allowing
						me to grow faster than I could have ever expected.
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
