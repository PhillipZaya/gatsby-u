module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@Phillip',
    person: {name: 'Phillip', age: 31},
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'Phillip', age: 31 },
      { name: 'Jose', age: 33 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
  ],
}
