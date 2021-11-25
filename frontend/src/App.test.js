import { render, screen } from '@testing-library/react';
import App from './App';

test('checks if birthdayreminder word exists', () => {
  render(<App />);
  const linkElement = screen.getByText(/birthdayreminder/i);
  expect(linkElement).toBeInTheDocument();
});
