import { Link } from 'react-router-dom';
import './SkillRow.css';

export default function SkillRow({ skill }) {
  return (
    <div className="skill-row">
      <div className="skill-row-image">
        <img src={skill.image} alt={skill.title} />
      </div>

      <div className="skill-row-body">
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>

        <Link
          to={`/projects?skill=${encodeURIComponent(skill.filterTech.join(','))}`}
          className="btn btn-outline"
        >
          See related projects
        </Link>
      </div>
    </div>
  );
}
