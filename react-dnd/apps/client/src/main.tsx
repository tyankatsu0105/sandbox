import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as ReactRedux from 'react-redux';
import * as StyledComponents from 'styled-components';

import { App } from './app/app';

import { createStore } from './app/store';
import { theme } from './modules/theme';

import 'minireset.css';

const store = createStore();
ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <StyledComponents.ThemeProvider theme={theme}>
        <App />
      </StyledComponents.ThemeProvider>
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
