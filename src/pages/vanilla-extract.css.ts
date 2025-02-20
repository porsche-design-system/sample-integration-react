import { keyframes, style } from '@vanilla-extract/css';
import {
  getHoverStyle,
  getFocusStyle,
  getSkeletonStyle,
  skeletonKeyframes,
  getMediaQueryMinMax,
  getMediaQueryMin,
  getMediaQueryMax,
  spacingFluidMedium,
  gridGap,
  textSmallStyle,
  themeLightPrimary,
  headingMediumStyle,
} from '@porsche-design-system/components-react/styles/vanilla-extract';

export const buttonStyle = style({
  backgroundColor: 'white',
  ...getFocusStyle(),
  ...getHoverStyle(),
});

export const animation = keyframes(skeletonKeyframes);
export const skeletonStyle = style({ width: '100px', height: '100px', ...getSkeletonStyle(animation) });

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: gridGap,
  padding: spacingFluidMedium,
});

const getTypographyStyle = {
  ...textSmallStyle,
  color: themeLightPrimary,
  margin: 0,
};

export const Heading = style({
  ...headingMediumStyle,
  color: themeLightPrimary,
  margin: 0,
});

export const MediaQueryMin = style({
  ...getTypographyStyle,
  '@media': {
    [getMediaQueryMin('base')]: {
      selectors: {
        '&::after': {
          content: '" Base"',
        },
      },
    },
    [getMediaQueryMin('xs')]: {
      selectors: {
        '&::after': {
          content: '" XS"',
        },
      },
    },
    [getMediaQueryMin('s')]: {
      selectors: {
        '&::after': {
          content: '" S"',
        },
      },
    },
    [getMediaQueryMin('m')]: {
      selectors: {
        '&::after': {
          content: '" M"',
        },
      },
    },
    [getMediaQueryMin('l')]: {
      selectors: {
        '&::after': {
          content: '" L"',
        },
      },
    },
    [getMediaQueryMin('xl')]: {
      selectors: {
        '&::after': {
          content: '" XL"',
        },
      },
    },
    [getMediaQueryMin('xxl')]: {
      selectors: {
        '&::after': {
          content: '" XXL"',
        },
      },
    },
  },
});

export const MediaQueryMax = style({
  ...getTypographyStyle,
  '@media': {
    [getMediaQueryMax('xxl')]: {
      selectors: {
        '&::after': {
          content: '" XXL"',
        },
      },
    },
    [getMediaQueryMax('xl')]: {
      selectors: {
        '&::after': {
          content: '" XL"',
        },
      },
    },
    [getMediaQueryMax('l')]: {
      selectors: {
        '&::after': {
          content: '" L"',
        },
      },
    },
    [getMediaQueryMax('m')]: {
      selectors: {
        '&::after': {
          content: '" M"',
        },
      },
    },
    [getMediaQueryMax('s')]: {
      selectors: {
        '&::after': {
          content: '" S"',
        },
      },
    },
    [getMediaQueryMax('xs')]: {
      selectors: {
        '&::after': {
          content: '" XS"',
        },
      },
    },
  },
});

export const MediaQueryMinMax = style({
  ...getTypographyStyle,
  '@media': {
    [getMediaQueryMinMax('base', 'xs')]: {
      selectors: {
        '&::after': {
          content: '" Base - XS"',
        },
      },
    },
    [getMediaQueryMinMax('xs', 's')]: {
      selectors: {
        '&::after': {
          content: '" XS - S"',
        },
      },
    },
    [getMediaQueryMinMax('s', 'm')]: {
      selectors: {
        '&::after': {
          content: '" S - M"',
        },
      },
    },
    [getMediaQueryMinMax('m', 'l')]: {
      selectors: {
        '&::after': {
          content: '" M - L"',
        },
      },
    },
    [getMediaQueryMinMax('l', 'xl')]: {
      selectors: {
        '&::after': {
          content: '" L - XL"',
        },
      },
    },
    [getMediaQueryMinMax('xl', 'xxl')]: {
      selectors: {
        '&::after': {
          content: '" XL - XXL"',
        },
      },
    },
  },
});
