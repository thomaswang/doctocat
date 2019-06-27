const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: path.resolve('./src/docs'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'nav',
        path: path.resolve('./src/data/nav.yml'),
      },
    },
  ],
}
