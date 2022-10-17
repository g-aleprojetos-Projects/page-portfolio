import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Header} from './header';

describe('Hender', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Header />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hender`, async () => {
      const header = componente.getByTestId('test_header');
      expect(header).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Home"`, () => {
      const home = componente.getByText('Home');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Skills"`, () => {
      const skills = componente.getByText('Skills');
      expect(skills).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Projetos"`, () => {
      const projetos = componente.getByText('Projetos');
      expect(projetos).toBeDefined();
    });
    test(`DEVE renderizar o header com o texto "Sobre"`, () => {
      const sobre = componente.getByText('Sobre');
      expect(sobre).toBeDefined();
    });
    test(`DEVE renderizar o header com o "flagBrasil"`, () => {
      const flag = componente.getByTestId('test_flag_Brasil');
      expect(flag).toBeDefined();
    });
  });
});
