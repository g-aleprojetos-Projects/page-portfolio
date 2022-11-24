import React from 'react';
import {Header} from 'components/header';

import * as S from './home.styles';
import {useBackgroundContext} from 'context/backgroud';

export const Home = () => {
  const {background} = useBackgroundContext();
  return (
    <S.Container backgroundBlack={background} data-testid={'test_home'}>
      <Header />
    </S.Container>
  );
};
