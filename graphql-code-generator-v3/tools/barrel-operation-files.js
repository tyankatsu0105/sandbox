const fs = require("node:fs");

const CONST = {
  inputFileExtension: ".generated.ts",

  operations: {
    query: {
      input: "src/api/graphql/operations/query",
      output: "src/api/graphql/operations/query/index.ts",
    },
  },

  fragments: {
    input: "src/api/graphql/fragments",
    output: "src/api/graphql/fragments/index.ts",
  },
};

const getGeneratedFileNames = () => {
  const query = fs
    .readdirSync(CONST.operations.query.input)
    .filter((file) => file.endsWith(CONST.inputFileExtension));

  const fragments = fs
    .readdirSync(CONST.fragments.input)
    .filter((file) => file.endsWith(CONST.inputFileExtension));

  return { operations: { query }, fragments };
};

const generateEntryFile = (output, fileNames) => {
  try {
    fs.writeFileSync(
      output,
      fileNames
        .map((file) => `export * from './${file.replace(".ts", "")}'`)
        .join("\n")
    );

    console.info(`
✅ generatedファイルを${output}にまとめました`);
  } catch (error) {
    console.error(`
❌ generatedファイルを${output}にまとめるのに失敗しました`);
    throw new Error(error);
  }
};

const main = () => {
  const { fragments, operations } = getGeneratedFileNames();

  /**
   * query
   */
  generateEntryFile(CONST.operations.query.output, operations.query);

  /**
   * fragments
   */
  generateEntryFile(CONST.fragments.output, fragments);
};

main();
