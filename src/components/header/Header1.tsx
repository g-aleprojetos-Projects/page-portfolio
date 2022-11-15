import React from 'react';
import {Nav} from 'components/nav';
import {useResponsiveContext} from 'context/mobileWindow';
import * as S from './Header1.styles';

export const Header = () => {
  const {mobile} = useResponsiveContext();
  return (
    <S.Container data-testid={'test_header'} mobile={mobile}>
      <S.Overlay data-testid={'test_overlay'} mobile={mobile} />
      <S.Video data-testid={'test_video'} autoPlay loop muted mobile={mobile} />
      <S.ContainerContent>
        <Nav />
      </S.ContainerContent>
    </S.Container>
  );
};
