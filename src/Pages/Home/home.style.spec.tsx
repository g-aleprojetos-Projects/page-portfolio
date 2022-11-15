import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './home.styles';

describe('Home.styles', () => {
  test('Container DEVE ser igual ao snapshot passando true em "on"', () => {
    const container = renderer.create(<S.Container on={true} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('Container DEVE ser igual ao snapshot passando false em "on"', () => {
    const container = renderer.create(<S.Container on={false} />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
