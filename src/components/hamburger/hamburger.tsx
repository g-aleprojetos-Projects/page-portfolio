import React from 'react';
import {useResponsiveContext} from 'context/mobileWindow';
import * as S from './hamburger.styles';

export interface PropsHumburger {
  openMenu?: boolean;
  mudarEstado: () => void;
}

export const Hamburger = (props: PropsHumburger) => {
  const {mobile} = useResponsiveContext();
  const {openMenu = false, mudarEstado} = props;

  return (
    <S.Container
      data-testid={'test_hamburger'}
      onClick={mudarEstado}
      mobile={mobile}>
      <S.SpanSuperior open={openMenu} />
      <S.SpanMeio open={openMenu} />
      <S.SpanInferior open={openMenu} />
    </S.Container>
  );
};
