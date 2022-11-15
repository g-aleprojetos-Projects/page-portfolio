import React from 'react';
import {useResponsiveContext} from 'context/mobileWindow';
import * as S from './hamburger.styles';
import {useBackgroundContext} from 'context/backgroud';

export interface PropsHumburger {
  openMenu?: boolean;
  mudarEstado: () => void;
}

export const Hamburger = (props: PropsHumburger) => {
  const {mobile} = useResponsiveContext();
  const {on} = useBackgroundContext();
  const {openMenu = false, mudarEstado} = props;

  return (
    <S.Container
      data-testid={'test_hamburger'}
      onClick={mudarEstado}
      mobile={mobile}>
      <S.SpanSuperior open={openMenu} backgroumdDark={on} />
      <S.SpanMeio open={openMenu} backgroumdDark={on} />
      <S.SpanInferior open={openMenu} backgroumdDark={on} />
    </S.Container>
  );
};
