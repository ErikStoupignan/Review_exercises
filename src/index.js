import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hooks from './components/Hooks.js';
import UseStateExample from './components/UseStateExample';
import Props from './components/Props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    {/* <Hooks /> */}
    <Props />

  </React.StrictMode>
);


