// @flow
import React from 'react';
import Link from 'gatsby-link';
import Image from '@components/Image';
import { Nav, Logo, NavWrapper, NavLink, NavLinks } from './styles';

const ROUTES = [
  { id: 0, name: 'Home', path: '/' },
  {
    id: 1,
    name: 'Page',
    path: '/page',
  },
];

const Navigation = () => (
  <Nav>
    <NavWrapper>
      <Logo>
        {/* <Image src={require('../../../static/images/reel.jpg')} /> */}
        {/* <Image src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png" /> */}
        GENERIC LOGO
      </Logo>
      <NavLinks>
        {ROUTES.map(({ name, path, id }) => (
          <Link key={id} to={path}>
            <NavLink>{name}</NavLink>
          </Link>
        ))}
      </NavLinks>
    </NavWrapper>
  </Nav>
);

export default Navigation;
