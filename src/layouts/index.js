import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'layouts/styles/styles.js';
import { Main } from 'identity/wrappers/Main';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

const Layout = ({ children }) => (
  <main>
    <Navigation />
    <Main>{children()}</Main>
    <Footer />
  </main>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
