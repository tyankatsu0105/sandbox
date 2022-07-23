import plugin from '../lib/plugin';
import pluginTester from 'babel-plugin-tester';
import path from 'path';

pluginTester({
  plugin,
  fixtures: path.resolve(__dirname, '__fixtures__'),
});