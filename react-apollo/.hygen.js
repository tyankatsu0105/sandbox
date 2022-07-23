module.exports = {
  templates: `${__dirname}/_hygen`,
  helpers: {
    toUpperCamelCase: (name) => name.split('-').map(item => {
      const [first, ...rest] = item
      return `${first.toUpperCase()}${rest.join('')}`
    }).join('')
  }
}
