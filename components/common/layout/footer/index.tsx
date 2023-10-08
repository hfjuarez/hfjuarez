import React, { Component } from 'react';
import styles from './footer.module.css';
export default class index extends Component<object, object> {
	constructor(props: object) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<footer className={styles.footer}>
				<div className={styles.content}>
					<p className="playfair txt-300 txt-center m-0">
						Made by
						<span className="playfair txt-md txt-600">&nbsp;Hernán</span>
					</p>

					<ul className={styles.links}>
						<li>
							<a
								className="playfair op-8"
								href="https://www.linkedin.com/in/hfjuarez/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Linkedin
							</a>
						</li>
						<li>
							<a className="playfair op-8" href="mailto:herfj4@gmail.com">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</footer>
		);
	}
}
