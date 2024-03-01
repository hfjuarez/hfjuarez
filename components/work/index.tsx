import React from 'react';
import Image from 'next/image';

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';

import styles from './work.module.scss';

import WorkType from '@/data/models/work';
import classNames from 'classnames';

type WorkProps = {
	work: WorkType;
};

const Work = ({ work }: WorkProps) => {
	const workClasses = classNames(
		styles.work,
		work?.header?.image && styles.hasImage,
	);

	const description = work?.description?.paragraphs?.length && (
		<section className={styles.description}>
			<Heading as="h4" className={styles.visuallyHidden}>
				Description
			</Heading>
			{work?.description?.paragraphs.map((text, index) => (
				<Text key={`work-${work.header.title.replaceAll(' ', '-')}-p-${index}`}>
					{text}
				</Text>
			))}
		</section>
	);
	const skills = (work?.skills?.frontend?.length ||
		work?.skills?.backend?.length ||
		work?.skills?.others?.length) && (
		<section className={styles.skills}>
			<Heading as="h4" className={styles.visuallyHidden}>
				Skills
			</Heading>
			{!!work?.skills?.frontend?.length && (
				<>
					<Heading as="h5">Frontend</Heading>
					<ul className={styles.pills}>
						{work?.skills?.frontend.map((skill) => (
							<li className={styles.red} key={skill.key}>
								{skill.name}
							</li>
						))}
					</ul>
				</>
			)}
			{!!work?.skills?.backend?.length && (
				<>
					<Heading as="h5">Backend</Heading>
					<ul className={styles.pills}>
						{work?.skills?.backend.map((skill) => (
							<li className={styles.yellow} key={skill.key}>
								{skill.name}
							</li>
						))}
					</ul>
				</>
			)}
			{!!work?.skills?.others?.length && (
				<>
					<Heading as="h5">Other</Heading>
					<ul className={styles.pills}>
						{work?.skills?.others.map((skill) => (
							<li className={styles.green} key={skill.key}>
								{skill.name}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
	return (
		<article className={workClasses}>
			<header>
				<div className={styles.titleContainer}>
					<Heading as="h3">{work?.header?.title}</Heading>
					<div className={styles.subtitleContainer}>
						<Heading as="h4">{work?.header?.position}</Heading>
						<Heading as="h5">{work?.header?.companyAndDuration}</Heading>
					</div>
				</div>
				<hr />
			</header>
			{work?.header?.image && (
				<Image
					className={styles.image}
					width={work.header.image.width}
					height={work.header.image.height}
					src={work.header.image.url}
					alt={work.header.image.alt}
				/>
			)}
			{description}
			{skills}
		</article>
	);
};

export default Work;
