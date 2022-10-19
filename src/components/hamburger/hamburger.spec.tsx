import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Hamburger} from './hamburger';

describe('Hender', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<Hamburger />);
  });
  test(`DEVE renderizar o componente Hamburger`, async () => {
    const hamburguer = componente.getByTestId('test_hamburger');
    expect(hamburguer).toBeDefined();
  });
});
