import React from 'react';

import Legal from '@/components/common/legal';
import Container from '@/components/common/layout/container';
import Text from '@/components/common/layout/text';

import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer} id="contact">
			<Container as="div">
				<div className={styles.content}>
					<Text>Copyright © 2023 Hernan Fabrica. All rights reserved.</Text>
				</div>
				<Legal />
			</Container>
		</footer>
	);
};

export default Footer;
