import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hooks from './components/Hooks.js';
import { Ejemplo as UseStateExample } from './components/UseStateExample';
import Props from './components/PropsFatherToSon';
import { Ejemplo2 } from './components/UseStateExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    {/* <Hooks /> */}
    {/* <Props /> */}
    <Ejemplo2 />
  </React.StrictMode>
);


