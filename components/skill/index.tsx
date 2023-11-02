import React, { ReactNode } from 'react';

// Components
import Heading from '@/components/common/layout/heading';
import Container from '@/components/common/layout/container';
import Pill from '@/components/common/pill';

import skillStyles from './skill.module.scss';

import {
	backendSkills,
	frontendSkills,
	othersSkills,
	Skill,
} from 'data/skills';

export default function Stack() {
	const pillConstructor = (skill: Skill, index: number): ReactNode => (
		<Pill
			colorScheme={skill.colorScheme}
			key={`skill-pill-${skill.name.toLowerCase()}--${index}`}
		>
			{skill.name}
		</Pill>
	);
	const backendList: ReactNode[] = backendSkills.map(pillConstructor);
	const frontendList: ReactNode[] = frontendSkills.map(pillConstructor);
	const othersList: ReactNode[] = othersSkills.map(pillConstructor);

	return (
		<div className={skillStyles.heightWrapper}>
			<Container as="section">
				<div className={skillStyles.stackTitleAndPills}>
					<Heading as="h1" className={skillStyles.stackTitle}>
						Skills
					</Heading>
					<div className={skillStyles.pillsContainer}>
						<div className={skillStyles.column}>{backendList}</div>
						<div className={skillStyles.column}>{frontendList}</div>
						<div className={skillStyles.column}>{othersList}</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
