import React, {ReactNode} from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {ResponsiveProvide, useResponsiveContext} from './ResponsiveContext';

type ResponsiveProvider = {
  children: ReactNode;
};

const ResponsiveContextProvider = ({children}: ResponsiveProvider) => (
  <ResponsiveProvide>{children}</ResponsiveProvide>
);

const wrapper = ({children}: ResponsiveProvider) => (
  <ResponsiveContextProvider>{children}</ResponsiveContextProvider>
);

describe('ResponsiveContext', () => {
  const spy = jest.fn();
  const tamanhoTelaMobile = 768;

  beforeAll(() => {
    window.addEventListener('resize', spy);
  });

  test('Deve ter a tela full', () => {
    expect(window.innerWidth).not.toBe(tamanhoTelaMobile);
  });

  test('DEVE ter o estado mobile igual a false', () => {
    const {result} = renderHook(() => useResponsiveContext(), {wrapper});

    expect(result.current.mobile).toBeFalsy();
  });

  describe('Renderiza a tela com 768px', () => {
    beforeAll(() => {
      window.innerWidth = tamanhoTelaMobile;
      window.dispatchEvent(new Event('resize'));
    });

    test('Deve ter a tela renderizada com 768px', () => {
      expect(window.innerWidth).toBe(tamanhoTelaMobile);
    });
  });

  test('DEVE ter o estado mobile igual a verdadeiro', () => {
    const {result} = renderHook(() => useResponsiveContext(), {wrapper});

    expect(result.current.mobile).toBeTruthy();
  });
});
