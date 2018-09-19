import React from 'react';
import Link from 'gatsby-link';
import { Main } from 'identity/wrappers/Main';
import {
  PageWrapper,
  PageSection,
  SectionText,
  HeaderText,
} from 'identity/pageSections';
import { H1 } from './styles';
import Image from 'components/Image';
import Layout from 'layouts/index';

const Home = () => (
  <Layout>
    <PageWrapper fullWidth>
      <HeaderText textAlign="left">
        <H1>jsfowles - Gatsby Boilerplate</H1>
      </HeaderText>
      <PageSection alignSection="left">
        <SectionText textAlign="left">Hi</SectionText>
      </PageSection>
    </PageWrapper>
  </Layout>
);

export default Home;
