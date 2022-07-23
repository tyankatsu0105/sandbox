module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
  ],
  rules: {
    'vue/no-arrow-functions-in-watch': 'error'
  }
}
