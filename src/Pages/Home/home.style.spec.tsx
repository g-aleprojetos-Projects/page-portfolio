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
  test('ContainerImagem DEVE ser igual ao snapshot', () => {
    const containerImagem = renderer.create(<S.ContainerImagem />).toJSON();
    expect(containerImagem).toMatchSnapshot();
  });
  test('Imagem DEVE ser igual ao snapshot', () => {
    const imagem = renderer.create(<S.Imagem />).toJSON();
    expect(imagem).toMatchSnapshot();
  });
});
