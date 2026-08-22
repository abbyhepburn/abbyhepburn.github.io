import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';
function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <SectionHeader
          num="03"
          slug="things_i_built"
          title="Projects"
          subtitle="things i made somehow"
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card group">
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-body">
                <p className="project-id">proj_{project.id}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↗ source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;