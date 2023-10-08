import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Container from '@/components/common/layout/container';
import Pill from '@/components/common/pill';

import stackStyles from './stack.module.scss';

import { skillsPills } from 'data/skills';
import { UIColors } from 'utils/ui';

export default function Stack() {
	const staredContentElement = useRef(null);

	const skillsPillsList = skillsPills.map((skill, index) => (
		<Pill
			colorScheme={skill.colorScheme}
			key={`skill-pill-${skill.name.toLowerCase()}-${index}`}
		>
			{skill.name}
		</Pill>
	));

	useEffect(() => {
		const element: any = staredContentElement.current;

		// Temporarily add the final class to capture the final state
		element.classList.add(stackStyles.afterAnimation);
		const flipstate = Flip.getState([element]);
		// Remove the final class to revert to the initial state
		element.classList.remove(stackStyles.afterAnimation);

		// Create the Flip animation timeline
		Flip.to(flipstate, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: 'bottom center',
				scrub: true,
				start: 'top center',
				trigger: element,
			},
			simple: true,
			stagger: 0,
		});
	}, []);
	return (
		<div className={stackStyles.stackWrapper}>
			<Container as="section">
				<div className={stackStyles.stackTitleAndPills}>
					<Heading as="h1" className={stackStyles.stackTitle}>
						Skills
					</Heading>
					<div className={stackStyles.pillsWrapper}>
						<div className={stackStyles.pills}>{skillsPillsList}</div>
					</div>
				</div>
				<div className={stackStyles.staredWrapper}>
					<div className={stackStyles.staredContent} ref={staredContentElement}>
						<div className={`card ${stackStyles.stackItem}`}>
							<Heading as="h3" colorScheme={UIColors.WHITE}>
								React Native
							</Heading>
							<Heading as="h5" colorScheme={UIColors.WHITE}>
								2021
							</Heading>
							<Text as="p" colorScheme={UIColors.WHITE}>
								Developed a mobile application for a luxury real state.
							</Text>
						</div>
						<div className={`card ${stackStyles.stackItem}`}>
							<Heading as="h3" colorScheme={UIColors.WHITE}>
								Next
							</Heading>
							<Heading as="h5" colorScheme={UIColors.WHITE}>
								2021
							</Heading>
							<Text as="p" colorScheme={UIColors.WHITE}>
								Web App for fine interior decoration company based in Barcelona
							</Text>
						</div>
						<div className={`card ${stackStyles.stackItem}`}>
							<Heading as="h3" colorScheme={UIColors.WHITE}>
								Ruby on Rails
							</Heading>
							<Heading as="h5" colorScheme={UIColors.WHITE}>
								2021
							</Heading>
							<Text as="p" colorScheme={UIColors.WHITE}>
								Web App and Mobiles app for private healthcare provider of
								Uruguay.
							</Text>
						</div>
						<div className={`card ${stackStyles.stackItem}`}>
							<Heading as="h3" colorScheme={UIColors.WHITE}>
								VueJS / NodeJS / Mongo / Mongoose
							</Heading>
							<Heading as="h5" colorScheme={UIColors.WHITE}>
								2021
							</Heading>
							<Text as="p" colorScheme={UIColors.WHITE}>
								Billing System w/ Inventory System with a specific version for
								restaurants that included Table Management System
							</Text>
						</div>
						<div className={`card ${stackStyles.stackItem}`}>
							<Heading as="h3" colorScheme={UIColors.WHITE}>
								VueJS / NodeJS / SQL / Sequelize
							</Heading>
							<Heading as="h5" colorScheme={UIColors.WHITE}>
								2022
							</Heading>
							<Text as="p" colorScheme={UIColors.WHITE}>
								New LAND Sale system for The Sandbox
							</Text>
						</div>
						<div className={`card ${stackStyles.stackItem}`}>
							<Heading as="h3" colorScheme={UIColors.WHITE}>
								VueJS / NodeJS / SQL / Sequelize
							</Heading>
							<Heading as="h5" colorScheme={UIColors.WHITE}>
								2022
							</Heading>
							<Text as="p" colorScheme={UIColors.WHITE}>
								Ownership of new LAND Sale system for The Sandbox, doing all
								planifications ADR, Diagrams, design .
							</Text>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
