import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BasePage = ({ data }) => {
  const page = data.wagtail.pages.wagtailcore.page[0];

  const renderPageList = (pages, title) => {
    if (!pages || pages.length === 0) {
      return;
    }

    let titleHeading;

    if (title) {
      titleHeading = <h2>{title}</h2>;
    }

    return <>
      {titleHeading}
      <ul>
        {pages.map(page => <li key={page.id}>
          <Link to={page.url}>{page.title}</Link>
        </li>)}
      </ul>
    </>;
  };

  return <Layout>
    <SEO title={page.seoTitle} description={page.seoDescription} />
    <h1>{page.title}</h1>
    {renderPageList([page.parent].filter(x => x), 'Parent')}
    {renderPageList(page.ancestors, 'Ancestors')}
    {renderPageList(page.children, 'Children')}
    {renderPageList(page.previousSiblings, 'Previous siblings')}
    {renderPageList(page.nextSiblings, 'Next siblings')}
    {renderPageList(page.descendants, 'Descendants')}
  </Layout>;
};

BasePage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query($pageID: ID) {
    wagtail {
      pages {
        wagtailcore {
          page(id: $pageID) {
            id
            title
            seoTitle
            seoDescription

            parent {
              title
              id
              url
            }

            children {
              title
              id
              url
            }

            previousSiblings {
              title
              id
              url
            }

            nextSiblings {
              title
              id
              url
            }

            ancestors {
              id
              title
              url
            }

            descendants {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`;

export default BasePage;
