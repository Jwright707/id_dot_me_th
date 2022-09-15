import { render, screen } from '@testing-library/react';
import App from './App';

test('Checking if Purchase index renders', () => {
  render(<App />);
  const linkElement = screen.getByText('Purchases');
  expect(linkElement).toBeInTheDocument();
});
