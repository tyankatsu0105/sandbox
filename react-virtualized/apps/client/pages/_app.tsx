import 'minireset.css';

import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import * as Layouts from '~client/layouts';
import { GlobalStyle } from '~client/styles/global-style';
import { theme } from '~client/styles/theme';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layouts.Header.Component />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
