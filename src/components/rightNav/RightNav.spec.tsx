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
    test(`DEVE renderizar o componente com o texto "Menu" com font-family igual "AvertaStd-Regular" `, () => {
      const menu = componente.getByText('Menu');
      const style = window.getComputedStyle(menu);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o texto "Home"`, () => {
      const home = componente.getByText('Home');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Home" com font-family igual "AvertaStd-Regular" `, () => {
      const home = componente.getByText('Home');
      const style = window.getComputedStyle(home);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o texto "Skills"`, () => {
      const skills = componente.getByText('Skills');
      expect(skills).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Skills" com font-family igual "AvertaStd-Regular" `, () => {
      const skills = componente.getByText('Skills');
      const style = window.getComputedStyle(skills);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o texto "Projetos"`, () => {
      const projetos = componente.getByText('Projetos');
      expect(projetos).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Projetos" com font-family igual "AvertaStd-Regular" `, () => {
      const projetos = componente.getByText('Projetos');
      const style = window.getComputedStyle(projetos);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o texto "Sobre"`, () => {
      const sobre = componente.getByText('Sobre');
      expect(sobre).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Sobre" com font-family igual "AvertaStd-Regular" `, () => {
      const sobre = componente.getByText('Sobre');
      const style = window.getComputedStyle(sobre);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o componente "ToggleSwitch"`, () => {
      const toggleSwitch = componente.getByTestId('test_togleSwitch');
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
