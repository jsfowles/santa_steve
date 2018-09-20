import styled from 'react-emotion';
import TypeScale from '@identity/type';
import * as s from '@identity/spacing';

export const H1 = styled(TypeScale.H1)();
export const H3 = styled(TypeScale.H3)();

export const P = styled(TypeScale.P)(
  s.spacing({
    margin: 'vertical-sm',
  }),
);
