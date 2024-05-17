import Skill from './Skill';

type Work = {
	header: {
		title: string;
		position: string;
		companyAndDuration: string;
		image?: {
			alt: string;
			height: number;
			url: string;
			width: number;
		};
	};
	description: {
		paragraphs: string[];
		link?: string;
		linkText?: string;
	};
	skills: {
		frontend: Skill[];
		backend: Skill[];
		others: Skill[];
	};
};

export default Work;
