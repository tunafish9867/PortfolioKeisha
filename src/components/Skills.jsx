import { skills } from './data/skills';
import SkillRow from './SkillRow';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-page section">
      <div className="container">
        <span className="eyebrow">What I Do</span>
        <h2>Skills</h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <SkillRow skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
