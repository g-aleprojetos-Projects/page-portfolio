import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Header.styles';

describe('Header.styles', () => {
  test('Container DEVE ser igual ao snapshot se mobile for igual a "true"', () => {
    const container = renderer.create(<S.Container mobile={true} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Container DEVE ser igual ao snapshot se mobile for igual a "false"', () => {
    const container = renderer.create(<S.Container mobile={false} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Overlay DEVE ser igual ao snapshot se mobile for igual a "true"', () => {
    const overlay = renderer.create(<S.Overlay mobile={true} />).toJSON();
    expect(overlay).toMatchSnapshot();
  });
  test('Overlay DEVE ser igual ao snapshot se mobile for igual a "false"', () => {
    const overlay = renderer.create(<S.Overlay mobile={false} />).toJSON();
    expect(overlay).toMatchSnapshot();
  });
  test('Video DEVE ser igual ao snapshot se mobile for igual a "true"', () => {
    const video = renderer.create(<S.Video mobile={true} />).toJSON();
    expect(video).toMatchSnapshot();
  });
  test('Video DEVE ser igual ao snapshot se mobile for igual a "false"', () => {
    const video = renderer.create(<S.Video mobile={false} />).toJSON();
    expect(video).toMatchSnapshot();
  });
  test('Content DEVE ser igual ao snapshot', () => {
    const content = renderer.create(<S.ContainerContent />).toJSON();
    expect(content).toMatchSnapshot();
  });
});
