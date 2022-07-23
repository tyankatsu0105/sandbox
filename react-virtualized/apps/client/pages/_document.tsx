import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <title>
            Sandbox React Virtualized | react-virtualizedで色んなものを作る
          </title>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
CustomDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collectStyles(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
