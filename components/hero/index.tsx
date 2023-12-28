import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Heading from '@/components/common/layout/heading';
import MacosActions from '@/components/common/macos-actions';
import Link from '@/components/common/layout/link';
import Pill from '@/components/common/pill';
import Text from '@/components/common/layout/text';

import { UIColors } from 'utils/ui';

import heroStyles from './hero.module.scss';

const Hero = () => {
	return (
		<div className={heroStyles.background}>
			<div className={heroStyles.wrapper}>
				<header className={heroStyles.centeredContainer}>
					<MacosActions />
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
					<div className={heroStyles.titleWrapper}>
						<Text className={heroStyles.iam}>I am</Text>
						<Heading as="h1">Hernán</Heading>
					</div>
					<div className={heroStyles.bottom}>
						<Heading as="h2" className={heroStyles.centered}>
							Full Stack Engineer
						</Heading>
						<div className={heroStyles.pills}>
							<Pill colorScheme={UIColors.WHITE}>NodeJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>VueJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>ReactJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>Ruby on Rails</Pill>
							<Pill colorScheme={UIColors.WHITE}>Java</Pill>
						</div>
						<div className={heroStyles.links}>
							<Link
								href="https://github.com/hfjuarez"
								className={heroStyles.link}
							>
								<Image
									width={13.6}
									height={13.6}
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
									height={13.6}
									width={13.6}
									src="/images/linkedin-icon-white.svg"
									alt="Linkedin Icon White"
								/>
								&nbsp;Linkedin
							</Link>
						</div>
					</div>
				</header>
			</div>
			<div className={heroStyles.bgTextContainer}>
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
		</div>
	);
};

export default Hero;
