import styled from 'react-emotion';

import { remCalc } from 'lib/styleMethods';
import * as c from 'identity/constants';
import * as s from 'identity/spacing';

export const PageWrapper = styled.div(
  ({ fullWidth }) => ({
    width: '100%',
    margin: '0 auto',
    padding: '0 7vw',
    height: '100%',

    [c.DESKTOP]: {
      width: fullWidth ? c.SECTION_MAX_WIDTH : remCalc(650),
      padding: 0,
    },
  }),
  ({ horizontalLayout }) =>
    horizontalLayout && {
      [c.NAV_BREAKPOINT_2]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
);

export const PageSection = styled.section(
  s.spacing({ margin: 'vertical-lg' }),
  {
    width: '100%',
  },
);

export const SectionText = styled.div`
  max-width: ${remCalc(650)};
`;
