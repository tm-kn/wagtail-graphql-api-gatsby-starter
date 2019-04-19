/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const PAGE_TYPES = {
  'home.HomePage': path.resolve('src', 'pages', 'home-page.js')
};

function getComponentPathForType (pageType) {
  return PAGE_TYPES[pageType] || path.resolve('src', 'pages', 'base-page.js');
}

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
        component: getComponentPathForType(pageType),
        context: {
          pageID: id
        }
      });
    });
  });
};
