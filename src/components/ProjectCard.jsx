import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />

      <div className="project-body">
        <h3>{project.title}</h3>

        <div className="project-tags">
          {project.techStack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <p>{project.description}</p>

        <Link to={`/projects/${project.id}`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
}