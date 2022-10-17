import React from 'react';
import * as S from './header.styles';

export const Header = () => {
  return (
    <S.Container data-testid={'test_header'}>
      <S.Overlay />
      <S.Video data-testid={'test_video'} autoPlay loop muted />
      <S.Content>
        <S.HeaderRight>
          <S.Item data-testid={'test_logo'}>Logo</S.Item>
        </S.HeaderRight>
        <S.HeaderLeft>
          <S.Item>Home</S.Item>
          <S.Item>Skills</S.Item>
          <S.Item>Projetos</S.Item>
          <S.Item>Sobre</S.Item>
          <S.Flag>
            <S.FlagBrasil data-testid={'test_flag_Brasil'} />
          </S.Flag>
          <S.Item data-testid={'test_toggle'}>ToggleSwitch</S.Item>
        </S.HeaderLeft>
      </S.Content>
    </S.Container>
  );
};
