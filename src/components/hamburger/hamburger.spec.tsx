import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Hamburger} from './hamburger';
import {useResponsiveContext} from 'context/mobileWindow';

jest.mock('context/mobileWindow');

const mockedUseResponsiveContext = useResponsiveContext as jest.Mock;

describe('Hamburger', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

  beforeEach(() => {
    mockedUseResponsiveContext.mockClear();
    mockedUseResponsiveContext.mockImplementation(() => ({mobile: false}));
    componente = render(<Hamburger mudarEstado={aoClicarMock} />);
  });
  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hamburger`, () => {
      const hamburguer = componente.getByTestId('test_hamburger');
      expect(hamburguer).toBeDefined();
    });
    describe('Renderização com a tela 768px', () => {
      beforeEach(() => {
        mockedUseResponsiveContext.mockClear();
        mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
        componente.rerender(<Hamburger mudarEstado={aoClicarMock} />);
      });

      test(`DEVE renderizar com o "display" do Container como flex`, () => {
        const hamburger = componente.getByTestId('test_hamburger');
        const style = window.getComputedStyle(hamburger);
        expect(style.display).toEqual('flex');
      });
    });
  });
  describe('Comportamento', () => {
    test(`DEVE chamar a função QUANDO clicar no hamburger `, () => {
      const hamburguer = componente.getByTestId('test_hamburger');

      fireEvent.click(hamburguer);

      expect(aoClicarMock).toBeCalled();
    });
  });
});
