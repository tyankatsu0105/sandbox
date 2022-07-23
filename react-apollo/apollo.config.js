const path = require('path');
const clientName = 'client';

require('dotenv').config();


module.exports = {
  client: {
    includes: [path.join(process.cwd(), `apps/${clientName}/**/*.graphql`)],
    service: {
      name: 'github',
      url: 'https://api.github.com/graphql',
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      },
      skipSSLValidation: true
    }
  }
};
