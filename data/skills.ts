enum SkillType {
	BACKEND = 'backend',
	FRONTEND = 'frontend',
	OTHER = 'other',
}

export type Skill = {
	name: string;
	primary: boolean;
	type: SkillType;
};

const backendSkills: Skill[] = [
	{ name: 'NodeJS', primary: false, type: SkillType.BACKEND },
	{
		name: 'Ruby on Rails',
		primary: false,
		type: SkillType.BACKEND,
	},
	{ name: 'Java', primary: false, type: SkillType.BACKEND },
	{ name: 'MySQL', primary: false, type: SkillType.BACKEND },
	{ name: 'Mongo', primary: false, type: SkillType.BACKEND },
	{ name: 'API', primary: false, type: SkillType.BACKEND },
	{ name: 'Express', primary: false, type: SkillType.BACKEND },
	{
		name: 'Typescript',
		primary: false,
		type: SkillType.BACKEND,
	},
	{ name: 'Mongoose', primary: false, type: SkillType.BACKEND },
	{ name: 'REST', primary: false, type: SkillType.BACKEND },
	{ name: 'Sequelize', primary: false, type: SkillType.BACKEND },
];
const frontendSkills: Skill[] = [
	{ name: 'VueJS', primary: false, type: SkillType.FRONTEND },
	{ name: 'React', primary: false, type: SkillType.FRONTEND },
	{ name: 'Next', primary: false, type: SkillType.FRONTEND },
	{ name: 'Nuxt', primary: false, type: SkillType.FRONTEND },
	{
		name: 'React Native',
		primary: false,
		type: SkillType.FRONTEND,
	},
	{
		name: 'Javascript',
		primary: false,
		type: SkillType.FRONTEND,
	},
	{ name: 'Web App', primary: false, type: SkillType.FRONTEND },
];
const othersSkills: Skill[] = [
	{ name: 'Docker', primary: false, type: SkillType.BACKEND },
	{ name: 'Tests', primary: false, type: SkillType.BACKEND },

	{ name: 'Git', primary: false, type: SkillType.OTHER },
	{ name: 'E2E Tests', primary: false, type: SkillType.BACKEND },
	{
		name: 'Integration Tests',
		primary: false,
		type: SkillType.BACKEND,
	},
	{
		name: 'Unit Tests',
		primary: false,
		type: SkillType.BACKEND,
	},
	{
		name: 'Adaptability',
		primary: false,
		type: SkillType.OTHER,
	},
];
const skills: Skill[] = [...backendSkills, ...frontendSkills, ...othersSkills];

export default skills;
export { backendSkills, frontendSkills, othersSkills };
