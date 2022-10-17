import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Home} from './home';

describe('Hender', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Home />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente Home`, async () => {
      const header = componente.getByTestId('test_home');
      expect(header).toBeDefined();
    });
  });
});
