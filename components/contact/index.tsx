import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Link from '../common/layout/link';

import styles from './contact.module.scss';
import headingStyle from '@/components/common/layout/heading/heading.module.scss';

import me from '@/data/contents/me';

const Contact = () => {
	const contact = me.contact;
	return (
		<HeightWrapper as="section" id="contact" className={styles.heightWrapper}>
			<Container as="div" className={styles.container}>
				<Heading as="h2" className={styles.title}>
					Let’s work <span>together</span>
				</Heading>
				<div className={styles.contactInfoContainer}>
					<Heading as="h3" className={styles.label}>
						Contact
					</Heading>
					<div className={styles.linksContainer}>
						<Link className={headingStyle.h3} href={`mailto:${contact.email}`}>
							{contact.email}
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
							href={contact.linkedin}
							rel="noopener noreferrer"
							target="_blank"
						>
							LinkedIn
						</Link>
						<Link
							className={headingStyle.h3}
							href={contact.github}
							rel="noopener noreferrer"
							target="_blank"
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
