// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

import { Main, LayoutWrapper } from '@identity/wrappers/Main';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import SnowStorm from 'react-snowstorm';
import NoSSR from 'react-no-ssr';
import './styles/styles.js';

type Props = {
  children: React.Node,
};

const Layout = ({ children }: Props) => (
  <LayoutWrapper>
    <NoSSR>
      <SnowStorm
        animationInterval={120}
        snowStick={false}
        followMouse={false}
        freezeOnBlur={false}
      />
    </NoSSR>
    {/* <Navigation /> */}
    <Main>{children}</Main>
    {/* <Footer /> */}
  </LayoutWrapper>
);

export default Layout;
