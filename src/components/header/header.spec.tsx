import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {Header} from './Header';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('Hender', () => {
  let componente: RenderResult;

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
    componente = render(<Header />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hender`, () => {
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
  });
});
