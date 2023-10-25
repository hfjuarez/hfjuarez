import React from 'react';
import Image from 'next/image';
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
					<div className={styles.top}>
						<Heading as="h6">
							Looking for
							<br />
							your next developer?
						</Heading>
						<Heading as="h6" className={styles.centered}>
							Full Stack Developer
						</Heading>
						<Link href="mailto:hello@hernanfabrica.com" className={styles.link}>
							Get in touch!
						</Link>
					</div>
					<div className={styles.titleWrapper}>
						<Heading as="h1">
							<span>I am</span>
							<br />
							Hernán
						</Heading>
					</div>
					<div className={styles.bottom}>
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
