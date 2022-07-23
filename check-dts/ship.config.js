module.exports = {
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --access public`,
  mergeStrategy: { toReleaseBranch: { develop: "master" } },
};
