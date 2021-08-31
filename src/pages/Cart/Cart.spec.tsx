import React from 'react';
import { render } from '@testing-library/react';

import Cart from '.';
import Header from '../../components/Header';

jest.mock('react-router-dom', () => ({

  useHistory: jest.fn(),
  Link: ({ children } : { children: React.ReactNode }) => children,
}));

describe('element renders', () => {
  it('Cart renders', async () => {
    render(
      <Cart>
        <Header type="back" text="Testee" />
      </Cart>,

    );
  });
});
