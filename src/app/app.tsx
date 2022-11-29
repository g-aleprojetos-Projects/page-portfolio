import * as React from 'react';
import {BackgroundProvide} from 'context/backgroud';
import {ResponsiveProvide} from 'context/mobileWindow';
import {WebRotas} from 'webRotas';

export const App = () => {
  return (
    <BackgroundProvide>
      <ResponsiveProvide>
        <WebRotas />
      </ResponsiveProvide>
    </BackgroundProvide>
  );
};
