import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'layouts/styles/styles.js';
import { Main, LayoutWrapper } from 'identity/wrappers/Main';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Navigation />
    <Main>{children}</Main>
    <Footer />
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
