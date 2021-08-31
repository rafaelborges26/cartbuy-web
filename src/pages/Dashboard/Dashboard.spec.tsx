import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Dashboard from '.';
import Header from '../../components/Header';

jest.mock('react-router-dom', () => ({

  useHistory: jest.fn(),
  Link: ({ children } : { children: React.ReactNode }) => children,
}));

describe('element renders', () => {
  it('Dashboard rendes', async () => {
    render(
      <Dashboard>
        <Header type="cart" text="Testee" />
      </Dashboard>,

    );
  });
});
