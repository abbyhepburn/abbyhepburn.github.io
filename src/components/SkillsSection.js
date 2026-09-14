import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';
function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <SectionHeader num="05" slug="skills" title="Skills" />
        <div className="resume-panel reveal">
          <p><strong>Languages:</strong> {skills.languages}</p>
          <p><strong>Developer Tools:</strong> {skills.tools}</p>
          <p><strong>Certifications:</strong> {skills.certifications}</p>
        </div>
      </div>
    </section>
  );
}
export default SkillsSection;
