import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Routes />
  </BrowserRouter>, 
  document.getElementById('root')
)

// serviceWorker.unregister();
