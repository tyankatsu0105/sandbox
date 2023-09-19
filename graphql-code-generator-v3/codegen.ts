import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: [
    "./src/api/graphql/operations/**/*.graphql",
    "./src/api/graphql/fragments/**/*.graphql",
  ],
  generates: {
    "./src/api/graphql/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      /**
       * https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#config-api
       */
      config: {
        skipTypename: true,
        strictScalars: true,
      },
    },
    "./src/api/graphql": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "generated/graphql",
      },
      plugins: ["typed-document-node"],
      config: {
        typesPrefix: "Types.",
      },
    },
  },
};
export default config;
