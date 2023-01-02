import React from 'react';
import {fireEvent, render, RenderResult, waitFor} from '@testing-library/react';
import {RightNav} from './RightNav';
import {useBackgroundContext} from 'context/backgroud';
import {useNavigate} from 'react-router-dom';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

jest.mock('context/backgroud');
const mockedUseBackgroundContext = useBackgroundContext as jest.Mock;

describe('RightNav', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
    mockedUseBackgroundContext.mockReturnValue({
      handleToggle: jest.fn(),
      temaEscuro: false,
    });
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
        expect(style.fontFamily).toEqual('AvertaStd-Bold');
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
      const toggleSwitch = componente.getByTestId('test_toggleSwitch');
      expect(toggleSwitch).toBeDefined();
    });

    test(`DEVE renderizar o componente com a bandeira do "Brasil"`, () => {
      const bandeira = componente.getByTestId('test_flag_Brasil');
      expect(bandeira).toBeDefined();
    });

    test(`NÃO DEVE renderizar menu lateral QUANDO "openRightNav" for false`, () => {
      componente.rerender(
        <RightNav openRightNav={false} mudarEstado={aoClicarMock} />,
      );
      const toggleSwich = componente.queryByTestId('test_rightNav_container');

      expect(toggleSwich).toBeNull();
    });
  });

  describe('Comportamento', () => {
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
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Projetos" com font-family igual "AvertaStd-Regular`, () => {
      const navProjetos = componente.getByText('Projetos');
      fireEvent.click(navProjetos);
      const projetos = componente.getByText('Projetos');
      const style = window.getComputedStyle(projetos);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Sobre" com font-family igual "AvertaStd-Regular`, () => {
      const navSobre = componente.getByText('Sobre');
      fireEvent.click(navSobre);
      const sobre = componente.getByText('Sobre');
      const style = window.getComputedStyle(sobre);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE chamar a função "handleToggleSwich" QUANDO clicar no "ToggleSwitch" no menu da navegação`, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch');
      fireEvent.click(toggleSwich);

      expect(useBackgroundContext().handleToggle).toBeCalled();
    });

    test(`DEVE chamar a função "mudarEstado" QUANDO clicar no "ToggleSwitch" no menu da navegação`, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch');
      fireEvent.click(toggleSwich);

      expect(aoClicarMock).toBeCalled();
    });

    test(`DEVE chamar a função "mudarEstado" QUANDO clicar fora do menu`, () => {
      const toggleSwich = componente.getByTestId('test_rightNav_container');
      fireEvent.click(toggleSwich);

      expect(aoClicarMock).toBeCalled();
    });

    test(`DEVE renderizar com o "ToggleSwitch" como o "backGroundMoon" `, () => {
      const toggleSwich = componente.getByTestId('test_toggleSwitch');
      const style = window.getComputedStyle(toggleSwich);
      expect(style.background).toEqual('url(backgroundMoon.svg)');
    });

    test(`DEVE renderizar com o "ToggleSwitch" como o "clouds" `, () => {
      mockedUseBackgroundContext.mockReturnValue({
        handleToggle: jest.fn(),
        temaEscuro: true,
      });
      componente.rerender(
        <RightNav openRightNav={true} mudarEstado={aoClicarMock} />,
      );
      const toggleSwich = componente.getByTestId('test_toggleSwitch_icon');
      const style = window.getComputedStyle(toggleSwich);
      expect(style.background).toEqual('url(clouds.svg)');
    });
  });
});
