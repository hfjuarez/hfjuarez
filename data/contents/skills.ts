import Skill from '@/data/models/skill';

const frontendSkills: Skill[] = [
	{ key: 'react', name: 'React', primary: true },
	{ key: 'next', name: 'Next.js', primary: true },
	{ key: 'vue', name: 'Vue.js', primary: true },
	{ key: 'nuxt', name: 'Nuxt.js', primary: false },
	{ key: 'html', name: 'HTML - Accessibility and Semantic', primary: true },
	{ key: 'js', name: 'JavaScript', primary: true },
	{ key: 'react-native', name: 'React Native', primary: true },
	{ key: 'strapi', name: 'Strapi', primary: false },
	{ key: 'webapp', name: 'Web App', primary: false },
	{ key: 'ionic', name: 'Ionic', primary: false },
	{ key: 'angular', name: 'Angular', primary: false },
].sort((a, b) => a.name.localeCompare(b.name));
const backendSkills: Skill[] = [
	{ key: 'node', name: 'NodeJS', primary: true },
	{
		key: 'ror',
		name: 'Ruby on Rails',
		primary: true,
	},
	{ key: 'java', name: 'Java', primary: true },
	{ key: 'sql', name: 'MySQL', primary: true },
	{ key: 'sequelize', name: 'Sequelize', primary: true },
	{ key: 'mongo', name: 'Mongo', primary: true },
	{ key: 'mongoose', name: 'Mongoose', primary: true },
	{ key: 'api', name: 'API', primary: false },
	{ key: 'express', name: 'Express', primary: true },
	{
		key: 'ts',
		name: 'Typescript',
		primary: false,
	},
	{ key: 'rest', name: 'REST', primary: false },
	{ key: 'adr', name: 'Architectural Decision', primary: true },
].sort((a, b) => a.name.localeCompare(b.name));
const othersSkills: Skill[] = [
	{ key: 'docker', name: 'Docker', primary: true },
	{ key: 'aws', name: 'AWS', primary: true },
	{
		key: 'payment-gateway',
		name: 'Payment Gateway Integration',
		primary: false,
	},
	{ key: 'server-maintenance', name: 'Server Maintenance', primary: false },
	{ key: 'tests', name: 'Tests', primary: true },
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
		key: 'blockchain',
		name: 'Blockchain',
		primary: false,
	},
	{
		key: 'adaptability',
		name: 'Adaptability',
		primary: true,
	},

	{
		key: 'detail-oriented',
		name: 'Detail-Oriented',
		primary: true,
	},
	{
		key: 'proactive',
		name: 'Proactive',
		primary: true,
	},
	{
		key: 'problem-solving',
		name: 'Problem Solving',
		primary: true,
	},
	{
		key: 'fast-learning',
		name: 'Fast Learning',
		primary: true,
	},
	{
		key: 'project-leadership',
		name: 'Project Leadership',
		primary: true,
	},
	{
		key: 'project-management',
		name: 'Project Management',
		primary: true,
	},
].sort((a, b) => a.name.localeCompare(b.name));

const skills: Skill[] = [...backendSkills, ...frontendSkills, ...othersSkills];
export default skills;

function findAllByKeys(...keys: string[]): Skill[] {
	return skills.filter((skill) => keys.includes(skill.key));
}

export { backendSkills, frontendSkills, othersSkills, findAllByKeys };
