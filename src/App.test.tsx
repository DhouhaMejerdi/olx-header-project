import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OLX header', () => {
  render(<App />);
  const logoElement = screen.getByText('OLX');
  expect(logoElement).toBeInTheDocument();
});
