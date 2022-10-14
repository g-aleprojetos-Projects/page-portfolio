import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './home.styles';

describe('Home.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot', () => {
    const containerContent = renderer.create(<S.ContainerContent />).toJSON();
    expect(containerContent).toMatchSnapshot();
  });
});
