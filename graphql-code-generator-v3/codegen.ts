import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: [
    "./src/api/graphql/operations/**/*.graphql",
    "./src/api/graphql/fragments/**/*.graphql",
  ],
  generates: {
    "./src/api/graphql/__generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      /**
       * https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#config-api
       */
      config: {
        skipTypename: true,
        strictScalars: true,
      },
    },
    "./src/api/graphql/operations/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "../__generated/graphql",

        // 該当のoperationのdocumentNodeをそれぞれのディレクトリのbundle.generated.tsに生成する
        extension: ".generated.ts",
        fileName: "bundle",
      },
      plugins: ["typed-document-node"],
      config: {
        typesPrefix: "Types.",
      },
    },
  },
};
export default config;
