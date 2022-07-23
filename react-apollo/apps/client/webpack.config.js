/*eslint-disable @typescript-eslint/no-var-requires */

const getWebpackConfig = require('@nrwl/react/plugins/webpack');

/**
  @typedef {import('webpack').Configuration} WebpackConfig
*/
/**
  @typedef {import('webpack-dev-server').Configuration} WebpackDevServeConfig
*/
/**
  @typedef {WebpackConfig & WebpackDevServeConfig} Config
*/

/** @param {Config} config */
module.exports = (config) => {
  // @see https://github.com/nrwl/nx/issues/1511#issuecomment-504790122
  // @nrwl/apolloが使用可能になったら不要
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  });

  // @see https://github.com/nrwl/nx/issues/1511#issuecomment-504790122
  // @nrwl/apolloが使用可能になったら不要
  config.resolve.extensions.push('.graphql');

  // babel-loaderに取り込まれたら削除
  const babelRuleOptions = config.module.rules.find(
    (r) => r.loader === 'babel-loader'
  ).options;
  babelRuleOptions.plugins.push('@babel/plugin-proposal-optional-chaining');
  babelRuleOptions.plugins.push(
    '@babel/plugin-proposal-nullish-coalescing-operator'
  );

  if (process.env.NODE_ENV === 'development') {
    config.devServer.proxy = {
      '/login/auth': {
        target: 'http://localhost:3333/.netlify/functions',
      },
    };
  }

  return getWebpackConfig(config);
};
