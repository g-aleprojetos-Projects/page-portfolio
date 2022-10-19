import React from 'react';
import * as S from './hamburger.styles';

export interface PropsHumburger {
  openMenu?: boolean;
  mudarEstado?: () => void;
}

export const Hamburger = (props: PropsHumburger) => {
  const {openMenu = false, mudarEstado} = props;

  return (
    <S.Container data-testid={'test_hamburger'} onClick={mudarEstado}>
      <S.SpanSuperior open={openMenu} />
      <S.SpanMeio open={openMenu} />
      <S.SpanInferior open={openMenu} />
    </S.Container>
  );
};
