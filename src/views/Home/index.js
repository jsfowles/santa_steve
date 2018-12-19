// @flow
import React from 'react';
import Image from '@components/Image';
import Layout from '@layouts';
import TypeScale from '@identity/type';

import {
  PageWrapper,
  PageSection,
  SectionText,
  HeaderText,
  ImageWrapper,
} from '@identity/pageSections';
import { H1, H3, P } from './styles';

const Home = () => (
  <Layout>
    <PageWrapper fullWidth>
      <HeaderText textAlign="center">
        <TypeScale.H1 color="white">Merry Christmas</TypeScale.H1>
      </HeaderText>
      <PageSection alignSection="center">
        <SectionText textAlign="left">
          <HeaderText textAlign="center">
            <TypeScale.H3 color="white">
              From: Eleanor, Nolan, Jax, Peri, and Jacob
            </TypeScale.H3>
          </HeaderText>
          <ImageWrapper width="60px" />
          {/* 
          <TypeScale.P color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dignissim eros in enim bibendum pharetra. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Donec in vulputate arcu.
            Vestibulum sodales sagittis dolor non hendrerit. Nunc sagittis
            aliquet egestas. Suspendisse potenti. Pellentesque sit amet egestas
            sapien, sit amet mollis sem. Cras sed arcu justo. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec rutrum tempor lobortis. Curabitur tellus
            mauris, condimentum a bibendum sed, cursus quis purus. Donec eget
            neque vel ex elementum maximus. Donec quis lorem posuere eros
            viverra pellentesque sed accumsan nulla. Aliquam luctus consectetur
            nisi in bibendum. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Aliquam maximus arcu eget
            sem lacinia pulvinar. Etiam massa magna,
          </TypeScale.P>
          <TypeScale.P color="white">
            Vestibulum ullamcorper bibendum sagittis. Quisque vehicula volutpat
            lorem vel hendrerit. Quisque neque turpis, sodales et accumsan eget,
            blandit eu est. Nunc posuere ante et ullamcorper faucibus. Nulla
            tempor eleifend magna et pharetra. Sed imperdiet malesuada leo,
            ornare vestibulum dui mollis id. Phasellus eget magna sollicitudin,
            pellentesque dolor vel, mollis erat. Proin et euismod sapien. Nulla
            id dolor urna. Cras vulputate sed arcu nec iaculis. Mauris dictum
            blandit sapien sit amet sodales. Praesent eget accumsan leo, ac
            lobortis justo. Maecenas ut tristique tellus, vitae sagittis arcu.
            Curabitur mattis libero et eros faucibus, id egestas est venenatis.
            Donec ut mollis risus. Nunc posuere pretium diam vitae accumsan.
            Vestibulum eu nibh ligula. Phasellus dapibus rhoncus metus eget
            consequat. Donec sed ex vel elit euismod pellentesque. Ut nec congue
            elit, non efficitur lorem. In et euismod ligula. Fusce pellentesque
            metus id ligula ultricies pharetra. Mauris nec erat in leo feugiat
            egestas. Donec tincidunt erat nec nulla pretium congue. Mauris
            venenatis lectus in urna bibendum, at
          </TypeScale.P>
          <TypeScale.P color="white">
            ullamcorper velit laoreet. Integer eu facilisis velit. Maecenas
            pulvinar, diam id vehicula tempus, ipsum odio auctor orci, in congue
            odio odio ut augue. Curabitur ut massa felis. Etiam viverra purus ac
            eleifend maximus. Maecenas tincidunt placerat magna at dictum. Sed
            vel vehicula ante. Integer eu neque vulputate, convallis felis
            vitae, convallis urna. Curabitur dictum egestas tellus ac cursus.
            Vestibulum molestie bibendum consequat. Cras quam lacus, cursus quis
            iaculis id, consequat sit amet nibh. Phasellus eget neque eu risus
            ultrices iaculis in nec lectus. In id suscipit velit. Ut venenatis
            nibh maximus quam ullamcorper, in ultricies enim fermentum.
            Curabitur bibendum nec lorem non porttitor. Curabitur sollicitudin
            elit et justo rutrum blandit. Nam imperdiet, dui sodales placerat
            mollis, lectus odio eleifend ante, in faucibus massa nisl nec
            tellus.
          </TypeScale.P> */}
        </SectionText>
      </PageSection>
    </PageWrapper>
  </Layout>
);

export default Home;
