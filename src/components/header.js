import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <StaticQuery
        query={graphql`
          query {
            wagtail {
              pages {
                wagtailcore {
                  page(depth: 3, showInMenus: true) {
                    id
                    title
                    url
                  }
                }
              }
            }
          }
        `}
        render={({ wagtail }) => (
          <nav className='main-nav'>
            <ul>
              {wagtail.pages.wagtailcore.page.map(page => <li key={page.id}>
                <Link to={page.url}>{page.title}</Link>
              </li>)}
            </ul>
          </nav>
        )}
      />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
