import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';
import { IconExternal, IconGithub } from './Icons';

function ProjectCard({ project }) {
  return (
    <article className="project-card group reveal">
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
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <IconGithub /> source
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <IconExternal /> demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.slice(0, 3);
  const rest = projects.slice(3);
  const visible = showAll ? projects : featured;

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
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="projects-more">
            <button
              type="button"
              className="all-projects-btn"
              onClick={() => setShowAll((open) => !open)}
            >
              {showAll ? 'cd .. ←' : 'ls ./all-projects →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
