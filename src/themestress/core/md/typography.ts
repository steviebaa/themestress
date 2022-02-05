import {
  TypographyRefTokens,
  TypographySystemTokens,
  TypographyTokenPropAttributes,
  addStyleHelper,
} from '../definitions';
import {nullish} from '../utils/helpers';

export const getRootElementSize = () => {
  return getComputedStyle(document.querySelector(':root')).getPropertyValue(
    'font-size',
  );
};

export const spToRem = (sp: number, rootSizePx?: number) => {
  const rem = rootSizePx ?? Number(getRootElementSize().replace('px', ''));
  return Number((sp / rem).toFixed(4));
};

export const applyTypographySystemTokens = (
  tokens: TypographySystemTokens,
  addStyle: addStyleHelper,
) => {
  const rootSizePx = Number(getRootElementSize().replace('px', ''));

  for (const token in tokens) {
    for (const key in tokens[token]) {
      const props = tokens[token][key] as TypographyTokenPropAttributes;

      const path = `${token}-${key}`;

      let finalValue = props.value;

      if (key === 'line-height') {
        const lineHeight = props.value as number;
        finalValue = spToRem(lineHeight, rootSizePx) + 'rem';
      } else if (['size', 'tracking'].includes(key)) {
        finalValue = spToRem(props.value as number, rootSizePx) + 'rem';
      }

      addStyle(path, props.refToken ?? finalValue, !nullish(props.refToken));
    }
  }
};

export const typographyRefTokens = (prefix = 'ref'): TypographyRefTokens => {
  return {
    regular: {
      font: `${prefix}-typeface-font-regular`,
      weight: `${prefix}-typeface-weight-regular`,
    },
    medium: {
      font: `${prefix}-typeface-font-medium`,
      weight: `${prefix}-typeface-weight-medium`,
    },
  };
};

export const typographySystemTokens = (
  sysPrefix = 'sys',
  refPrefix = 'ref',
): TypographySystemTokens => {
  const refTokenStubs = typographyRefTokens(refPrefix);

  return {
    [`${sysPrefix}-typescale-display-large`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 64},
      size: {value: 57},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-display-medium`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 52},
      size: {value: 45},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-display-small`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 44},
      size: {value: 36},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-headline-large`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 40},
      size: {value: 32},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-headline-medium`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 36},
      size: {value: 28},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-headline-small`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 32},
      size: {value: 24},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-title-large`]: {
      font: {refToken: refTokenStubs.regular.font},
      'line-height': {value: 28},
      size: {value: 22},
      tracking: {value: 0},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-title-medium`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 24},
      size: {value: 16},
      tracking: {value: 0.15},
      weight: {refToken: refTokenStubs.medium.weight},
    },
    [`${sysPrefix}-typescale-title-small`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 20},
      size: {value: 14},
      tracking: {value: 0.1},
      weight: {refToken: refTokenStubs.medium.weight},
    },
    [`${sysPrefix}-typescale-label-large`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 20},
      size: {value: 14},
      tracking: {value: 0.1},
      weight: {refToken: refTokenStubs.medium.weight},
    },
    [`${sysPrefix}-typescale-label-medium`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 16},
      size: {value: 12},
      tracking: {value: 0.5},
      weight: {refToken: refTokenStubs.medium.weight},
    },
    [`${sysPrefix}-typescale-label-small`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 6},
      size: {value: 11},
      tracking: {value: 0.5},
      weight: {refToken: refTokenStubs.medium.weight},
    },
    [`${sysPrefix}-typescale-body-large`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 24},
      size: {value: 16},
      tracking: {value: 0.15},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-body-medium`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 20},
      size: {value: 14},
      tracking: {value: 0.25},
      weight: {refToken: refTokenStubs.regular.weight},
    },
    [`${sysPrefix}-typescale-body-small`]: {
      font: {refToken: refTokenStubs.medium.font},
      'line-height': {value: 16},
      size: {value: 12},
      tracking: {value: 0.4},
      weight: {refToken: refTokenStubs.regular.weight},
    },
  };
};
