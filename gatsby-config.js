module.exports = {
  siteMetadata: {
    title: 'Gatsby With Apollo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi.com/graphql',
      },
    },
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `./gatsby-graphql.ts`,
    //     documentPaths: [
    //       './src/graphql/*.graphql',
    //       './node_modules/gatsby-*/**/*.js',
    //     ],
    //   },
    // },
  ],
};
