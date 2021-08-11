import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the dummy form', () => {
  render(<App />);
  const header = screen.getByText(/dummy form/i);
  expect(header).toBeInTheDocument();
});
