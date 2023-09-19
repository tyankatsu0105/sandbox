const fs = require("node:fs");

const CONST = {
  input: "src/api/graphql/operations",
  inputFileExtension: ".generated.ts",
  output: "src/api/graphql/operations/index.ts",
};

const getAllOperatoinFiles = () => {
  const operationFiles = fs.readdirSync(CONST.input);
  const allOperatoinFiles = operationFiles.filter((file) =>
    file.endsWith(CONST.inputFileExtension)
  );

  return { allOperatoinFiles };
};

const main = () => {
  const { allOperatoinFiles } = getAllOperatoinFiles();

  fs.writeFileSync(
    CONST.output,
    allOperatoinFiles
      .map((file) => `export * from './${file.replace(".ts", "")}'`)
      .join("\n")
  );

  console.info(`
✅ generatedファイルを${CONST.output}にまとめました`);
};

main();
