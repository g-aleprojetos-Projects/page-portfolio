import React from 'react';
import {fireEvent, render, RenderResult, waitFor} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {RightNav} from './RightNav';
import {useResponsiveContext} from 'context/mobileWindow';

jest.mock('context/mobileWindow');
const mockedUseResponsiveContext = useResponsiveContext as jest.Mock;

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

describe('Hender', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
    mockedUseResponsiveContext.mockClear();
    mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
    componente = render(
      <RightNav openRightNav={true} mudarEstado={aoClicarMock} />,
    );
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
      const home = componente.findByText('Home');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Home" com font-family igual "AvertaStd-Semibold" `, async () => {
      await waitFor(async () => {
        const home = componente.getByText('Home');
        const style = window.getComputedStyle(home);
        expect(style.fontFamily).toEqual('AvertaStd-Semibold');
      });
    });
    test(`DEVE renderizar o componente com o texto "Skills"`, () => {
      const skills = componente.findByText('Skills');
      expect(skills).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Skills" com font-family igual "AvertaStd-Regular" `, () => {
      const skills = componente.getByText('Skills');
      const style = window.getComputedStyle(skills);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o texto "Projetos"`, () => {
      const projetos = componente.findByText('Projetos');
      expect(projetos).toBeDefined();
    });
    test(`DEVE renderizar o componente com o texto "Projetos" com font-family igual "AvertaStd-Regular" `, () => {
      const projetos = componente.getByText('Projetos');
      const style = window.getComputedStyle(projetos);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });
    test(`DEVE renderizar o componente com o texto "Sobre"`, () => {
      const sobre = componente.findByText('Sobre');
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
        componente.rerender(
          <RightNav openRightNav={true} mudarEstado={aoClicarMock} />,
        );
      });

      test(`DEVE renderizar com o "position" do ContainerContent como fixed`, () => {
        const container = componente.getByTestId('test_containerContent');
        const style = window.getComputedStyle(container);
        expect(style.position).toEqual('fixed');
      });

      test(`NÃO DEVE renderizar o RightNav Quando "openRightNav" for false`, () => {
        mockedUseResponsiveContext.mockClear();
        mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
        componente.rerender(
          <RightNav openRightNav={false} mudarEstado={aoClicarMock} />,
        );
        const container = componente.getByTestId('test_containerContent');
        const style = window.getComputedStyle(container);
        expect(style.transform).toEqual('translateX(100%)');
      });
    });
    describe('Comportamento', () => {
      test(`DEVE chamar a função QUANDO clicar no "Home" no menu da navegação`, async () => {
        await waitFor(() => {
          const home = componente.getByText('Home');

          fireEvent.click(home);

          expect(aoClicarMock).toBeCalled();
        });
      });
      test(`DEVE chamar a função QUANDO clicar no "Skills" no menu da navegação`, () => {
        const skills = componente.getByText('Skills');

        fireEvent.click(skills);

        expect(aoClicarMock).toBeCalled();
      });
      test(`DEVE chamar a função QUANDO clicar no "Projetos" no menu da navegação`, () => {
        const projetos = componente.getByText('Projetos');

        fireEvent.click(projetos);

        expect(aoClicarMock).toBeCalled();
      });
      test(`DEVE chamar a função QUANDO clicar no "Sobre" no menu da navegação`, () => {
        const sobre = componente.getByText('Sobre');

        fireEvent.click(sobre);

        expect(aoClicarMock).toBeCalled();
      });
      test(`DEVE renderizar o componente com o texto "Home" com font-family igual "AvertaStd-Regular`, () => {
        const navSkills = componente.getByText('Skills');
        fireEvent.click(navSkills);
        const home = componente.getByText('Home');
        const style = window.getComputedStyle(home);
        expect(style.fontFamily).toEqual('AvertaStd-Regular');
      });
      test(`DEVE renderizar o componente com o texto "Skills" com font-family igual "AvertaStd-Regular`, () => {
        const navSkills = componente.getByText('Skills');
        fireEvent.click(navSkills);
        const skills = componente.getByText('Skills');
        const style = window.getComputedStyle(skills);
        expect(style.fontFamily).toEqual('AvertaStd-Semibold');
      });
      test(`DEVE renderizar o componente com o texto "Projetos" com font-family igual "AvertaStd-Regular`, () => {
        const navProjetos = componente.getByText('Projetos');
        fireEvent.click(navProjetos);
        const projetos = componente.getByText('Projetos');
        const style = window.getComputedStyle(projetos);
        expect(style.fontFamily).toEqual('AvertaStd-Semibold');
      });
      test(`DEVE renderizar o componente com o texto "Sobre" com font-family igual "AvertaStd-Regular`, () => {
        const navSobre = componente.getByText('Sobre');
        fireEvent.click(navSobre);
        const sobre = componente.getByText('Sobre');
        const style = window.getComputedStyle(sobre);
        expect(style.fontFamily).toEqual('AvertaStd-Semibold');
      });

      describe('Comportamento na tela 768px', () => {
        beforeEach(() => {
          mockedUseResponsiveContext.mockClear();
          mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
          componente.rerender(
            <RightNav openRightNav={true} mudarEstado={aoClicarMock} />,
          );
        });
        test(`DEVE chamar a função QUANDO clicar no "Home" no menu da navegação`, () => {
          const home = componente.getByText('Home');

          fireEvent.click(home);

          expect(aoClicarMock).toBeCalled();
        });
        test(`DEVE chamar a função QUANDO clicar no "Skills" no menu da navegação`, () => {
          const skills = componente.getByText('Skills');

          fireEvent.click(skills);

          expect(aoClicarMock).toBeCalled();
        });
        test(`DEVE chamar a função QUANDO clicar no "Projetos" no menu da navegação`, () => {
          const projetos = componente.getByText('Projetos');

          fireEvent.click(projetos);

          expect(aoClicarMock).toBeCalled();
        });
        test(`DEVE chamar a função QUANDO clicar no "Sobre" no menu da navegação`, () => {
          const sobre = componente.getByText('Sobre');

          fireEvent.click(sobre);

          expect(aoClicarMock).toBeCalled();
        });
      });
    });
  });
});
