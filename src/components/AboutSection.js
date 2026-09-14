import SectionHeader from './SectionHeader';
import { education } from '../data/portfolio';

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <SectionHeader num="01" slug="education" title="Education" />
        <div className="about-profile">
        <div className="resume-panel reveal">
          <div className="resume-heading">
            <div>
              <h3>{education.school}</h3>
              <p>{education.degree} · {education.minor}</p>
            </div>
            <span>{education.graduation}</span>
          </div>
          <p>GPA: {education.gpa}</p>
          <p>Relevant Coursework: {education.relevantCoursework}</p>
          <p>Current Coursework: {education.currentCoursework}</p>
        </div>
        <figure className="about-portrait reveal">
          <img src="/abby.jpeg" alt="Abigail Hepburn outside Malachowsky Hall" />
          <figcaption>abby.jpeg</figcaption>
        </figure>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
