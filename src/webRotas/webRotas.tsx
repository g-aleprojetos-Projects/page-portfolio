import * as React from 'react';
import {Header} from 'components/header';
import {useBackgroundContext} from 'context/backgroud';
import {Home} from 'Pages/Home';
import {NotFound} from 'Pages/NotFound';
import {Projetos} from 'Pages/Projetos';
import {Skills} from 'Pages/Skills';
import {Sobre} from 'Pages/Sobre';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import rotas from 'resourses/rotas';
import * as S from './webRotas.styles';

export const WebRotas = () => {
  const {background} = useBackgroundContext();
  return (
    <Router>
      <S.Container backgroundBlack={background} data-testid={'test_web'}>
        <Header />
        <Routes>
          <Route path={rotas.Home} element={<Home />} />
          <Route path={rotas.Projetos} element={<Projetos />} />
          <Route path={rotas.Skills} element={<Skills />} />
          <Route path={rotas.Sobre} element={<Sobre />} />
          <Route path={rotas.NotFound} element={<NotFound />} />
        </Routes>
      </S.Container>
    </Router>
  );
};
