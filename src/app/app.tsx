import * as React from 'react';
import {BackgroundProvide} from 'context/backgroud';
import {WebRotas} from 'webRotas';
import {BrowserRouter} from 'react-router-dom';

export const App = () => {
  return (
    <BackgroundProvide>
      <BrowserRouter>
        <WebRotas />
      </BrowserRouter>
    </BackgroundProvide>
  );
};
