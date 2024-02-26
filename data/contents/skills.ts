import Skill from '@/data/models/skill';

const frontendSkills: Skill[] = [
	{ key: 'react', name: 'React', primary: false },
	{ key: 'next', name: 'Next', primary: false },
	{ key: 'vue', name: 'Vue.js', primary: false },
	{ key: 'nuxt', name: 'Nuxt.js', primary: false },
	{ key: 'react-native', name: 'React Native', primary: false },
	{ key: 'js', name: 'Javascript', primary: false },
	{ key: 'strapi', name: 'Strapi', primary: false },
	{ key: 'webapp', name: 'Web App', primary: false },
	{ key: 'ionic', name: 'Ionic', primary: false },
	{ key: 'angular', name: 'Angular', primary: false },
];
const backendSkills: Skill[] = [
	{ key: 'node', name: 'NodeJS', primary: false },
	{
		key: 'ror',
		name: 'Ruby on Rails',
		primary: false,
	},
	{ key: 'java', name: 'Java', primary: false },
	{ key: 'sql', name: 'MySQL', primary: false },
	{ key: 'sequelize', name: 'Sequelize', primary: false },
	{ key: 'mongo', name: 'Mongo', primary: false },
	{ key: 'mongoose', name: 'Mongoose', primary: false },
	{ key: 'api', name: 'API', primary: false },
	{ key: 'express', name: 'Express', primary: false },
	{
		key: 'ts',
		name: 'Typescript',
		primary: false,
	},
	{ key: 'rest', name: 'REST', primary: false },
	{ key: 'adr', name: 'Architectural Decision', primary: false },
];
const othersSkills: Skill[] = [
	{ key: 'docker', name: 'Docker', primary: false },
	{ key: 'aws', name: 'AWS', primary: false },
	{
		key: 'payment-gateway',
		name: 'Payment Gateway Integration',
		primary: false,
	},
	{ key: 'server-maintenance', name: 'Server Maintenance', primary: false },
	{ key: 'tests', name: 'Tests', primary: false },
	{ key: 'git', name: 'Git', primary: false },
	{ key: 'e2e', name: 'E2E Tests', primary: false },
	{
		key: 'integration-tests',
		name: 'Integration Tests',
		primary: false,
	},
	{
		key: 'unit-tests',
		name: 'Unit Tests',
		primary: false,
	},
	{
		key: 'security',
		name: 'Security',
		primary: false,
	},
	{
		key: 'problem-solving',
		name: 'Problem Solving',
		primary: false,
	},
	{
		key: 'project-leadership',
		name: 'Project Leadership',
		primary: false,
	},
	{
		key: 'project-management',
		name: 'Project Management',
		primary: false,
	},
	{
		key: 'blockchain',
		name: 'Blockchain',
		primary: false,
	},
	{
		key: 'adaptability',
		name: 'Adaptability',
		primary: false,
	},
];

const skills: Skill[] = [...backendSkills, ...frontendSkills, ...othersSkills];
export default skills;

function findAllByKeys(...keys: string[]): Skill[] {
	return skills.filter((skill) => keys.includes(skill.key));
}

export { backendSkills, frontendSkills, othersSkills, findAllByKeys };
