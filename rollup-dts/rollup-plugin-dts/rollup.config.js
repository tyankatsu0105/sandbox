import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

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
  },
  {
    input: "./declaration/src/index.d.ts",
    output: [
      {
        file: packageJson.typings,
        format: "es",
      },
    ],
    plugins: [dts()],
  },
];

export default options;