import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Nav} from './Nav';
import {useResponsiveContext} from 'context/mobileWindow';

jest.mock('context/mobileWindow');

const mockedUseResponsiveContext = useResponsiveContext as jest.Mock;

describe('Nav', () => {
  let componente: RenderResult;

  beforeEach(() => {
    mockedUseResponsiveContext.mockClear();
    mockedUseResponsiveContext.mockImplementation(() => ({mobile: false}));
    componente = render(<Nav />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente "Nav"`, async () => {
      const nav = componente.getByTestId('test_nav');
      expect(nav).toBeDefined();
    });
    test(`DEVE renderizar o componente "Logo"`, async () => {
      const logo = componente.getByTestId('test_nav');
      expect(logo).toBeDefined();
    });
    test(`DEVE renderizar o componente "Hamburger"`, async () => {
      const hamburger = componente.getByTestId('test_hamburger');
      expect(hamburger).toBeDefined();
    });
    test(`DEVE renderizar o componente "RightNav"`, async () => {
      const rightNav = componente.getByTestId('test_rightNav');
      expect(rightNav).toBeDefined();
    });
    test(`DEVE renderizar o componente "Logo"`, async () => {
      const logo = componente.getByTestId('test_logo');
      expect(logo).toBeDefined();
    });
    describe('Renderização com a tela 768px', () => {
      beforeEach(() => {
        mockedUseResponsiveContext.mockClear();
        mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
        componente.rerender(<Nav />);
      });

      test(`DEVE renderizar com o "justify-content" como center`, () => {
        const nav = componente.getByTestId('test_nav');
        const style = window.getComputedStyle(nav);
        expect(style.justifyContent).toEqual('center');
      });

      test(`DEVE renderizar com o "position" como fixed`, () => {
        const logo = componente.getByTestId('test_container_logo');
        const style = window.getComputedStyle(logo);
        expect(style.position).toEqual('fixed');
      });
    });
  });
  describe('Comportamento', () => {
    test(`DEVE mostrar o spanSuperior com "rotate(0)" `, () => {
      const menu = componente.getByTestId('test_hamburger');
      const style = window.getComputedStyle(menu.children[0]);
      expect(style.transform).toBe('rotate(0)');
    });
    test(`DEVE mostrar o spanSuperior com "rotate(45deg)" QUANDO clicar no hamburger `, () => {
      const hamburguer = componente.getByTestId('test_hamburger');

      fireEvent.click(hamburguer);

      const menu = componente.getByTestId('test_hamburger');
      const style = window.getComputedStyle(menu.children[0]);
      expect(style.transform).toBe('rotate(45deg)');
    });
    test(`DEVE mostrar o spanMeio `, () => {
      const menu = componente.getByTestId('test_hamburger');
      const style = window.getComputedStyle(menu.children[1]);
      expect(style.opacity).toBe('1');
    });
    test(`NÃO DEVE mostrar o spanMeio QUANDO clicar no hamburger `, () => {
      const hamburguer = componente.getByTestId('test_hamburger');

      fireEvent.click(hamburguer);

      const menu = componente.getByTestId('test_hamburger');
      const style = window.getComputedStyle(menu.children[1]);
      expect(style.opacity).toBe('0');
    });
    test(`DEVE mostrar o spanInferior com "rotate(0)" `, () => {
      const menu = componente.getByTestId('test_hamburger');
      const style = window.getComputedStyle(menu.children[2]);
      expect(style.transform).toBe('rotate(0)');
    });
    test(`DEVE mostrar o spanInferior com "rotate(-45deg)" QUANDO clicar no hamburger `, () => {
      const hamburguer = componente.getByTestId('test_hamburger');

      fireEvent.click(hamburguer);

      const menu = componente.getByTestId('test_hamburger');
      const style = window.getComputedStyle(menu.children[2]);
      expect(style.transform).toBe('rotate(-45deg)');
    });
  });
});
