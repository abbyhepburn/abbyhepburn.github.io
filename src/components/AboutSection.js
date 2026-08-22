import SectionHeader from './SectionHeader';
import { aboutCards, site } from '../data/portfolio';
const icons = {
  code: '⟨/⟩',
  book: '📖',
  folder: '📁',
};
function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <SectionHeader
          num="01"
          slug="about_me"
          title="About"
          subtitle="it me"
        />
        <div className="about-grid">
          <div>
            <p className="terminal-command">$ cat about.md</p>
            <div className="about-text">
              <p>
                I&apos;m a Computer Engineering student at the{' '}
                <span className="text-ink">University of Florida</span> who
                enjoys turning real-world problems into thoughtful software —
                shaped by a curiosity for{' '}
                <span className="text-sage">AI</span>,{' '}
                <span className="text-sage">design</span>, and how people
                actually interact with technology.
              </p>
              <p>
                Most of my time goes into{' '}
                <span className="text-ink">building full projects end-to-end</span>
                : from computer vision pipelines and web apps to command-line
                tools and robotics software. I like the parts of software you
                don&apos;t see but definitely feel.
              </p>
              <p>
                Outside of code I stay active in campus communities like{' '}
                <span className="text-ink">UF Trailblazers</span> and{' '}
                <span className="text-ink">NSBE</span>. I believe good
                conversations shape how we build — feel free to reach out with
                questions or ideas.
              </p>
            </div>
            <ul className="about-cards">
              {aboutCards.map((card) => (
                <li key={card.title} className="about-card">
                  <span className="about-card-icon">{icons[card.icon]}</span>
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-photo">
            <div className="photo-stack">
              <div className="photo-frame photo-frame-front">
                <div className="photo-placeholder">
                  <span>{site.firstName[0]}{site.lastName[0]}</span>
                </div>
              </div>
              <div className="photo-frame photo-frame-back" />
            </div>
            <div className="photo-caption">
              <p>
                abby.jpeg <span className="text-sage">·</span> campus life
              </p>
              <div className="photo-dots">
                <span className="photo-dot active" />
                <span className="photo-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;