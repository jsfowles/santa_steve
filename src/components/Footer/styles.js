import styled from 'react-emotion';
import * as c from '@identity/constants';

export const FooterContainer = styled.footer({
  flexShrink: 0,
  height: 120,
  zIndex: 1000,
  width: '100%',
  background: c.COLORS.white,
  borderTop: `1px solid  ${c.COLORS.black007}`,
});

export const FooterWrapper = styled.div({
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

export const Logo = styled.div({
  width: 120,
});

export const FooterLink = styled.div({
  padding: '0 10px',
});

export const FooterLinks = styled.div({
  display: 'flex',
});
