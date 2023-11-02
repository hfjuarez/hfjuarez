import { UIColors } from 'utils/ui';

enum SkillType {
	BACKEND = 'backend',
	FRONTEND = 'frontend',
	OTHER = 'other',
}

export type Skill = {
	colorScheme: UIColors;
	name: string;
	type: SkillType;
};

const backendSkills: Skill[] = [
	{ colorScheme: UIColors.PRIMARY, name: 'NodeJS', type: SkillType.BACKEND },
	{
		colorScheme: UIColors.PRIMARY,
		name: 'Ruby on Rails',
		type: SkillType.BACKEND,
	},
	{ colorScheme: UIColors.PRIMARY, name: 'Java', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'MySQL', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'Mongo', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'API', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'Express', type: SkillType.BACKEND },
	{
		colorScheme: UIColors.PRIMARY,
		name: 'Typescript',
		type: SkillType.BACKEND,
	},
	{ colorScheme: UIColors.PRIMARY, name: 'Mongoose', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'REST', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'Sequelize', type: SkillType.BACKEND },
];
const frontendSkills: Skill[] = [
	{ colorScheme: UIColors.PRIMARY, name: 'VueJS', type: SkillType.FRONTEND },
	{ colorScheme: UIColors.PRIMARY, name: 'React', type: SkillType.FRONTEND },
	{ colorScheme: UIColors.PRIMARY, name: 'Next', type: SkillType.FRONTEND },
	{ colorScheme: UIColors.PRIMARY, name: 'Nuxt', type: SkillType.FRONTEND },
	{
		colorScheme: UIColors.PRIMARY,
		name: 'React Native',
		type: SkillType.FRONTEND,
	},
	{
		colorScheme: UIColors.PRIMARY,
		name: 'Javascript',
		type: SkillType.FRONTEND,
	},
	{ colorScheme: UIColors.PRIMARY, name: 'Web App', type: SkillType.FRONTEND },
];
const othersSkills: Skill[] = [
	{ colorScheme: UIColors.PRIMARY, name: 'Docker', type: SkillType.BACKEND },
	{ colorScheme: UIColors.PRIMARY, name: 'Tests', type: SkillType.BACKEND },

	{ colorScheme: UIColors.PRIMARY, name: 'Git', type: SkillType.OTHER },
	{ colorScheme: UIColors.PRIMARY, name: 'E2E Tests', type: SkillType.BACKEND },
	{
		colorScheme: UIColors.PRIMARY,
		name: 'Integration Tests',
		type: SkillType.BACKEND,
	},
	{
		colorScheme: UIColors.PRIMARY,
		name: 'Unit Tests',
		type: SkillType.BACKEND,
	},
	{
		colorScheme: UIColors.PRIMARY,
		name: 'Adaptability',
		type: SkillType.OTHER,
	},
];
const skills: Skill[] = [...backendSkills, ...frontendSkills, ...othersSkills];

export default skills;
export { backendSkills, frontendSkills, othersSkills };
