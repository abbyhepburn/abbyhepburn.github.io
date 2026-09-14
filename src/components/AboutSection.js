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
              <p>I&apos;m a Computer Engineering student at the University of Florida, pursuing a minor in Sales Engineering. I expect to graduate in May 2029.</p>
              <p>My experience includes data engineering at BeachLens, power delivery engineering at NextEra Energy, and LLM research at UF Data Studio.</p>
              <p>I build computer vision and AI projects, including Face Detection System, FlexRight, and Support Bot. I also lead software work with NSBE and Real World Engineering.</p>
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
