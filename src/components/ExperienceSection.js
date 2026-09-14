import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';
import { IconExternal } from './Icons';

function highlightText(text, highlights = []) {
  if (!highlights.length) return text;
  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={`${part}-${i}`} className="text-sage-bright">
        {part}
      </span>
    ) : (
      part
    )
  );
}

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
            <li key={`${item.company}-${item.role}`} className="timeline-item reveal">
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
                      linkedin <IconExternal />
                    </a>
                  )}
                </div>
                <p className="timeline-desc">
                  {highlightText(item.description, item.highlights)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
