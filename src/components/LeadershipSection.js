import SectionHeader from './SectionHeader';
import { leadership } from '../data/portfolio';
function LeadershipSection() {
  return (
    <section id="leadership" className="section">
      <div className="section-container">
        <SectionHeader
          num="05"
          slug="beyond_the_ide"
          title="Leadership"
          subtitle="things that i do to pretend i touch grass"
        />
        <div className="leadership-grid">
          {leadership.map((item) => (
            <article key={item.id} className="leadership-card group">
              <div className="leadership-meta">
                <span>org_{item.id}</span>
                <span className="leadership-date">{item.date}</span>
              </div>
              <h3>{item.org}</h3>
              <p className="leadership-role">{item.role}</p>
              <p className="leadership-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default LeadershipSection;