import { createTheme } from '@mui/material';
import { css, DefaultTheme } from 'styled-components';
import { deepmerge } from '@mui/utils';
import {FlattenSimpleInterpolation} from "@mui/styled-engine-sc";

export type TTypography = {
  [key in TFontStyle]: { [key in TFontSizePx]: FlattenSimpleInterpolation };
};

export const FONT_STYLES = [
  'ultralight',
  'thin',
  'light',
  'medium',
  'semibold',
  'bold',
  'heavy',
  'black',
] as const;
export const FONT_SIZES = [10, 12, 14, 16, 18, 20, 22, 24, 26, 32] as const;
export type TFontSizePx = (typeof FONT_SIZES)[number];
export type TFontStyle = (typeof FONT_STYLES)[number];
export const FONT_WEIGHT: { [key in TFontStyle]: number } = {
  ultralight: 100,
  thin: 200,
  light: 300,
  medium: 400,
  semibold: 500,
  bold: 600,
  heavy: 700,
  black: 800,
};

const customTypography: TTypography = FONT_STYLES.reduce(
  (currStyle, nextStyle: TFontStyle) => ({
    ...currStyle,
    [nextStyle]: FONT_SIZES.reduce(
      (currSize, nextSize: TFontSizePx) => ({
        ...currSize,
        [nextSize]: css`
          font-size: ${nextSize / 10}rem;
          letter-spacing: ${(nextSize / 1000).toFixed(3)}rem;
          line-height: 150%;
          font-weight: ${FONT_WEIGHT[nextStyle]};
        `,
      }),
      {}
    ),
  }),
  {}
) as TTypography;

export const styledTheme: DefaultTheme = {
  breakpoints: {
    sm: '(max-width: 750px)',
    smMin: '(min-width: 750px)',
    md: '(max-width: 1200px)',
    lg: '(min-width: 1920px)',
  },
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
      grey100: '#272f38',
      error:'#E53935'
    },
    neutral: {
      1: '#EAEDEE',
      2: '#F1F1F3',
      3: '#C6CFD8',
      4: '#7A8392',
      5: '#858585',
      6: '#B0B0B0',
      7: '#848588',
      8: '#505050',
      9: '#29313E',
      10: '#1F2630',
      11: '#181D20',
      12: '#10151B',
    },
    orange: {
      1: '#FFF1D7',
      2: '#FFE1A6',
      3: '#FCD589',
      4: '#FFD075',
      5: '#FFC045',
      6: '#E29703',
      7: '#C38711',
      8: '#7B560D',
      9: '#3A2F18',
    },
    positive: {
      1: '#D1FFE0',
      2: '#B8FFCE',
      3: '#99F8B7',
      4: '#7BEEA0',
      5: '#58D881',
      6: '#37B55F',
      7: '#1C9241',
      8: '#2A9397',
      9: '#143525',
    },
    negative: {
      1: '#FABDBD',
      2: '#FF9797',
      3: '#FF8282',
      4: '#FF6C6C',
      5: '#F85757',
      6: '#EB4B4B',
      7: '#BC3535',
      8: '#852323',
      9: '#591E1E',
    },
    blue: {
      1: '#E1EFFF',
      2: '#C8E2FF',
      3: '#0EFFF1',
      4: '#6BB9F1',
      5: '#4BA8EB',
      6: '#2488D0',
      7: '#22B1DB',
      8: '#3958FF',
      9: '#145CE6',
      10: '#3A61A6',
      11: '#213188'
    },
  },
  transition: ['all 0.3s ease 0s'],
  customTypography,
};

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      [key in string]: string;
    };
    orange: {
      [key in string]: string;
    };
    blue: {
      [key in string]: string;
    };
    negative: {
      [key in string]: string;
    };
    positive: {
      [key in string]: string;
    };
  }

  interface PaletteOptions {
    neutral: {
      [key in string]: string;
    };
    orange: {
      [key in string]: string;
    };
    blue: {
      [key in string]: string;
    };
    negative: {
      [key in string]: string;
    };
    positive: {
      [key in string]: string;
    };
  }
}

export const muiTheme = createTheme();

export const theme = createTheme(deepmerge(muiTheme, styledTheme));
