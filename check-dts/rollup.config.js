import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: [
    {
      dir: './dist',
      format: 'esm',
      entryFileNames: 'esm.js',
    },
    {
      dir: './dist',
      format: 'cjs',
      entryFileNames: 'common.js',
    }
  ],
  plugins: [
    terser()
  ]
};