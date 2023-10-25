import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

// Components
import Container from '@/components/common/layout/container';
// import Heading from '@/components/common/layout/heading';
import Text from '@/components/common/layout/text';
// import Link from '@/components/common/layout/link';

// Styles
import aboutStyle from './about.module.scss';
// import colorsStyles from '@/styles/colors.module.scss';
// Utils
// import { UIColors } from 'utils/ui';

const About = () => {
	const committedTextRef = useRef<HTMLInputElement>(null);
	const innovativeTextRef = useRef<HTMLInputElement>(null);
	const resultsDrivenTextRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const committedElement = committedTextRef.current;
		const innovativeElement = innovativeTextRef.current;
		const resultsDrivenElement = resultsDrivenTextRef.current;
		if (!committedElement || !innovativeElement || !resultsDrivenElement)
			return;

		committedElement.classList.add(aboutStyle.afterAnimation);
		const flipstate1 = Flip.getState([committedElement]);
		committedElement.classList.remove(aboutStyle.afterAnimation);
		Flip.to(flipstate1, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
			scale: true,
			scrollTrigger: {
				end: `+=${innerHeight + 300}`,
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: committedElement,
			},
			simple: true,
			stagger: 0,
		});

		innovativeElement.classList.add(aboutStyle.afterAnimation);
		const flipstate2 = Flip.getState([innovativeElement]);
		innovativeElement.classList.remove(aboutStyle.afterAnimation);
		Flip.to(flipstate2, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
			scale: true,
			scrollTrigger: {
				end: `+=${innerHeight + 300}`,
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: innovativeElement,
			},
			simple: true,
			stagger: 0,
		});

		resultsDrivenElement.classList.add(aboutStyle.afterAnimation);
		const flipstate3 = Flip.getState([resultsDrivenElement]);
		resultsDrivenElement.classList.remove(aboutStyle.afterAnimation);
		Flip.to(flipstate3, {
			absolute: false,
			absoluteOnLeave: false,
			ease: 'none',
			markers: true,
			scale: true,
			scrollTrigger: {
				end: `+=${innerHeight * 1.5}`,
				scrub: true,
				start: `-=${innerHeight}`,
				trigger: resultsDrivenElement,
			},
			simple: true,
			stagger: 0,
		});
	}, []);
	return (
		<>
			<div className={aboutStyle.background} id="about">
				<Container as="div" className={aboutStyle.centeredWrapper}>
					<div className={aboutStyle.introduction}>
						<div className={aboutStyle.committed} ref={committedTextRef}>
							<Text>Committed</Text>
							<Text>Committed</Text>
							<Text>Committed</Text>
						</div>
						<div className={aboutStyle.innovative} ref={innovativeTextRef}>
							<Text>Innovative</Text>
							<Text>Innovative</Text>
							<Text>Innovative</Text>
						</div>
						<div
							className={aboutStyle.resultsDriven}
							ref={resultsDrivenTextRef}
						>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
							<Text>Results-Driven</Text>
						</div>
					</div>
					{/* <Heading as={'h1'} colorScheme={UIColors.PRIMARY}>
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
					<Link href="/experience" type={UIColors.PRIMARY} outlined>
						Let&apos;s build the future together!
					</Link> */}
				</Container>
			</div>
		</>
	);
};

export default About;
