import React from 'react';

// import Navbar from '@/components/common/navbar';
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import styles from '@/styles/pages/headings-and-text-check.module.scss';
import Text from '@/components/common/layout/text';

export default function HeadingsAndTextCheck() {
	const renderText = () => (
		<>
			<Heading as="h1">Heading 1</Heading>
			<Heading as="h2">Heading 2</Heading>
			<Heading as="h3">Heading 3</Heading>
			<Heading as="h4">Heading 4</Heading>
			<Heading as="h5">Heading 5</Heading>
			<Heading as="h6">Heading 6</Heading>
			<hr />
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
			<Text>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed
				culpa quam ut nisi asperiores doloremque impedit id, animi blanditiis
				vitae tempore delectus ratione dolorem odit assumenda eaque dolore
				nulla.
			</Text>
		</>
	);
	return (
		<>
			<Container as="main">
				{/* <div className={styles.columns}>
					<div className={styles.dark1}>{renderText()}</div>
					<div className={styles.light1}>{renderText()}</div>
				</div>
				<div className={styles.columns}>
					<div className={styles.dark2}>{renderText()}</div>
					<div className={styles.light2}>{renderText()}</div>
				</div>
				<div className={styles.columns}>
					<div className={styles.colorDark1}>{renderText()}</div>
					<div className={styles.colorLight1}>{renderText()}</div>
				</div>
				<div className={styles.columns}>
					<div className={styles.colorDark2}>{renderText()}</div>
					<div className={styles.colorLight2}>{renderText()}</div>
				</div> */}
				<div className={styles.invertedFonts}>
					<div className={styles.columns}>
						<div className={styles.dark1}>{renderText()}</div>
						<div className={styles.light1}>{renderText()}</div>
					</div>
					<div className={styles.columns}>
						<div className={styles.dark2}>{renderText()}</div>
						<div className={styles.light2}>{renderText()}</div>
					</div>
					<div className={styles.columns}>
						<div className={styles.colorDark1}>{renderText()}</div>
						<div className={styles.colorLight1}>{renderText()}</div>
					</div>
					<div className={styles.columns}>
						<div className={styles.colorDark2}>{renderText()}</div>
						<div className={styles.colorLight2}>{renderText()}</div>
					</div>
					<div className={styles.columns}>
						<div className={styles.dark1Color}>{renderText()}</div>
						<div className={styles.light1Color}>{renderText()}</div>
					</div>
				</div>
			</Container>
		</>
	);
}
