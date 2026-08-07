import { useParams, Link } from 'react-router-dom';
import { projects } from './data/projects';
import StepAnimation from './StepAnimation';
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

      {project.type === 'gallery' ? (
        /* Gallery-style project: website screenshots shown in a browser frame */
        <div className="project-gallery-section">
          <div className="container">
            <div className="project-gallery-grid">
              {project.images.map((image, index) => {
                const src = typeof image === 'string' ? image : image.src;
                const label = typeof image === 'string' ? null : image.label;
                return (
                  <div className="browser-frame" key={index}>
                    <div className="browser-frame-bar">
                      <span className="browser-dot browser-dot-red" />
                      <span className="browser-dot browser-dot-yellow" />
                      <span className="browser-dot browser-dot-green" />
                      <span className="browser-frame-url">
                        {label || project.title}
                      </span>
                    </div>
                    <div className="browser-frame-viewport">
                      <a href={src} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={`${project.title} screenshot ${index + 1}`} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="project-disclaimer">
              Shown for portfolio and demonstration purposes only. Client-identifying details have been altered or removed, and all trademarks, brand names, and content belong to their respective owners.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Steps */}
          <div className="project-steps">
            <div className="container">
              <h2 className="section-heading">How The Workflow Works</h2>

              <div className="steps-list">
                {project.steps.map((step, index) => (
                  <div className="step-row" key={index}>
                    <div className="step-image">
                      {step.anim ? (
                        <StepAnimation
                          variant={step.anim.variant}
                          nodes={step.anim.nodes}
                        />
                      ) : (
                        <img src={step.image} alt={step.title} />
                      )}
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
        </>
      )}
    </article>
  );
}