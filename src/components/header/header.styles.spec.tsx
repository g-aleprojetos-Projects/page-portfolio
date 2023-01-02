import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Header.styles';

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
    const content = renderer.create(<S.ContainerContent />).toJSON();
    expect(content).toMatchSnapshot();
  });
});
