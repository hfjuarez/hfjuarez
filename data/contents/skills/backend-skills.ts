import Skill from '@/data/models/Skill';
import SkillCategory from '@/data/models/SkillCategory';

const backendSkills: Skill[] = [
	{
		categories: [SkillCategory.BACKEND, SkillCategory.LANGUAGES],
		key: 'node',
		name: 'NodeJS',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.FRAMEWORKS],
		key: 'ror',
		name: 'Ruby on Rails',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.LANGUAGES],
		key: 'java',
		name: 'Java',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.DATABASES],
		key: 'sql',
		name: 'MySQL',
		primary: true,
	},
	{
		categories: [
			SkillCategory.BACKEND,
			SkillCategory.DATABASES,
			SkillCategory.TOOLS,
		],
		key: 'sequelize',
		name: 'Sequelize',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.DATABASES],
		key: 'mongo',
		name: 'Mongo',
		primary: true,
	},
	{
		categories: [
			SkillCategory.BACKEND,
			SkillCategory.DATABASES,
			SkillCategory.TOOLS,
		],
		key: 'mongoose',
		name: 'Mongoose',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.FRAMEWORKS],
		key: 'express',
		name: 'Express.js',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.FRAMEWORKS],
		key: 'nest',
		name: 'Nest.js',
		primary: true,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.SOFTWARE_ARCHITECTURE],
		key: 'rest',
		name: 'REST',
		primary: false,
	},
	{
		categories: [SkillCategory.BACKEND, SkillCategory.SOFTWARE_ARCHITECTURE],
		key: 'adr',
		name: 'Architectural Decision',
		primary: true,
	},
].sort((a, b) => a.name.localeCompare(b.name));

export default backendSkills;
