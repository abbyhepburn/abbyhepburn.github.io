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
        <div className="leadership-photos reveal">
          <img src="/images/leadership-group-1.jpg" alt="Abigail with a group of peers" loading="lazy" />
          <img src="/images/leadership-group-2.jpg" alt="Abigail with a larger group at an event" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
export default LeadershipSection;
