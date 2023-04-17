import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components';
import './i18n';

const Global=createGlobalStyle`
*{
  margin:0;
  pading:0;
  box-sizing: border-box;
}

@media(max-width:1050px){
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <App  />
  </React.StrictMode>
);

