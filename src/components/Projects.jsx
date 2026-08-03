import { useSearchParams, Link } from 'react-router-dom';
import { projects } from './data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const [searchParams] = useSearchParams();
  const skillFilter = searchParams.get('skill');
  const filterTerms = skillFilter
    ? skillFilter.split(',').map((term) => term.trim().toLowerCase())
    : [];

  const filteredProjects = filterTerms.length
    ? projects.filter((project) =>
        project.techStack?.some((tech) =>
          filterTerms.some((term) => tech.toLowerCase().includes(term))
        )
      )
    : projects;

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <span className="eyebrow">My Work</span>
        <h2>Projects</h2>

        {filterTerms.length > 0 && (
          <p className="projects-filter-note">
            Showing projects related to this skill.{' '}
            <Link to="/projects">Clear filter</Link>
          </p>
        )}

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">No projects match this skill yet.</p>
        )}
      </div>
    </section>
  );
}
