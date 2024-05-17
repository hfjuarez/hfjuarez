import Skill from '@/data/models/Skill';
import SkillCategories from '@/data/models/SkillCategory';

const othersSkills: Skill[] = [
	{
		categories: [SkillCategories.DEVOPS],
		key: 'docker',
		name: 'Docker',
		primary: true,
	},
	{
		categories: [SkillCategories.CLOUD],
		key: 'aws',
		name: 'AWS',
		primary: true,
	},
	{
		categories: [SkillCategories.DEVOPS, SkillCategories.CLOUD],
		key: 'server-maintenance',
		name: 'Server Maintenance',
		primary: false,
	},
	{
		categories: [SkillCategories.TESTING],
		key: 'tests',
		name: 'Tests',
		primary: true,
	},
	{
		categories: [SkillCategories.TOOLS],
		key: 'git',
		name: 'Git',
		primary: false,
	},
	{
		categories: [SkillCategories.TESTING],
		key: 'e2e',
		name: 'E2E Tests',
		primary: false,
	},
	{
		categories: [SkillCategories.TESTING],
		key: 'integration-tests',
		name: 'Integration Tests',
		primary: false,
	},
	{
		categories: [SkillCategories.TESTING],
		key: 'unit-tests',
		name: 'Unit Tests',
		primary: false,
	},
].sort((a, b) => a.name.localeCompare(b.name));

export default othersSkills;
