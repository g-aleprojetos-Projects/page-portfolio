import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {Nav} from './Nav';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('Nav', () => {
  let componente: RenderResult;

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
    componente = render(<Nav />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar o componente "Nav"`, async () => {
      const nav = componente.getByTestId('test_nav');
      expect(nav).toBeDefined();
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
      const logo = componente.getByTestId('test_container_logo');
      expect(logo).toBeDefined();
    });
  });
  describe('Comportamento', () => {
    test(`DEVE mostrar o spanSuperior com "rotate(0)" QUANDO renderizar a tela.`, () => {
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
    test(`DEVE mostrar o spanMeio QUANDO renderizar a tela.`, () => {
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
    test(`DEVE mostrar o spanInferior com "rotate(0)" QUANDO renderizar a tela.`, () => {
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
