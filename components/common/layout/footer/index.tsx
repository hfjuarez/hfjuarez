import React from 'react';
// Components
import Legal from '@/components/common/legal';
import Container from '@/components/common/layout/container';
import Text from '@/components/common/layout/text';
// Styles
import footerStyle from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={footerStyle.footer}>
			<Container as="div">
				<Legal />
				<div className={footerStyle.content}>
					<Text>Copyright © 2023 Hernan Fabrica. All rights reserved.</Text>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
