/* eslint-disable @typescript-eslint/no-var-requires */
// SEE: https://www.apollographql.com/docs/devtools/editor-plugins/

const path = require("node:path");

module.exports = {
  client: {
    includes: [
      path.join(process.cwd(), `src/api/graphql/fragments/**/*.graphql`),
      path.join(process.cwd(), `src/api/graphql/operations/**/*.graphql`),
    ],
    service: {
      name: "poke",
      url: "https://beta.pokeapi.co/graphql/v1beta",
    },
  },
};
