import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/portfolio';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand">
          <span className="text-sage">{site.firstName}</span>
          <span className="text-faint">@</span>
          <span className="text-muted">portfolio</span>
          <span className="text-faint">:~$</span>
          <span className="cursor-blink" />
        </a>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>
                <span className="text-faint">{link.num}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <a href={`mailto:${site.email}`} className="navbar-cta">
            <span className="pulse-dot" />
            open_to_work
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div className="mobile-menu-panel">
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                  <span className="text-faint">{link.num}.</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-menu-contact">
              <a href={`mailto:${site.email}`} onClick={() => setMenuOpen(false)}>
                contact →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;