import { render } from '@testing-library/react';
import Header from './index';
import React from 'react';

describe('Header', () => {
  test('renders header component', () => {
    render(<Header />);
  });
});
