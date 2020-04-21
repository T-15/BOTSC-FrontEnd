import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import './css/Custom.scss';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
