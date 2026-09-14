import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { aboutCards, site } from '../data/portfolio';
import { IconBook, IconCode, IconFolder } from './Icons';

const icons = {
  code: IconCode,
  book: IconBook,
  folder: IconFolder,
};

function AboutSection() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = site.photos;
  const current = photos[photoIndex];

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
          <div className="reveal">
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
              {aboutCards.map((card) => {
                const Icon = icons[card.icon];
                return (
                  <li key={card.title} className="about-card">
                    <span className="about-card-icon">
                      <Icon />
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="about-photo reveal">
            <div
              className="photo-stack"
              role="button"
              tabIndex={0}
              aria-label={`Showing ${current.caption}. Click to view next photo.`}
              onClick={() => setPhotoIndex((i) => (i + 1) % photos.length)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setPhotoIndex((i) => (i + 1) % photos.length);
                }
              }}
            >
              {photos.map((photo, i) => (
                <div
                  key={photo.caption}
                  className={`photo-frame ${i === photoIndex ? 'photo-frame-front' : 'photo-frame-back'}`}
                >
                  <img src={photo.src} alt={photo.caption} />
                </div>
              ))}
            </div>
            <div className="photo-caption">
              <p>
                abby.jpeg <span className="text-sage">·</span> {current.caption}
              </p>
              <div className="photo-dots">
                {photos.map((photo, i) => (
                  <button
                    key={photo.caption}
                    type="button"
                    className={`photo-dot ${i === photoIndex ? 'active' : ''}`}
                    aria-label={`View ${photo.caption}`}
                    onClick={() => setPhotoIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
