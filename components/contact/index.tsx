import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Link from '../common/layout/link';

import styles from './contact.module.scss';
import headingStyle from '@/components/common/layout/heading/heading.module.scss';

const Contact = () => {
	return (
		<HeightWrapper as="section" id="contact" className={styles.heightWrapper}>
			<Container as="div" className={styles.container}>
				<Heading as="h2" className={styles.title}>
					Let’s work together
				</Heading>
				<div className={styles.contactInfoContainer}>
					<Heading as="h3" className={styles.label}>
						Contact
					</Heading>
					<div className={styles.linksContainer}>
						<Link
							className={headingStyle.h3}
							href="mailto:hello@hernanfabrica.com"
						>
							hello@hernanfabrica.com
						</Link>
					</div>
				</div>
				<hr />
				<div className={styles.contactInfoContainer}>
					<Heading as="h3" className={styles.label}>
						Social
					</Heading>
					<div className={styles.linksContainer}>
						<Link
							className={headingStyle.h3}
							href="https://www.linkedin.com/in/hfjuarez/"
						>
							LinkedIn
						</Link>
						<Link
							className={headingStyle.h3}
							href="https://github.com/hfjuarez"
						>
							GitHub
						</Link>
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default Contact;
