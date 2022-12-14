import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import GlobalStyle from './style/global_style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
