import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hooks from './components/Hooks.js';
import { Ejemplo as UseStateExample } from './components/UseStateExample';
import Props from './components/PropsFatherToSon';
import { Ejemplo2 as UseRefExample } from './components/UseStateExample';
import { Ejemplo3 as UseContextExample } from './components/UseStateExample';
import { Padre } from './components/PropsSonToFather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseStateExample />
    <Hooks />
    <Props />
    <UseRefExample />
    <UseContextExample />
    <Padre />
  </React.StrictMode>
);


