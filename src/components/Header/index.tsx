// components/Header/index.tsx
import React from 'react';
import { Logo } from './components/Logo/index';

const Header = () => {
  return (
    <header className="header">
      <Logo href="/" />
      {/* Other components will go here */}
    </header>
  );
};

export default Header;
