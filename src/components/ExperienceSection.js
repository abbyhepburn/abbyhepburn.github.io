import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';
function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <SectionHeader
          num="04"
          slug="git_log_--work"
          title="Experience"
          subtitle="the places that somehow let me on the team"
        />
        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">{item.date}</p>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{item.company}</h3>
                    <p className="timeline-role">
                      {item.role}{' '}
                      <span className="text-faint">{'// '}{item.type}</span>
                    </p>
                  </div>
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-link"
                    >
                      linkedin ↗
                    </a>
                  )}
                </div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default ExperienceSection;