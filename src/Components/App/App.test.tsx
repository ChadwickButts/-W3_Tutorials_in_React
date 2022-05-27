import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component links', () => {
  render(<App />);
  const linkElement = screen.getByText("W3");
  expect(linkElement).toBeInTheDocument();
});
