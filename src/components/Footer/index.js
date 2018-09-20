// @flow
import React from 'react';
import Image from '@components/Image';
import {
  FooterContainer,
  Logo,
  FooterWrapper,
  FooterLink,
  FooterLinks,
} from './styles';

const SOCIAL_LINKS = [
  { id: 0, name: 'Twitter', url: 'https://www.twitter.com' },
  {
    id: 1,
    name: 'Instagram',
    url: 'https://www.instagram.com',
  },
];

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Logo>
        {/* <Image src={require('../../../static/images/reel.jpg')} /> */}
        {/* <Image src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png" /> */}
        GENERIC LOGO
      </Logo>
      <FooterLinks>
        {SOCIAL_LINKS.map(({ name, url, id }) => (
          <FooterLink>
            <a key={id} href={url}>
              {name}
            </a>
          </FooterLink>
        ))}
      </FooterLinks>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
