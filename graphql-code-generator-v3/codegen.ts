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
      /**
       * https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#config-api
       */
      config: {
        skipTypename: true,
        strictScalars: true,
      },
    },
  },
};
export default config;
