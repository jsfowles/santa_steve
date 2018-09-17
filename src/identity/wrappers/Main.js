import styled from 'react-emotion';

import * as s from '../spacing';
import * as c from '../constants';
import { remCalc } from 'lib/styleMethods';

export const Main = styled.main(
  ({ spacing }) => spacing && s.spacing(spacing),
  {
    flex: 1,
    paddingTop: 160,
    paddingBottom: 80,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 'calc(100vh - 120px)',
  },
);
