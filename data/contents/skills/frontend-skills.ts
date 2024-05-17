import Skill from '@/data/models/Skill';
import SkillCategory from '@/data/models/SkillCategory';

const frontendSkills: Skill[] = [
	{
		categories: [SkillCategory.FRONTEND, SkillCategory.LIBRARIES],
		key: 'react',
		name: 'React',
		primary: true,
	},
	{
		categories: ['frontend', 'frameworks'] as SkillCategory[],
		key: 'next',
		name: 'Next.js',
		primary: true,
	},
	{
		categories: ['frontend', 'libraries'] as SkillCategory[],
		key: 'vue',
		name: 'Vue.js',
		primary: true,
	},
	{
		categories: ['frontend', 'frameworks'] as SkillCategory[],
		key: 'nuxt',
		name: 'Nuxt.js',
		primary: true,
	},
	{
		categories: ['frontend'] as SkillCategory[],
		key: 'html',
		name: 'HTML - Accessibility and Semantic',
		primary: true,
	},
	{
		categories: ['frontend', 'frameworks'] as SkillCategory[],
		key: 'react-native',
		name: 'React Native',
		primary: true,
	},
	{
		categories: ['frontend', 'tools'] as SkillCategory[],
		key: 'strapi',
		name: 'Strapi',
		primary: false,
	},
].sort((a, b) => a.name.localeCompare(b.name));

export default frontendSkills;
