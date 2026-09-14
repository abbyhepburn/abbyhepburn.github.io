import { site } from '../data/portfolio';
import { IconGithub, IconLinkedin, IconMail } from './Icons';
import EmailCopyButton from './EmailCopyButton';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="section-container">
        <div className="footer-cta">
          <p className="footer-script">./get_in_touch.sh</p>
          <h2>
            Let&apos;s build something<span className="text-sage">.</span>
          </h2>
          <p>Open to internships, opportunities, and good conversations.</p>
          <div className="footer-social">
            <EmailCopyButton>
              <IconMail />
            </EmailCopyButton>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconGithub />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
