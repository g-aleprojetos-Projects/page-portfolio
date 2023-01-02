import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Hamburger} from './hamburger';

describe('Hamburger', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

  beforeEach(() => {
    componente = render(<Hamburger mudarEstado={aoClicarMock} />);
  });
  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hamburger`, () => {
      const hamburguer = componente.getByTestId('test_hamburger');
      expect(hamburguer).toBeDefined();
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
