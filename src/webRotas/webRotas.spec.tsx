import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {WebRotas} from './webRotas';
import rotas from 'resourses/rotas';

describe('WebRotas', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(
      <MemoryRouter initialEntries={[`/${rotas.Home}`]}>
        <WebRotas />
      </MemoryRouter>,
    );
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "WebRotas"`, () => {
      const webRotas = componente.getByTestId('test_web');
      expect(webRotas).toBeDefined();
    });
    test(`DEVE renderizar o "Header"`, () => {
      const webRotas = componente.getByTestId('test_header');
      expect(webRotas).toBeDefined();
    });
  });

  describe('Rotas', () => {
    test('Home', () => {
      const home = componente.getByTestId('teste_home');
      expect(home).toBeDefined();
    });

    test('Skills', () => {
      const navSkills = componente.getByText('Skills');
      fireEvent.click(navSkills);
      const skills = componente.getByTestId('teste_skills');
      expect(skills).toBeDefined();
    });

    test('Projetos', () => {
      const navProjetos = componente.getByText('Projetos');
      fireEvent.click(navProjetos);
      const projetos = componente.getByTestId('teste_projetos');
      expect(projetos).toBeDefined();
    });

    test('Sobre', () => {
      const navSobre = componente.getByText('Sobre');
      fireEvent.click(navSobre);
      const sobre = componente.getByTestId('teste_sobre');
      expect(sobre).toBeDefined();
    });
  });
});
