import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {RightNav} from './RightNav';
import {useResponsiveContext} from 'context/mobileWindow';

jest.mock('context/mobileWindow');

const mockedUseResponsiveContext = useResponsiveContext as jest.Mock;

describe('Hender', () => {
  let componente: RenderResult;

  beforeEach(() => {
    mockedUseResponsiveContext.mockClear();
    mockedUseResponsiveContext.mockImplementation(() => ({mobile: false}));
    componente = render(<RightNav open={true} />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente com o texto "Menu"`, () => {
      const menu = componente.getByText('Menu');
      expect(menu).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Home"`, () => {
      const home = componente.getByText('Home');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Skills"`, () => {
      const skills = componente.getByText('Skills');
      expect(skills).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Projetos"`, () => {
      const projetos = componente.getByText('Projetos');
      expect(projetos).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Sobre"`, () => {
      const sobre = componente.getByText('Sobre');
      expect(sobre).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "ToggleSwitch"`, () => {
      const toggleSwitch = componente.getByText('ToggleSwitch');
      expect(toggleSwitch).toBeDefined();
    });
    test(`DEVE renderizar o componente com a bandeira do "Brasil"`, () => {
      const bandeira = componente.getByTestId('test_flag_Brasil');
      expect(bandeira).toBeDefined();
    });
    describe('Renderização com a tela 768px', () => {
      beforeEach(() => {
        mockedUseResponsiveContext.mockClear();
        mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
        componente.rerender(<RightNav open={true} />);
      });

      test(`DEVE renderizar com o "position" do ContainerContent como fixed`, () => {
        const container = componente.getByTestId('test_containerContent');
        const style = window.getComputedStyle(container);
        expect(style.position).toEqual('fixed');
      });
    });
  });
});
