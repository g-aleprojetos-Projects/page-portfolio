import React from 'react';
import {Nav} from 'components/nav';
import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Container data-testid={'test_header'}>
      <S.Overlay data-testid={'test_overlay'} />
      <S.Video data-testid={'test_video'} autoPlay loop muted />
      <S.ContainerContent>
        <Nav />
      </S.ContainerContent>
    </S.Container>
  );
};
