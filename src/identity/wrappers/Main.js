import styled from 'react-emotion';

import * as s from '../spacing';
import * as c from '../constants';
import { remCalc } from '@lib/styleMethods';

export const Main = styled.main(
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    flex: '1 0 auto',
    paddingTop: 160,
    paddingBottom: 80,
    position: 'relative',
    overflow: 'hidden',
  },
);

export const LayoutWrapper = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});
