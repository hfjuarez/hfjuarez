import React from 'react';
import Image from 'next/image';

import Heading from '@/components/common/layout/heading';
import Link from '@/components/common/layout/link';
import Pill from '@/components/common/pill';
import Text from '@/components/common/layout/text';

import { UIColors } from 'utils/ui';

import heroStyles from './hero.module.scss';
import heightWrapperStyle from '@/components/common/layout/height/height.module.scss';

const Hero = () => {
	return (
		<header
			id="hero"
			className={heightWrapperStyle.wrapper}
			aria-label="Hero - Hello, I'm Hernán"
		>
			<div className={heroStyles.container}>
				<div className={heroStyles.top}>
					<Heading as="h6">
						Looking for
						<br />
						your next developer?
					</Heading>
					<Link
						href="mailto:hello@hernanfabrica.com"
						className={heroStyles.link}
					>
						Get in touch!
					</Link>
				</div>
				<div className={heroStyles.centered}>
					<div>
						{/* <Text className={heroStyles.iam}>I am</Text> */}
						<Heading as="h1">
							{/* <span>I am</span> */}
							I&apos;m
							<br />
							Hernán
						</Heading>
						<Heading as="h2">Full Stack Engineer</Heading>
					</div>
					<div className={heroStyles.pills}>
						<Pill colorScheme={UIColors.WHITE}>NodeJS</Pill>
						<Pill colorScheme={UIColors.WHITE}>VueJS</Pill>
						<Pill colorScheme={UIColors.WHITE}>ReactJS</Pill>
						<Pill colorScheme={UIColors.WHITE}>Ruby on Rails</Pill>
						<Pill colorScheme={UIColors.WHITE}>Java</Pill>
					</div>
				</div>
				<div className={heroStyles.links}>
					<Link href="https://github.com/hfjuarez" className={heroStyles.link}>
						<Image
							width={13}
							height={13}
							src="/images/github-mark-white.svg"
							alt="Github Mark White"
						/>
						&nbsp;Github
					</Link>
					<Link
						href="https://www.linkedin.com/in/hfjuarez/"
						className={heroStyles.link}
					>
						<Image
							height={13}
							width={13}
							src="/images/linkedin-icon-white.svg"
							alt="Linkedin Icon White"
						/>
						&nbsp;Linkedin
					</Link>
				</div>
			</div>
			<div className={heroStyles.animation}>
				<div className={heroStyles.left}>
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
				<div className={heroStyles.right}>
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
		</header>
	);
};

export default Hero;
