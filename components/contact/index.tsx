import React from 'react';

import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import HeightWrapper from '@/components/common/layout/height';
import Link from '../common/layout/link';

import contactStyles from './contact.module.scss';
import headingStyle from '@/components/common/layout/heading/heading.module.scss';

const Contact = () => {
	return (
		<HeightWrapper as="section" id="contact">
			<Container as="div" className={contactStyles.container}>
				<Heading as="h2" className={contactStyles.title}>
					Let’s get to know each other.
				</Heading>
				<div className={contactStyles.contactInfoContainer}>
					<Heading as="h3" className={contactStyles.label}>
						Contact
					</Heading>
					<div className={contactStyles.linksContainer}>
						<Link
							className={headingStyle.h3}
							href="mailto:hello@hernanfabrica.com"
						>
							hello@hernanfabrica.com
						</Link>
					</div>
				</div>
				<hr />
				<div className={contactStyles.contactInfoContainer}>
					<Heading as="h3" className={contactStyles.label}>
						Social
					</Heading>
					<div className={contactStyles.linksContainer}>
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
