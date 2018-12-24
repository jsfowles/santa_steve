import styled from 'react-emotion';

import * as s from '../spacing';
import * as c from '../constants';
import { remCalc } from '@lib/styleMethods';

export const Main = styled.main(
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    flex: '1 0 auto',
    paddingTop: 80,
    paddingBottom: 80,
    position: 'relative',
    overflow: 'hidden',

    [c.TABLET]: {
      paddingTop: 60,
    },

    [c.DESKTOP_HD]: {
      paddingTop: 200,
    },
  },
);

export const LayoutWrapper = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});
