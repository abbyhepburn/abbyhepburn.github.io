import { useEffect, useState } from 'react';
import { IconArrowDown } from './Icons';

const sectionIds = ['about', 'experience', 'projects', 'leadership', 'skills', 'terminal', 'contact'];

function getNextSection() {
  return sectionIds.find((id) => {
    const section = document.getElementById(id);
    return section && section.getBoundingClientRect().top > 140;
  }) || null;
}

function SectionScrollButton() {
  const [nextId, setNextId] = useState('about');

  useEffect(() => {
    const update = () => setNextId(getNextSection());
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const move = () => {
    if (nextId) {
      document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button type="button" className={`section-scroll-button ${nextId ? '' : 'section-scroll-top'}`} onClick={move} aria-label={nextId ? `Scroll to ${nextId}` : 'Back to top'}>
      <IconArrowDown />
    </button>
  );
}

export default SectionScrollButton;
