import { useState } from 'react';
import { site } from '../data/portfolio';
function Footer() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-cta">
          <p className="footer-script">./get_in_touch.sh</p>
          <h2>
            Let&apos;s build something<span className="text-sage">.</span>
          </h2>
          <p>
            Open to internships, collabs, and good conversations. My inbox is a
            lot less intimidating than my commit history.
          </p>
          <div className="footer-actions">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              ✉ say hello
            </a>
            <button type="button" className="btn btn-secondary" onClick={copyEmail}>
              {copied ? '✓ copied!' : `⎘ ${site.email}`}
            </button>
          </div>
          <div className="footer-social">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}{' '}
            <span className="text-sage">·</span> designed &amp; built from scratch
          </p>
          <p>
            react + css + caffeine <span className="text-sage">·</span> exit 0
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;