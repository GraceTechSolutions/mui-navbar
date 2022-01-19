import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <>
    <CssBaseline/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
