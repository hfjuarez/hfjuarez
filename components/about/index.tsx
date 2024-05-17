import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

import Container from '@/components/common/layout/container';
import HeightWrapper from '@/components/common/layout/height';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';

import {
	backendSkills,
	frontendSkills,
	othersSkills,
} from '@/data/contents/skills';
import me from '@/data/contents/me';

import styles from './about.module.scss';

const About = () => {
	const aboutRef = useRef(null);

	return (
		<HeightWrapper
			as="section"
			ref={aboutRef}
			id="about"
			className={styles.wrapper}
		>
			<Container as="div" className={styles.aboutMeContainer}>
				<Heading as="h2" className={styles.title}>
					About Me
				</Heading>
				<div className={styles.textContainer}>
					<Text>
						Hi there! I&apos;m Hernán Fabrica, a Full Stack Developer with over
						3 years of experiences working with most used programming languages,
						frameworks and tools a strong focus in Back End technologies. I
						graduated with a Technologist Degree in Computer Science in 2021.
					</Text>
					<Text>
						I&apos;m passionate about creating innovative solutions that provide
						unique experiences and deliver tangible results. I love to work on
						challenging projects that push me to grow and expand my skill set.
					</Text>
					<Text>
						My expertise lies in a proven track record of crafting clean and
						functional code, building modern websites, architecting robust
						systems, and consistently delivering projects that drive powerful
						impact and exceed clients&apos; expectations. As a collaborative
						team player, I thrive on sharing knowledge, continuously learning,
						and improving alongside my colleagues.
					</Text>
					<Text>
						Throughout my career, I excel at leading projects from first step to
						the last one, that mean ideation, building, testing, deploying,
						monitoring, and maintenance, regardless of their scale. Working
						side-by-side with cross-functional teams including designers,
						developers, QA, product managers, and stakeholders to carry out my
						work in the best way possible, successfully integrating new
						features, implementing rigorous testing, and monitoring to ensure
						optimal performance.
					</Text>
				</div>
				<Image
					src={me.personal.image}
					alt={me.personal.name}
					className={styles.image}
					width={590}
					height={590}
				/>
				<div className={styles.sslist}>
					<Heading as="h3">Soft Skills</Heading>
				</div>
				<div className={styles.tslist}>
					<Heading as="h3">Technical Skills</Heading>
					<div className={styles.columns}>
						<div>
							<Heading as="h4">Frontend</Heading>
							<ul>
								{frontendSkills
									.filter((skill) => skill.primary)
									.map((skill, index) => (
										<li key={index}>{skill.name}</li>
									))}
							</ul>
						</div>
						<div>
							<Heading as="h4">Backend</Heading>
							<ul>
								{backendSkills
									.filter((skill) => skill.primary)
									.map((skill, index) => (
										<li key={index}>{skill.name}</li>
									))}
							</ul>
						</div>
						<div>
							<Heading as="h4">Tools & more</Heading>
							<ul>
								{othersSkills
									.filter((skill) => skill.primary)
									.map((skill, index) => (
										<li key={index}>{skill.name}</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</HeightWrapper>
	);
};

export default About;
