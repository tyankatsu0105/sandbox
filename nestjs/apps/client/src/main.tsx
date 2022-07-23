import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';

import * as ReactRouterDOM from 'react-router-dom';
import { store } from './app/store';

import { App } from './app/app';
ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <ReactRouterDOM.BrowserRouter>
        <App />
      </ReactRouterDOM.BrowserRouter>
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
