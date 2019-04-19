import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const HomePage = ({ data }) => {
  const page = data.wagtail.pages.home.homePage[0];

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
    <p>Page statically generated with data provided from Wagtail CMS.</p>
    <a href="https://wagtail.io">
      <img src={require('../images/wagtail.svg')} style={{ width: '50%' }} />
    </a>
    {renderPageList(page.children, 'See')}
  </Layout>;
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query($pageID: ID) {
    wagtail {
      pages {
        home {
          homePage(id: $pageID) {
            id
            title
            seoTitle
            seoDescription
            children {
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

export default HomePage;
