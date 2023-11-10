import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Pill from '@/components/common/pill';
import Link from '@/components/common/layout/link';

// Utils
import { UIColors } from 'utils/ui';

// Styles
import styles from './hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.background}>
			<div className={styles.wrapper}>
				<header className={styles.centeredContainer}>
					<div className={styles.topBar}>
						<div className={styles.macosClose} />
						<div className={styles.macosMinimize} />
						<div className={styles.macosMaximize} />
					</div>
					<div className={styles.top}>
						<Heading as="h6">
							Looking for
							<br />
							your next developer?
						</Heading>
						<Link href="mailto:hello@hernanfabrica.com" className={styles.link}>
							Get in touch!
						</Link>
					</div>
					<div className={styles.titleWrapper}>
						<Text className={styles.iam}>I am</Text>
						<Heading as="h1">Hernán</Heading>
					</div>
					<div className={styles.bottom}>
						<Heading as="h2" className={styles.centered}>
							Full Stack Engineer
						</Heading>
						<div className={styles.pills}>
							<Pill colorScheme={UIColors.WHITE}>NodeJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>VueJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>ReactJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>Ruby on Rails</Pill>
							<Pill colorScheme={UIColors.WHITE}>Java</Pill>
						</div>
						<div className={styles.links}>
							<Link href="https://github.com/hfjuarez" className={styles.link}>
								<Image
									width={13.6}
									height={13.6}
									src="/images/github-mark-white.svg"
									alt="Github Mark White"
								/>
								&nbsp;Github®
							</Link>
							<Link
								href="https://www.linkedin.com/in/hfjuarez/"
								className={styles.link}
							>
								<Image
									height={13.6}
									width={13.6}
									src="/images/linkedin-icon-white.svg"
									alt="Linkedin Icon White"
								/>
								&nbsp;Linkedin®
							</Link>
						</div>
					</div>
				</header>
			</div>
			<div className={styles.bgTextContainer}>
				<div className={styles.left}>
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
				<div className={styles.right}>
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
