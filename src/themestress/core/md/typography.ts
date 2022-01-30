import {
  TypographyRefTokens,
  TypographySystemTokens,
  TypographyTokenPropAttributes,
} from '../definitions';
import {applyStyleVar, nullish} from '../utils';

export const getRootElementSize = () => {
  return getComputedStyle(document.querySelector(':root')).getPropertyValue(
    'font-size',
  );
};

const spToRem = (sp: number, rootSizePx?: number) => {
  const rem = rootSizePx ?? Number(getRootElementSize().replace('px', ''));
  return Number((sp / rem).toFixed(4));
};

export const applyTypographySystemTokens = (tokens: TypographySystemTokens) => {
  const rootSizePx = Number(getRootElementSize().replace('px', ''));

  for (const token in tokens) {
    for (const key in tokens[token]) {
      const props = tokens[token][key] as TypographyTokenPropAttributes;

      const path = `${token}-${key}`;

      let finalValue = props.value;

      if (key === 'line-height') {
        const lineHeight = props.value as number;
        const size = tokens[token].size.value as number;
        finalValue = spToRem(lineHeight / size, rootSizePx) + 'rem';
      } else if (['size', 'tracking'].includes(key)) {
        finalValue = spToRem(props.value as number, rootSizePx) + 'rem';
      }

      applyStyleVar(
        path,
        props.refToken ?? finalValue,
        !nullish(props.refToken),
      );
    }
  }
};

export const applyTypographyRefTokens = (tokens: TypographyRefTokens) => {
  for (const token in tokens) {
    applyStyleVar(token, tokens[token]);
  }
};

export const typographyRefTokens: TypographyRefTokens = {
  'md-ref-typeface-brand-regular': 'Roboto, Helvetica, Arial, sans-serif',
  'md-ref-typeface-weight-regular': 400,
  'md-ref-typeface-plain-medium': 'Roboto, Helvetica, Arial, sans-serif',
  'md-ref-typeface-weight-medium': 500,
};

export const typographySystemTokens: TypographySystemTokens = {
  'md-sys-typescale-display-large': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 64},
    size: {value: 57},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-display-medium': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 52},
    size: {value: 45},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-display-small': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 44},
    size: {value: 36},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-headline-large': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 40},
    size: {value: 32},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-headline-medium': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 36},
    size: {value: 28},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-headline-small': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 32},
    size: {value: 24},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-title-large': {
    font: {refToken: 'md-ref-typeface-brand-regular'},
    'line-height': {value: 28},
    size: {value: 22},
    tracking: {value: 0},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-title-medium': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 24},
    size: {value: 16},
    tracking: {value: 0.15},
    weight: {refToken: 'md-ref-typeface-weight-medium'},
  },
  'md-sys-typescale-title-small': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 20},
    size: {value: 14},
    tracking: {value: 0.1},
    weight: {refToken: 'md-ref-typeface-weight-medium'},
  },
  'md-sys-typescale-label-large': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 20},
    size: {value: 14},
    tracking: {value: 0.1},
    weight: {refToken: 'md-ref-typeface-weight-medium'},
  },
  'md-sys-typescale-label-medium': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 16},
    size: {value: 12},
    tracking: {value: 0.5},
    weight: {refToken: 'md-ref-typeface-weight-medium'},
  },
  'md-sys-typescale-label-small': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 6},
    size: {value: 11},
    tracking: {value: 0.5},
    weight: {refToken: 'md-ref-typeface-weight-medium'},
  },
  'md-sys-typescale-body-large': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 24},
    size: {value: 16},
    tracking: {value: 0.15},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-body-medium': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 20},
    size: {value: 14},
    tracking: {value: 0.25},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
  'md-sys-typescale-body-small': {
    font: {refToken: 'md-ref-typeface-plain-medium'},
    'line-height': {value: 16},
    size: {value: 12},
    tracking: {value: 0.4},
    weight: {refToken: 'md-ref-typeface-weight-regular'},
  },
};
