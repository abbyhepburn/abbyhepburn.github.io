import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import { galleryImages } from '../data/portfolio';
function GallerySection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);
  const current = galleryImages[index];
  return (
    <section id="gallery" className="section">
      <div className="section-container">
        <SectionHeader
          num="02"
          slug="life_outside_the_editor"
          title="Gallery"
          subtitle="proof that i go outside"
        />
        <div className="gallery-window terminal-window">
          <div className="terminal-titlebar gallery-titlebar">
            <div className="titlebar-left">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-filename">~/gallery/moments</span>
            </div>
            <span className="gallery-counter">
              img_{String(index + 1).padStart(2, '0')} /{' '}
              {String(galleryImages.length).padStart(2, '0')}
            </span>
          </div>
          <div className="gallery-main">
            <img src={current.src} alt={current.caption} />
            <button
              type="button"
              className="gallery-nav gallery-nav-prev"
              aria-label="Previous image"
              onClick={() =>
                setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
              }
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-nav gallery-nav-next"
              aria-label="Next image"
              onClick={() => setIndex((i) => (i + 1) % galleryImages.length)}
            >
              ›
            </button>
            <button
              type="button"
              className="gallery-pause"
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? '▶ play' : '⏸ pause'}
            </button>
          </div>
          <div className="gallery-footer">
            <p>{current.caption}</p>
            <div className="gallery-thumbs">
              {galleryImages.map((img, i) => (
                <button
                  key={img.caption}
                  type="button"
                  className={`gallery-thumb ${i === index ? 'active' : ''}`}
                  aria-label={img.caption}
                  onClick={() => setIndex(i)}
                >
                  <img src={img.src} alt="" />
                </button>
              ))}
            </div>
            <div className="gallery-progress">
              <div
                className="gallery-progress-bar"
                style={{ width: `${((index + 1) / galleryImages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GallerySection;