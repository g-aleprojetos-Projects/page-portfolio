import React from 'react';
import {Header} from 'components/header';
import * as S from './home.styles';

export const Home = () => {
  return (
    <S.Container data-testid={'test_home'}>
      <Header />
      <S.ContainerImagem>
        <S.Imagem />
      </S.ContainerImagem>
    </S.Container>
  );
};
