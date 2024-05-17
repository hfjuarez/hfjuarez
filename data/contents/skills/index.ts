import Skill from '@/data/models/Skill';
import frontendSkills from './frontend-skills';
import backendSkills from './backend-skills';
import othersSkills from './others-skills';

const skills: Skill[] = [...backendSkills, ...frontendSkills, ...othersSkills];

function findAllByKeys(...keys: string[]): Skill[] {
	return skills.filter((skill) => keys.includes(skill.key));
}

export default skills;
export { backendSkills, frontendSkills, othersSkills, findAllByKeys };
