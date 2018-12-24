import React from 'react';

import Layout from '@layouts';
import TypeScale from '@identity/type';
import ChristmasTree from '@components/Tree';
import ReactRevealText from 'react-reveal-text';
import {
  PageWrapper,
  PageSection,
  SectionText,
  HeaderText,
} from '@identity/pageSections';

import { TreeContainer } from './styles';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return (
      <Layout>
        <PageWrapper fullWidth>
          <HeaderText textAlign="center">
            <TypeScale.H1 color="white">
              <ReactRevealText show={this.state.show} delayMin={0}>
                Merry Christmas
              </ReactRevealText>
            </TypeScale.H1>
          </HeaderText>
          <PageSection alignSection="center">
            <SectionText textAlign="left">
              <HeaderText textAlign="center">
                <TypeScale.H2 color="white">
                  <ReactRevealText show={this.state.show} delayMin={0}>
                    From: Eleanor, Nolan, Jax, Peri, and Jacob
                  </ReactRevealText>
                </TypeScale.H2>
              </HeaderText>
            </SectionText>
          </PageSection>
          <TreeContainer>
            <ChristmasTree />
          </TreeContainer>
        </PageWrapper>
      </Layout>
    );
  }
}
