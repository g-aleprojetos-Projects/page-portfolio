import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {useResponsiveContext} from 'context/mobileWindow';
import {Logo} from './Logo';
import {useBackgroundContext} from 'context/backgroud';
import colors from 'resourses/colors';

jest.mock('context/mobileWindow');
const mockedUseResponsiveContext = useResponsiveContext as jest.Mock;

jest.mock('context/backgroud');
const mockedUseBackgroundContext = useBackgroundContext as jest.Mock;

describe('Logo', () => {
  describe('Renderização', () => {
    test(`DEVE renderizar o texto do logo na cor ${colors.white} QUANDO mobile = false e on = false`, async () => {
      mockedUseResponsiveContext.mockClear();
      mockedUseBackgroundContext.mockClear();
      mockedUseResponsiveContext.mockImplementation(() => ({mobile: false}));
      mockedUseBackgroundContext.mockImplementation(() => ({on: false}));
      const component = renderer.create(<Logo testId="test_logo" />).toJSON();
      expect(component).toMatchSnapshot();
    });

    test(`DEVE renderizar o texto do logo na cor ${colors.black} QUANDO mobile = true e on = false`, async () => {
      mockedUseResponsiveContext.mockClear();
      mockedUseBackgroundContext.mockClear();
      mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
      mockedUseBackgroundContext.mockImplementation(() => ({on: false}));
      const component = renderer.create(<Logo testId="test_logo" />).toJSON();
      expect(component).toMatchSnapshot();
    });
    test(`DEVE renderizar o texto do logo na cor ${colors.white} QUANDO mobile = false e on = true`, async () => {
      mockedUseResponsiveContext.mockClear();
      mockedUseBackgroundContext.mockClear();
      mockedUseResponsiveContext.mockImplementation(() => ({mobile: false}));
      mockedUseBackgroundContext.mockImplementation(() => ({on: true}));
      const component = renderer.create(<Logo testId="test_logo" />).toJSON();
      expect(component).toMatchSnapshot();
    });
    test(`DEVE renderizar o texto do logo na cor ${colors.white} QUANDO mobile = true e on = true`, async () => {
      mockedUseResponsiveContext.mockClear();
      mockedUseBackgroundContext.mockClear();
      mockedUseResponsiveContext.mockImplementation(() => ({mobile: true}));
      mockedUseBackgroundContext.mockImplementation(() => ({on: true}));
      const component = renderer.create(<Logo testId="test_logo" />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
