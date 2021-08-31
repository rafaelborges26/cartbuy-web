import React from 'react';
import { render } from '@testing-library/react';

import Header from '.';

jest.mock('react-router-dom', () => ({
  Link: ({ children } : { children: React.ReactNode }) => children,
}));

describe('element renders', () => {
  it('Dashboard rendes', () => {
    render(<Header type="back" text="Teste" />);
  });
});
