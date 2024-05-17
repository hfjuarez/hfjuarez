import SkillCategory from './SkillCategory';

class Skill {
	key: string;
	name: string;
	primary: boolean;
	categories: SkillCategory[];

	constructor(
		key: string,
		name: string,
		primary: boolean,
		categories: SkillCategory[],
	) {
		this.key = key;
		this.name = name;
		this.primary = primary;
		this.categories = categories;
	}
}

export default Skill;
