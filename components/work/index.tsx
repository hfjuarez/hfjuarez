import React, { Component } from 'react';
import styles from './work.module.scss';

export default class Work extends Component {
	render() {
		return (
			<section className="bg-primary-section">
				<div className="container">
					<div className={`${styles.portfolio}`}>
						<div className={`card-container ${styles['card-work']}`}>
							<>
								<div className={`${styles['card-work-intro']} mt-2 mb-2`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="21"
										viewBox="0 0 24 29"
										fill="none"
									>
										<path
											d="M20 15C18.5 10.5 17.5228 11 12 11C6.47715 11 5.5 10.5 4 15"
											stroke="black"
											strokeWidth="2"
										/>
										<path
											d="M5.25191 15H18.7481C20.4769 15 21.848 16.4574 21.7425 18.183L21.3147 25.183C21.218 26.7658 19.9061 28 18.3203 28H5.67968C4.09389 28 2.782 26.7658 2.68527 25.183L2.25749 18.183C2.15204 16.4574 3.52308 15 5.25191 15Z"
											stroke="black"
											strokeWidth="2"
										/>
										<circle
											cx="12"
											cy="6"
											r="5"
											stroke="black"
											strokeWidth="2"
										/>
									</svg>

									<p className=" txt-center m-0">Actual</p>
								</div>
								<h4>The Sandbox</h4>
								<p className="mt-5 txt-300">
									The Sandbox is a user-generated, virtual-gaming world where
									players can build, own and monetize their gaming experience.
								</p>
								<h6 className="mt-2 txt-md">What have I done?</h6>
								<hr />
								<p className=" txt-300">
									Development and implementation of new LAND Sale system that
									impact directly in revenue of the company, creating more
									equity to be part of the metaverse and generate more value!
								</p>
							</>
						</div>
						<div
							className={`card-container ${styles['card-work']} ${styles['cualit']}`}
						>
							<>
								<div className={`${styles['card-work-intro']} mt-2 mb-2`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="21"
										viewBox="0 0 24 29"
										fill="none"
									>
										<path
											d="M20 15C18.5 10.5 17.5228 11 12 11C6.47715 11 5.5 10.5 4 15"
											stroke="white"
											strokeWidth="2"
										/>
										<path
											d="M5.25191 15H18.7481C20.4769 15 21.848 16.4574 21.7425 18.183L21.3147 25.183C21.218 26.7658 19.9061 28 18.3203 28H5.67968C4.09389 28 2.782 26.7658 2.68527 25.183L2.25749 18.183C2.15204 16.4574 3.52308 15 5.25191 15Z"
											stroke="white"
											strokeWidth="2"
										/>
										<circle
											cx="12"
											cy="6"
											r="5"
											stroke="white"
											strokeWidth="2"
										/>
									</svg>
									<p className="txt-center m-0">Past job</p>
								</div>
								<h4>Cualit</h4>
								<p className="mt-5 txt-300">
									Analysis and design, development, and maintenance of websites,
									servers, and mobile applications for several clients.
								</p>
							</>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
