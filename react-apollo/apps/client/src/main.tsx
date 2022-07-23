import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as Sentry from '@sentry/browser';

import { client } from './graphql';
import { ApolloProvider } from '@apollo/client';

import { customTheme } from './styles/material-ui/customTheme';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { SnackbarProvider } from 'notistack';

import { App } from './app/app';

import { environment } from './environments/environment';

Sentry.init({
  dsn: environment.sentry.dsn,
  environment: environment.env,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={5}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
