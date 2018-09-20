// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

import { Main, LayoutWrapper } from '@identity/wrappers/Main';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

import './styles/styles.js';

type Props = {
  children: React.Node,
};

const Layout = ({ children }: Props) => (
  <LayoutWrapper>
    <Navigation />
    <Main>{children}</Main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
