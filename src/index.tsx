import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './Pages/Home';
import {ResponsiveProvide} from 'context/mobileWindow';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ResponsiveProvide>
      <Home />
    </ResponsiveProvide>
  </React.StrictMode>,
);
