import React from 'react';
import * as ReactRedux from 'react-redux';

import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '~client/libs/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppProps } from 'next/app';

import { createStore } from '~client/store';

import * as Layouts from '~client/layouts';

const store = createStore();

const CustomApp = ({ Component, pageProps }: AppProps) => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ReactRedux.Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <Layouts.Container.Component>
              <Layouts.Header.Component />
              <Layouts.Main.Component>
                <Component {...pageProps} />
              </Layouts.Main.Component>
            </Layouts.Container.Component>
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </ReactRedux.Provider>
  );
};

export default CustomApp;
