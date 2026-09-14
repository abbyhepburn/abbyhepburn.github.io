import { fireEvent, render, screen } from '@testing-library/react';
import SectionScrollButton from './SectionScrollButton';

test('scroll arrow advances through sections and returns to top', () => {
  let activeIndex = 0;
  const ids = ['about', 'experience', 'projects', 'leadership', 'skills', 'terminal', 'contact'];
  const sections = ids.map((id) => {
    const element = document.createElement('section');
    element.id = id;
    element.scrollIntoView = jest.fn();
    element.getBoundingClientRect = () => ({ top: ids.indexOf(id) >= activeIndex ? 500 : 0 });
    document.body.appendChild(element);
    return element;
  });
  window.scrollTo = jest.fn();
  render(<SectionScrollButton />);
  fireEvent.click(screen.getByRole('button', { name: 'Scroll to about' }));
  expect(sections[0].scrollIntoView).toHaveBeenCalled();
  activeIndex = 1;
  fireEvent.scroll(window);
  fireEvent.click(screen.getByRole('button', { name: 'Scroll to experience' }));
  expect(sections[1].scrollIntoView).toHaveBeenCalled();
  activeIndex = ids.length;
  fireEvent.scroll(window);
  fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  sections.forEach((section) => section.remove());
});
