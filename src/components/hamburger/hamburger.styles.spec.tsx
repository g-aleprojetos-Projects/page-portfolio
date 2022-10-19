import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './hamburger.styles';

describe('Hamburger.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('SpanSuperior DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.SpanSuperior />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('SpanSuperior DEVE ser igual ao snapshot QUANDO "open" for "true"', () => {
    const container = renderer.create(<S.SpanSuperior open={true} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('SpanMeio DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.SpanMeio />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('SpanMeio DEVE ser igual ao snapshot QUANDO "open" for "true"', () => {
    const container = renderer.create(<S.SpanMeio open={true} />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('SpanInferior DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.SpanInferior />).toJSON();
    expect(container).toMatchSnapshot();
  });
  test('SpanInferior DEVE ser igual ao snapshot QUANDO "open" for "true"', () => {
    const container = renderer.create(<S.SpanInferior open={true} />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
