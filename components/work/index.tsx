import React from 'react';
import classNames from 'classnames';

import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Button from '@/components/common/button';

import styles from './work.module.scss';

import WorkType from '@/data/models/Work';

type WorkProps = {
	work: WorkType;
};

const Work = ({ work }: WorkProps) => {
	const [activeTab, setActiveTab] = React.useState<string | null>(null);
	const carousel = classNames(styles.descriptionAndSkillsContainer, activeTab);
	const handleActiveTab = (tab: number) => {
		if (tab === 0) {
			setActiveTab(null);
		}
		if (tab === 1) {
			setActiveTab(styles.position2);
		}
	};

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
		<article className={styles.work}>
			<header>
				<Heading as="h3">{work?.header?.title}</Heading>
				<hr />
				<Heading as="h4">{work?.header?.position}</Heading>
				<Heading as="h5">{work?.header?.companyAndDuration}</Heading>
			</header>
			<div className={carousel}>
				<div className={styles.descriptionAndSkillsCarousel}>
					{description}
					{skills}
				</div>
				<div className={styles.carouselControls}>
					<Button onClick={() => handleActiveTab(0)}>Description</Button>
					<Button onClick={() => handleActiveTab(1)}>Skills</Button>
				</div>
			</div>
		</article>
	);
};

export default Work;
