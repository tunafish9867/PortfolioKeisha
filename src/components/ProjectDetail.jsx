import { useParams, Link } from 'react-router-dom';
import { projects } from './data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="section container">
        <p>Project not found.</p>
        <Link to="/projects" className="btn btn-outline">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <article className="project-detail">
      {/* Full-width banner image */}
      <div className="project-banner">
        <img src={project.banner} alt={project.title} />
      </div>

      {/* Title / tech stack / description block */}
      <div className="project-intro">
        <div className="container">
          <h1>{project.title}</h1>

          <div className="project-tags centered">
            {project.techStack.map((tech) => (
              <span className="tag pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <p className="project-description">{project.description}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="project-steps">
        <div className="container">
          <h2 className="section-heading">How The Workflow Works</h2>

          <div className="steps-list">
            {project.steps.map((step, index) => (
              <div className="step-row" key={index}>
                <div className="step-image">
                  <img src={step.image} alt={step.title} />
                </div>
                <div className="step-description">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="project-results-section">
        <div className="container">
          <h2 className="section-heading">Results</h2>

          <div className="results-grid">
            {project.results.map((result) => (
              <div className="result-card" key={result.title}>
                <svg
                  className="result-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}