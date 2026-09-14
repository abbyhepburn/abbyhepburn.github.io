import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('terminal responds to resume and help commands', () => {
  render(<App />);
  const input = screen.getByLabelText('terminal input');
  fireEvent.change(input, { target: { value: 'help' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getByText(/experience — list roles/)).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'experience' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getByText(/BeachLens — Data Engineer Intern/)).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'contact' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getAllByText(/abigailzhepburn@gmail.com/)[0]).toBeInTheDocument();
});
