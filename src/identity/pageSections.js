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
    display: 'flex',
    width: '100%',
  },
  props => ({ justifyContent: props.alignSection }),
);

export const SectionText = styled.article(
  {
    maxWidth: remCalc(650),
    width: '100%',
  },
  props => ({ textAlign: props.textAlign }),
);

export const HeaderText = styled.header(props => ({
  textAlign: props.textAlign,
}));
