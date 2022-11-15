import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Header} from './Header1';
import {useResponsiveContext} from 'context/mobileWindow';

jest.mock('context/mobileWindow');

const mockedUseResponsiveContext = useResponsiveContext as jest.Mock;

describe('Hender', () => {
  let componente: RenderResult;

  beforeEach(() => {
    mockedUseResponsiveContext.mockClear();
    mockedUseResponsiveContext.mockImplementation(() => ({mobile: false}));
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
    test(`DEVE renderizar o header com o "vídeo"`, () => {
      const video = componente.getByTestId('test_video');
      expect(video).toBeDefined();
    });
    describe('Renderização com a tela 768px', () => {
      beforeEach(() => {
        mockedUseResponsiveContext.mockClear();
        mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
        componente.rerender(<Header />);
      });

      test(`DEVE renderizar com o "background-color" transparente`, () => {
        const header = componente.getByTestId('test_header');
        const style = window.getComputedStyle(header);
        expect(style.backgroundColor).toEqual('transparent');
      });

      test(`NÃO DEVE renderizar o overlay`, () => {
        const overlay = componente.getByTestId('test_overlay');
        const style = window.getComputedStyle(overlay);
        expect(style.display).toEqual('none');
      });
      test(`NÃO DEVE renderizar o video`, () => {
        const video = componente.getByTestId('test_video');
        const style = window.getComputedStyle(video);
        expect(style.display).toEqual('none');
      });
    });
  });
});
