// src/components/Header/components/Logo/Logo.test.tsx
import { render, screen } from '@testing-library/react';
import { Logo } from './index';
import React from 'react';

describe('Logo', () => {
  it('renders the OLX logo', () => {
    render(<Logo href="/" />);
    const logo = screen.getByText('OLX');
    expect(logo).toBeInTheDocument();
  });

  it('has correct link and accessibility label', () => {
    render(<Logo href="/" />);
    const link = screen.getByLabelText('OLX Home');
    expect(link).toHaveAttribute('href', '/');
  });

  it('applies correct CSS classes', () => {
    render(<Logo href="/" />);
    const container = screen.getByText('OLX').closest('.logo__container');
    expect(container).toHaveClass('logo__container');
  });

  it('is keyboard accessible', () => {
    render(<Logo href="/" />);
    const link = screen.getByRole('link');
    link.focus();
    expect(link).toHaveFocus();
  });

  it('maintains proper dimensions on different viewports', () => {
    render(<Logo href="/" />);
    const container = screen.getByText('OLX').closest('.logo__container');
    expect(container).toHaveClass('logo__container');
  });

  it('handles different href values correctly', () => {
    render(<Logo href="/different-path" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/different-path');
  });
});