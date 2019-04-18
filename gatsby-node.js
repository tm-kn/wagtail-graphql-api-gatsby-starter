/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(` {
      wagtail {
        pages {
          wagtailcore {
            page {
              id
              url
              pageType
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      throw errors;
    }

    data.wagtail.pages.wagtailcore.page.forEach(({ url, id, pageType }) => {
      createPage({
        path: url,
        component: path.resolve('src', 'pages', 'base-page.js'),
        context: {
          pageID: id,
          pageType: pageType
        }
      });
    });
  });
};
