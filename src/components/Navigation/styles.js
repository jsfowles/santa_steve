import styled from 'react-emotion';
import * as c from '@identity/constants';

export const Nav = styled.nav({
  height: 80,
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  width: '100%',
  background: c.COLORS.white,
  borderBottom: `1px solid  ${c.COLORS.black007}`,
});

export const NavWrapper = styled.div({
  height: '100%',
  margin: '0 7vw',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: c.HEADER_WIDTH,

  [c.DESKTOP]: {
    margin: '0 auto',
  },
});

export const Logo = styled.figure({
  width: 120,
});

export const NavLink = styled.div({
  padding: '0 15px',
});

export const NavLinks = styled.div({
  display: 'flex',
});
