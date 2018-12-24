import styled from 'react-emotion';
import * as s from '@identity/spacing';
import * as c from '@identity/constants';

export const TreeContainer = styled.div({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  zIndex: -1,
  '& svg': {
    //   height:
    // [c.TABLET]: {
    //   height: 300,
    // },
    // [c.DESKTOP]: {
    height: '60vh',
    // },
  },
});
