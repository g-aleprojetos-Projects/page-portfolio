import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Sobre} from './sobre';

describe('Sobre', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Sobre />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "Home"`, () => {
      const home = componente.getByTestId('teste_sobre');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('teste_imagem');
      expect(imagem).toBeDefined();
    });
  });
});
