import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('terminal responds to resume and help commands', () => {
  render(<App />);
  const input = screen.getByLabelText('terminal input');
  fireEvent.change(input, { target: { value: 'help' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getByText(/experience — list roles/)).toBeInTheDocument();
  expect(screen.queryByText(/or try the terminal/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Try the terminal here/i)).toBeInTheDocument();
  expect(document.querySelectorAll('.project-image-wrap img')).toHaveLength(0);
  expect(document.querySelector('.project-feature img')).toHaveAttribute('src', '/images/flexright-screenshot.png');
  expect(document.querySelectorAll('.leadership-photos img')).toHaveLength(2);
  expect(screen.queryByText(/hello_world/i)).not.toBeInTheDocument();
  expect(screen.queryByText('👋')).not.toBeInTheDocument();
  expect(document.querySelector('.marquee-wrap')).toBeNull();
  expect(screen.getByRole('link', { name: /say hello/i })).toHaveAttribute('href', 'mailto:abigailzhepburn@gmail.com');
  expect(screen.getByText('Open to internships, oppurtuntities, and good conversations.')).toBeInTheDocument();
  expect(screen.queryByText(/designed & built from scratch/i)).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'experience' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getByText(/BeachLens — Data Engineer Intern/)).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'contact' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getAllByText(/abigailzhepburn@gmail.com/)[0]).toBeInTheDocument();
});
