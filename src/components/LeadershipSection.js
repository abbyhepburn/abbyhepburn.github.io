import SectionHeader from './SectionHeader';
import { leadership } from '../data/portfolio';
function LeadershipSection() {
  return (
    <section id="leadership" className="section">
      <div className="section-container">
        <SectionHeader num="04" slug="leadership" title="Leadership" />
        <div className="resume-stack">
          {leadership.map((item) => (
            <article key={item.id} className="resume-panel reveal">
              <div className="resume-heading"><div><h3>{item.role}</h3><p>{item.org}</p></div></div>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
        <figure className="leadership-gallery reveal">
          <div className="leadership-photos">
            <img src="/images/leadership-group-1.jpg" alt="Abigail with a group of peers" loading="lazy" />
            <img src="/images/leadership-group-2.jpg" alt="Abigail with a larger group at an event" loading="lazy" />
          </div>
          <figcaption>National Society of Black Engineers - Fall Regional Conference 2025!</figcaption>
        </figure>
      </div>
    </section>
  );
}
export default LeadershipSection;
