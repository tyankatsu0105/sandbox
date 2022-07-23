import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

/** @type import('rollup').RollupOptions[] */
const options = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      typescript(),
    ],
  }
];

export default options;