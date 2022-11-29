import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './Nav.styles';

describe('Header.styles', () => {
  test('Container DEVE ser igual ao snapshot se mobile for igual a "true"', () => {
    const container = renderer.create(<S.Container mobile={true} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Container DEVE ser igual ao snapshot se mobile for igual a "false"', () => {
    const container = renderer.create(<S.Container mobile={false} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Logo DEVE ser igual ao snapshot se mobile for igual a "true"', () => {
    const container = renderer
      .create(<S.ContainerLogo mobile={true} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Logo DEVE ser igual ao snapshot se mobile for igual a "false"', () => {
    const container = renderer
      .create(<S.ContainerLogo mobile={false} />)
      .toJSON();
    expect(container).toMatchSnapshot();
  });
});
