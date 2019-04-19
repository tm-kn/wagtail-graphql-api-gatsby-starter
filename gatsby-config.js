require('dotenv').config();

function getWagtailGraphQLEndpoint () {
  url = process.env.WAGTAIL_GRAPHQL_ENDPOINT;
  if (!url) {
    throw new Error("You need to set WAGTAIL_GRAPHQL_ENDPOINT.");
  }
  return url;
}

module.exports = {
  siteMetadata: {
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WAGTAIL',
        fieldName: 'wagtail',
        url: getWagtailGraphQLEndpoint()
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
