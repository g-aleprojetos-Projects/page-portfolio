import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Logo} from './Logo';

describe('Logo', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Logo />);
  });
  describe('Renderização', () => {
    test(`DEVE renderizar o Logo`, () => {
      const logo = componente.findByTestId('teste_logo');
      expect(logo).toBeDefined();
    });
  });
});
