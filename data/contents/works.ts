import Work from '@/data/models/work';
import { findAllByKeys } from '@/data/contents/skills';
// TODO: Generate static .json with skills and works
const works: Work[] = [
	{
		description: {
			paragraphs: [
				'As a Full Stack Engineer I was a key part of the development of this critical system from conception to execution. As the technical lead, I spearheaded the development of incredible new features.',
				'We designed and implemented a robust and secure platform for users to purchase virtual lands, enabling them to create immersive gaming experiences within the metaverse.',
				'The LAND Sale project was a groundbreaking initiative aimed at revolutionizing land sales within our gaming platform.',
			],
		},
		header: {
			companyAndDuration: 'The Sandbox Game, 2022-Present',
			position: 'Technical Lead',
			title: 'LAND Sale',
		},
		skills: {
			backend: findAllByKeys('node', 'sql', 'sequelize', 'adr'),
			frontend: findAllByKeys('vue', 'nuxt'),
			others: findAllByKeys(
				'problem-solving',
				'project-management',
				'project-leadership',
				'blockchain',
				'security',
			),
		},
	},
	{
		description: {
			paragraphs: [
				'The Private Healthcare Web App & Mobile App project was a comprehensive solution catering to the needs of healthcare provider and their patients.',
				'Beginning as a Full Stack Developer, I transitioned into the role of Technical Lead, overseeing the evolution and enhancement of the platform.',
				'We facilitated seamless interactions between healthcare professionals and patients. Noteworthy achievements include the successful integration of a new payment gateway (Plexo), migration to a new server infrastructure, and resolution of long-standing bugs.',
				'Additionally, I led the transition to a new provider following the acquisition of Cualit by The Sandbox Game, ensuring uninterrupted service for users.',
			],
		},
		header: {
			companyAndDuration: 'Cualit, 2021-2022',
			position: 'Technical Lead',
			title: 'Private Healthcare',
		},
		skills: {
			backend: findAllByKeys(
				'ror',
				'sql',
				'aws',
				'payment-gateway',
				'server-maintenance',
			),
			frontend: findAllByKeys('ionic', 'angular'),
			others: findAllByKeys('problem-solving', 'project-leadership'),
		},
	},
	{
		description: {
			paragraphs: [
				'The Simple & Supper project was a fundamental system designed for electronic billing, stock management, and customer relations.',
				'As part of a five-member development team, I contributed to the end-to-end development of the system.',
				'This system addressed critical business needs, streamlining billing processes, managing inventory efficiently, and enhancing customer relationships.',
			],
		},
		header: {
			companyAndDuration: 'Cualit, 2021-2022',
			position: 'Full Stack Developer',
			title: 'Simple & Supper',
		},
		skills: {
			backend: findAllByKeys('node', 'mongo', 'mongoose'),
			frontend: findAllByKeys('vue'),
			others: findAllByKeys('problem-solving'),
		},
	},
];

export default works;
