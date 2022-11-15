import React from 'react';
import {Header} from 'components/header';

import * as S from './home.styles';
import {useBackgroundContext} from 'context/backgroud';

export const Home = () => {
  const {on} = useBackgroundContext();
  return (
    <S.Container on={on} data-testid={'test_home'}>
      <Header />
    </S.Container>
  );
};
