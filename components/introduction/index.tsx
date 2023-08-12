import React, { Component } from 'react';

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Link from '@/components/common/layout/link';

// Styles
import introductionStyles from './introduction.module.scss';
import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

export default class Introduction extends Component {
	render() {
		return (
			<Container as="section" key="intro">
				<div className={introductionStyles.introduction}>
					<div className={introductionStyles.main}>
						<Heading as={'h1'}>
							Ambitious,
							<br />
							& Proactive
							<br />
							<span className={colorsStyles[UIColors.SECONDARY]}>
								developer.
							</span>
						</Heading>
					</div>
					<div className={introductionStyles['section-1']}>
						<Heading as={'h5'}>A bit about me</Heading>
						<Text>
							I have experience developing with <b>NodeJS</b> and <b>Vue</b>,
							and have also gained proficiency in other popular frameworks like
							Ruby on Rails, React, and React Native.
						</Text>
						<Link href="/me" type={UIColors.TERTIARY}>
							About Me
						</Link>
					</div>
					<div className={introductionStyles['section-2']}>
						<Heading as={'h5'}>Biggest challenge you&apos;ve faced?</Heading>
						<Text>
							Create the new LANDSale system to improve our community of 3
							millions users. Giving a profit of 750,000 USD in less than 1
							month.
						</Text>
						<Link href="/experience" type={UIColors.TERTIARY}>
							My Experience
						</Link>
					</div>
				</div>
			</Container>
		);
	}
}
