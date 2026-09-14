import { useEffect, useState } from 'react';
import { site } from '../data/portfolio';
import { IconArrowDown, IconDownload, IconGithub, IconLinkedin, IconMail } from './Icons';

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = site.roles[roleIndex];
    let timeout;

    if (!deleting && displayText === current) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayText === '') {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % site.roles.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        const next = deleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1);
        setDisplayText(next);
      }, deleting ? 40 : 70);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  return (
    <header id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            {site.firstName} <span className="text-sage">{site.lastName}</span>
          </h1>
          <p className="hero-typewriter">
            {displayText}
            <span className="cursor-blink" />
          </p>
          <p className="hero-description">
            Computer Engineering at the University of Florida. {' '}
            <span className="text-ink">{site.philosophy}</span>{' '}
            {site.philosophyContext}
          </p>
          <div className="hero-actions">
            <a href="/Abigail-Hepburn-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <IconDownload /> resume.pdf
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-icon" aria-label="Email">
              <IconMail />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="GitHub"
            >
              <IconGithub />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="LinkedIn"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="terminal-window hero-identity">
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-filename">identity.json</span>
            </div>
            <div className="terminal-body identity-body">
              <div className="identity-header">

                <div>
                  <p className="identity-name">{site.name}</p>
                  <p className="identity-location">{site.location}</p>
                </div>
              </div>
              <pre className="identity-json">
                {'{\n'}
                {'  '}<span className="json-key">&quot;role&quot;</span>:{' '}
                <span className="json-string">&quot;Computer Engineering student @ UF&quot;</span>,{'\n'}
                {'  '}<span className="json-key">&quot;focus&quot;</span>: [
                <span className="json-string">&quot;data engineering&quot;</span>,{' '}
                <span className="json-string">&quot;computer vision&quot;</span>,{'\n'}
                {'            '}<span className="json-string">&quot;software&quot;</span>],{'\n'}
                {'  '}<span className="json-key">&quot;coords&quot;</span>: [
                <span className="json-bright">Gainesville, FL</span>],{'\n'}
                {'  '}<span className="json-key">&quot;status&quot;</span>:{' '}
                <span className="json-string">&quot;building things&quot;</span>,{'\n'}
                {'  '}<span className="json-key">&quot;sanity&quot;</span>:{' '}
                <span className="json-bright">&quot;93%&quot;</span>{'\n'}
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about">
        <IconArrowDown />
      </a>
    </header>
  );
}

export default Hero;
