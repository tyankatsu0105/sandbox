const babelJest = require("babel-jest");

/** @type import('babel__core').TransformOptions */
const transformOptions = {
    plugins: ["@babel/plugin-transform-modules-commonjs"]
};

module.exports = babelJest.createTransformer(transformOptions);