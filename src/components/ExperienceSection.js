import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <SectionHeader num="02" slug="experience" title="Experience" />
        <div className="resume-stack">
          {experience.map((item) => (
            <article key={item.company} className="resume-panel reveal">
              <div className="resume-heading">
                <div><h3>{item.role}</h3><p>{item.company}</p></div>
                <span>{item.date}</span>
              </div>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ExperienceSection;
