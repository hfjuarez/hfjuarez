import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
import Link from '@/components/common/layout/link';

// Styles
import aboutStyle from './about.module.scss';
import colorsStyles from '@/styles/colors.module.scss';
// Utils
import { UIColors } from 'utils/ui';

const About = () => {
	const introductionElement = useRef<HTMLInputElement>(null);
	const headingRef = useRef<HTMLInputElement>(null);
	const [removeBottomBorderRadius, setRemoveBottomBorderRadius] =
		useState(false);
	const introductionClasses = classNames(
		aboutStyle.background,
		removeBottomBorderRadius && aboutStyle.removeBottomBorderRadius,
	);
	useEffect(() => {
		const handleScroll = () => {
			const scrollPositionInVh = (window.scrollY / window.innerHeight) * 100;
			// Check if the scroll position is greater than or equal to 150vh
			if (scrollPositionInVh >= 100) {
				setRemoveBottomBorderRadius(true);
			} else {
				setRemoveBottomBorderRadius(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		const element1 = introductionElement.current;
		const element2 = headingRef.current;
		if (!element1 || !element2) return;
		// Temporarily add the final class to capture the final state
		element1.classList.add(aboutStyle.afterAnimation);
		const flipstate1 = Flip.getState([element1]);
		// Remove the final class to revert to the initial state
		element1.classList.remove(aboutStyle.afterAnimation);

		// Create the Flip animation timeline
		Flip.to(flipstate1, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			scale: true,
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element1,
			},
			simple: true,
			stagger: 0,
		});
		gsap.to(element2, {
			marginTop: '12rem',
			maxWidth: '75rem',
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element1,
			},
		});
		gsap.to(element2.children[0], {
			fontSize: '6.5rem',
			lineHeight: '6.5rem',
			scrollTrigger: {
				end: 'center center',
				scrub: true,
				start: 'top center',
				trigger: element1,
			},
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<Container
				as="section"
				key="introduction--recap"
				className={aboutStyle.introductionSection}
			>
				<div ref={headingRef} className={aboutStyle.heading}>
					<Heading as={'h1'}>
						Committed,
						<br />
						Innovative,
						<br />
						& Results-Driven
						<br />
						<span className={colorsStyles[UIColors.SECONDARY]}>developer.</span>
					</Heading>
				</div>
				<div className={introductionClasses} ref={introductionElement} />
			</Container>
			<div className={aboutStyle.aboutMe} id="about">
				<Container as="section">
					<Heading as={'h2'} colorScheme={UIColors.WHITE}>
						About me
					</Heading>
					<Text>
						On my journey as a Full Stack developer, my focus has always been on
						pushing the boundaries of what&apos;s possible. I am driven by a
						deep passion for Back-end development, and my ambition is clear: I
						want to continue creating innovative solutions that drive success
						and make a significant impact on projects. I offer a proven track
						record in spearheading high-impact endeavors, such as the creation
						and leadership of the all-new LAND Sale system for The Sandbox Game,
						and I led a significant private healthcare provider project. With
						proficiency in a wide array of technologies, including JavaScript,
						Node, Java, Vue, React, and more, I am ready to take on the
						challenges of complex technical projects.
					</Text>
					<Text>
						What sets me apart is not just my technical expertise but also my
						commitment to results and my ability to lead and collaborate
						effectively. I have demonstrated my capabilities by owning and
						leading projects, making critical technical decisions, and
						collaborating with cross-functional teams to deliver successful
						integrations and new features. My dedication to improving
						accessibility, performance, and the stability of web applications,
						along with my experience in developing robust APIs, highlights my
						well-rounded skill set.
					</Text>
					<Text>
						I am also a strong believer in the power of teamwork. I love working
						with visionary teams and organizations that share my passion for
						innovation and are open to teaching and learning from each other.
					</Text>
					<Text>
						If you are looking for a Full Stack developer who is
						detail-oriented, proactive, a fast learner, and passionate about
						delivering innovative solutions, I&apos;m always ready to bring my
						skills and experience to the table and help you achieve your goals.
					</Text>
					<Link href="/experience" type={UIColors.WHITE} outlined>
						Let&apos;s build the future together!
					</Link>
				</Container>
			</div>
		</>
	);
};

export default About;
