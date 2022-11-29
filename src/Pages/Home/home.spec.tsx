import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Home} from './home';

describe('Home', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Home />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Home"`, () => {
      const home = componente.getByTestId('teste_home');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('teste_imagem');
      expect(imagem).toBeDefined();
    });
  });
});
