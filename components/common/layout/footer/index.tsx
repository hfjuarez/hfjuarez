import React from 'react';

import Legal from '@/components/common/legal';
import Container from '@/components/common/layout/container';
import Text from '@/components/common/layout/text';
import Heading from '@/components/common/layout/heading';

import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer} id="footer">
			<Container as="div" className={styles.container}>
				<div className={styles.content}>
					<Heading as="h2">
						Designed & Developed by <br />
						<span>
							Hernán
							<br />
							Fabrica
						</span>
					</Heading>
					<Heading as="h3">Made with:</Heading>
					<Text className={styles.dependencies}>
						NextJS 13 - React 18 - TypeScript - SASS
					</Text>
					<Heading as="h3">External dependencies:</Heading>
					<Text className={styles.dependencies}>GSAP - Classnames</Text>
					<Text className={styles.copyright}>
						Copyright © 2022 - 2024 Hernán Fabrica. All rights reserved.
					</Text>
				</div>
				<Legal />
			</Container>
		</footer>
	);
};

export default Footer;
