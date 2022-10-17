import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './header.styles';

describe('Header.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Overlay DEVE ser igual ao snapshot', () => {
    const overlay = renderer.create(<S.Overlay />).toJSON();
    expect(overlay).toMatchSnapshot();
  });
  test('Video DEVE ser igual ao snapshot', () => {
    const video = renderer.create(<S.Video />).toJSON();
    expect(video).toMatchSnapshot();
  });
  test('Content DEVE ser igual ao snapshot', () => {
    const content = renderer.create(<S.Content />).toJSON();
    expect(content).toMatchSnapshot();
  });
  test('HeaderRight DEVE ser igual ao snapshot', () => {
    const headerRight = renderer.create(<S.HeaderRight />).toJSON();
    expect(headerRight).toMatchSnapshot();
  });
  test('HeaderLeft DEVE ser igual ao snapshot', () => {
    const headerLeft = renderer.create(<S.HeaderLeft />).toJSON();
    expect(headerLeft).toMatchSnapshot();
  });
  test('Item DEVE ser igual ao snapshot', () => {
    const item = renderer.create(<S.Item />).toJSON();
    expect(item).toMatchSnapshot();
  });
  test('Flag DEVE ser igual ao snapshot', () => {
    const flag = renderer.create(<S.Flag />).toJSON();
    expect(flag).toMatchSnapshot();
  });
  test('FlagBrasil DEVE ser igual ao snapshot', () => {
    const flagBrasil = renderer.create(<S.FlagBrasil />).toJSON();
    expect(flagBrasil).toMatchSnapshot();
  });
});
