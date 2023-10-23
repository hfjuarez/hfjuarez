import React, { Component } from 'react';
// Components
import Legal from '@/components/common/legal';
import Container from '@/components/common/layout/container';
import Text from '@/components/common/layout/text';
// Styles
import styles from './footer.module.scss';

export default class index extends Component<object, object> {
	constructor(props: object) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<footer className={styles.footer}>
				<Container as="div">
					<Legal />
					<div className={styles.content}>
						<Text>Copyright © 2023 Hernan Fabrica. All rights reserved.</Text>
					</div>
				</Container>
			</footer>
		);
	}
}
