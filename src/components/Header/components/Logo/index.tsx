// Main component file
// index.tsx
import React from 'react';
import './Logo.scss';

interface LogoProps {
  href: string;
}

export const Logo: React.FC<LogoProps> = ({ href }) => {
  return (
    <a href={href} className="logo" aria-label="OLX Home">
      <div className="logo__container">OLX</div>
    </a>
  );
};
