const path = require('path');

/**
 * @type {import('@storybook/core/types').StorybookConfig}
 */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-viewport', '@storybook/addon-notes'],

  /**
   *
   * @param {import('webpack').Configuration & import('webpack-dev-server').Configuration} config
   */
  webpackFinal: async (config) => {

    config.devServer = {
      watchContentBase: true,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallback: true,
    };

    config.module.rules[0].use[0].options.sourceType = 'unambiguous';

    config.module.rules.push({
      test: /.\.stories\.tsx$/,
      exclude: /(src)/,
      use: 'raw-loader',
    });
    config.resolve.extensions.push('.stories.tsx');

    config.resolve.alias = {
      '@src': path.resolve(__dirname, '../dist/collection'),
    };

    // Return the altered config
    return config;
  },
};
