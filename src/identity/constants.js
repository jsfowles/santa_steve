import { css, keyframes } from 'react-emotion';
import { remCalc } from '@lib/styleMethods';
/*
 * Colors:
 */
export const COLORS = {
  black001: '#221F1F',
  black002: '#424040',
  black003: '#696868',
  black004: '#8c8c8c',
  black005: '#adadad',
  black006: '#cfcfcf',
  black007: '#e6e6e6',
  black008: '#f5f5f5',
  white: '#ffffff',
};

/*
 * Spacing:
 */
export const PAGE_WRAPPER = '0 7vw';
export const PAGE_WRAPPER_SPACING_DESKTOP_HD = '7vw';
export const PAGE_WRAPPER_SPACING_DESKTOP = PAGE_WRAPPER_SPACING_DESKTOP_HD;
export const PAGE_WRAPPER_SPACING_MOBILE = PAGE_WRAPPER_SPACING_DESKTOP_HD;

export const XX_LARGE_MOBILE = 40;
export const XX_LARGE_DESKTOP = 100;
export const XX_LARGE_DESKTOP_HD = 100;

export const X_LARGE_MOBILE = 30;
export const X_LARGE_DESKTOP = 60;
export const X_LARGE_DESKTOP_HD = 80;

export const LARGE_MOBILE = 30;
export const LARGE_DESKTOP = 60;
export const LARGE_DESKTOP_HD = 66;

export const MEDIUM_MOBILE = 20;
export const MEDIUM_DESKTOP = 40;
export const MEDIUM_DESKTOP_HD = 40;

export const SMALL_MOBILE = 15;
export const SMALL_DESKTOP = 30;
export const SMALL_DESKTOP_HD = 30;

export const X_SMALL_MOBILE = 10;
export const X_SMALL_DESKTOP = 20;
export const X_SMALL_DESKTOP_HD = 20;

export const XX_SMALL_MOBILE = 7;
export const XX_SMALL_DESKTOP = 9;
export const XX_SMALL_DESKTOP_HD = 9;
/*
 * Screen sizes:
 *
 * For our screen sizes we go with min width, meaning that we start with
 * mobile styles an go up.
 */
export const SECTION_MAX_WIDTH = 1200;
export const HEADER_WIDTH = remCalc(1320);

export const TABLET = '@media (min-width: 878px)';
export const DESKTOP = '@media (min-width: 1200px)';
export const DESKTOP_HD = '@media (min-width: 1440px)';
export const NAV_BREAKPOINT_1 = '@media (min-width: 945px)';
export const NAV_BREAKPOINT_2 = '@media (min-width: 1200px)';
export const FLEX_WRAP_BREAKPOINT = '@media (min-width: 1300px)';
export const CAROUSEL_BREAKPOINT = '@media(min-width: 890px)';
export const JUMP_NAV_BREAKPOINT_1 = '@media(min-width: 890px)';
export const JUMP_NAV_BREAKPOINT_2 = '@media(min-width: 1200px)';
export const HEADER_BREAKPOINT = `@media (min-width: ${HEADER_WIDTH})`;

export const GRID_TOTAL_COLUMNS = 12;

/*
 * Typography styles
 *
 */

export const FONT_FAMILY_SANS_SERIF = 'Roboto';
export const FONT_FAMILY_SERIF = 'Playfair Display';
export const FONT_FAMILY_BASE = FONT_FAMILY_SANS_SERIF;
export const FONT_COLOR_BASE = COLORS.black001;

export const FONT_COLOR_MUTED = COLORS.black005;

export const FONT_WEIGHT_LIGHT = 300;
export const FONT_WEIGHT_NORMAL = 400;
export const FONT_WEIGHT_BOLD = 500;

export const MEASURE = {
  SMALL: '30rem',
  MEDIUM: '35rem',
  LARGE: '50rem',
};

export const LINE_HEIGHT_BASE = 1.75;
export const FONT_WEIGHT_BASE = FONT_WEIGHT_LIGHT;

export const LINE_HEIGHT_HEADINGS = 1.32;
export const FONT_FAMILY_HEADINGS = FONT_FAMILY_BASE;
export const FONT_WEIGHT_HEADINGS = FONT_WEIGHT_NORMAL;
export const FONT_COLOR_HEADINGS = FONT_COLOR_BASE;

export const TYPE_SCALE = {
  H1: {
    BASE: 36,
    DESKTOP: 52,
    DESKTOP_HD: 52,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_SERIF,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
    HERO: {
      BASE: 36,
      DESKTOP: 52,
      DESKTOP_HD: 52,
    },
  },

  H2: {
    BASE: 28,
    DESKTOP: 40,
    DESKTOP_HD: 40,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_SERIF,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H3: {
    BASE: 22,
    DESKTOP: 30,
    DESKTOP_HD: 30,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_SERIF,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H4: {
    BASE: 18,
    DESKTOP: 24,
    DESKTOP_HD: 24,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_SERIF,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  H5: {
    BASE: 16,
    DESKTOP: 18,
    DESKTOP_HD: 18,
    LINE_HEIGHT: LINE_HEIGHT_HEADINGS,
    FONT_FAMILY: FONT_FAMILY_SERIF,
    FONT_WEIGHT: FONT_WEIGHT_HEADINGS,
  },

  P: {
    BASE: 14,
    DESKTOP: 16,
    DESKTOP_HD: 16,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BASE,
  },

  SMALL: {
    BASE: 12,
    DESKTOP: 14,
    DESKTOP_HD: 14,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BASE,
  },

  LI: {
    BASE: 14,
    DESKTOP: 16,
    DESKTOP_HD: 16,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BASE,
  },

  A: {
    BASE: 16,
    DESKTOP: 16,
    DESKTOP_HD: 18,
    LINE_HEIGHT: LINE_HEIGHT_BASE,
    FONT_FAMILY: FONT_FAMILY_BASE,
    FONT_WEIGHT: FONT_WEIGHT_BOLD,
  },
};

export const TEXT_SHADOW = '0 1px 2px rgba(0, 0, 0, 0.4)';

export const ABSOLUTE = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const FIXED = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export const DEFAULT_ANIMATION_TIMING = 'cubic-bezier(0.23, 1, 0.32, 1)';
export const ANIMATION_DURATION_SHORT = '200ms';
export const ANIMATION_DURATION_MEDIUM = '700ms';

export const FADE_IN = () => {
  const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opactiy: 1 },
  });

  return { animation: `${fadeIn} 2s cubic-bezier(0.23, 1, 0.32, 1)` };
};

export const ROTATE = () => {
  const rotate = css.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  });

  return { animation: `${rotate} 1250ms infinite linear` };
};
