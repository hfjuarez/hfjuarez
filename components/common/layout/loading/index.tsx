import React from 'react';
import Image from 'next/image';
// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Pill from '@/components/common/pill';
import Link from '@/components/common/layout/link';

// Utils
import { UIColors } from 'utils/ui';

// Styles
import loadingStyle from './loading.module.scss';

const Loading = () => {
	return (
		<div className={loadingStyle.background}>
			<div className={loadingStyle.wrapper}>
				<Container as="section" className={loadingStyle.centeredContainer}>
					<header className={loadingStyle.header}>
						<Heading as="h6">
							Looking for
							<br />
							your next developer?
						</Heading>
						<Heading as="h6" className={loadingStyle.centered}>
							Full Stack Developer
						</Heading>
						<Link
							href="mailto:hello@hernanfabrica.com"
							className={loadingStyle.link}
						>
							Get in touch!
						</Link>
					</header>
					<div className={loadingStyle.titleWrapper}>
						<Heading as="h1">
							<span>I&apos;m</span>
							<br />
							Hernán
						</Heading>
					</div>
					<div className={loadingStyle.footer}>
						<div className={loadingStyle.pills}>
							<Pill colorScheme={UIColors.WHITE}>NodeJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>VueJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>ReactJS</Pill>
							<Pill colorScheme={UIColors.WHITE}>Ruby on Rails</Pill>
							<Pill colorScheme={UIColors.WHITE}>Java</Pill>
						</div>
						<div className={loadingStyle.links}>
							<Link
								href="https://github.com/hfjuarez"
								className={loadingStyle.link}
							>
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
								className={loadingStyle.link}
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
