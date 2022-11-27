import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './RightNav.styles';

describe('RightNav.styles', () => {
  test('ContainerNav DEVE ser igual ao snapshot', () => {
    const containerNav = renderer.create(<S.ContainerNav />).toJSON();
    expect(containerNav).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "false", mobile for igual a "false" e backgroundDark for "false" ', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={false}
          mobile={false}
          backgroundDark={false}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "false", mobile for igual a "false" e backgroundDark for "true"', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={false}
          mobile={false}
          backgroundDark={true}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "false", mobile for igual a "true" e backgroundDark for "false"', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={false}
          mobile={true}
          backgroundDark={false}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "false", mobile for igual a "true" e for backgroundDark for "true" ', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={false}
          mobile={true}
          backgroundDark={true}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "true", mobile for igual a "false" e for backgroundDark for "false" ', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={true}
          mobile={false}
          backgroundDark={false}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "true", mobile for igual a "false" e for backgroundDark for "true" ', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={true}
          mobile={false}
          backgroundDark={true}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "true", mobile for igual a "true" e for backgroundDark for "false" ', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={true}
          mobile={true}
          backgroundDark={false}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });
  test('ContainerContent DEVE ser igual ao snapshot com openRightNav passado como "true", mobile for igual a "true" e for backgroundDark for "true" ', () => {
    const containerContent = renderer
      .create(
        <S.ContainerContent
          openRightNav={true}
          mobile={true}
          backgroundDark={true}
        />,
      )
      .toJSON();
    expect(containerContent).toMatchSnapshot();
  });

  test('Texto DEVE ser igual ao snapshot', () => {
    const texto = renderer.create(<S.Texto />).toJSON();
    expect(texto).toMatchSnapshot();
  });
  test('Menu DEVE ser igual ao snapshot se mobile for igual a "true"', () => {
    const menu = renderer.create(<S.Menu mobile={true} />).toJSON();
    expect(menu).toMatchSnapshot();
  });
  test('Menu DEVE ser igual ao snapshot se mobile for igual a "false"', () => {
    const menu = renderer.create(<S.Menu mobile={false} />).toJSON();
    expect(menu).toMatchSnapshot();
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
