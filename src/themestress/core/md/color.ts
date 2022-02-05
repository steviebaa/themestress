import {SystemColorTokens} from '../definitions';

/** Keys must remain to map to the ThemePalette class but token prefix can change. */
export const colorRefTokenStubs = (prefix = 'ref') => ({
  primary: `${prefix}-palette-primary`,
  secondary: `${prefix}-palette-secondary`,
  tertiary: `${prefix}-palette-tertiary`,
  neutral: `${prefix}-palette-neutral`,
  neutralVariant: `${prefix}-palette-neutral-variant`,
  error: `${prefix}-palette-error`,
  success: `${prefix}-palette-success`,
  info: `${prefix}-palette-info`,
  warning: `${prefix}-palette-warning`,
});

/** Light and dark keys must remain but token prefixes can change. */
export const systemColorTokens = (
  sysPrefix = 'sys',
  refPrefix = 'ref',
): SystemColorTokens => {
  const refTokenStubs = colorRefTokenStubs(refPrefix);

  return {
    [`${sysPrefix}-color-primary`]: {
      light: `${refTokenStubs.primary}-40`,
      dark: `${refTokenStubs.primary}-80`,
    },
    [`${sysPrefix}-color-primary-container`]: {
      light: `${refTokenStubs.primary}-90`,
      dark: `${refTokenStubs.primary}-30`,
    },
    [`${sysPrefix}-color-secondary`]: {
      light: `${refTokenStubs.secondary}-40`,
      dark: `${refTokenStubs.secondary}-80`,
    },
    [`${sysPrefix}-color-secondary-container`]: {
      light: `${refTokenStubs.secondary}-90`,
      dark: `${refTokenStubs.secondary}-30`,
    },
    [`${sysPrefix}-color-tertiary`]: {
      light: `${refTokenStubs.tertiary}-40`,
      dark: `${refTokenStubs.tertiary}-80`,
    },
    [`${sysPrefix}-color-tertiary-container`]: {
      light: `${refTokenStubs.tertiary}-90`,
      dark: `${refTokenStubs.tertiary}-30`,
    },
    [`${sysPrefix}-color-surface`]: {
      light: `${refTokenStubs.neutral}-99`,
      dark: `${refTokenStubs.neutral}-10`,
    },
    [`${sysPrefix}-color-surface-variant`]: {
      light: `${refTokenStubs.neutralVariant}-90`,
      dark: `${refTokenStubs.neutralVariant}-30`,
    },
    [`${sysPrefix}-color-background`]: {
      light: `${refTokenStubs.neutral}-99`,
      dark: `${refTokenStubs.neutral}-10`,
    },
    [`${sysPrefix}-color-error`]: {
      light: `${refTokenStubs.error}-40`,
      dark: `${refTokenStubs.error}-80`,
    },
    [`${sysPrefix}-color-error-container`]: {
      light: `${refTokenStubs.error}-90`,
      dark: `${refTokenStubs.error}-30`,
    },
    [`${sysPrefix}-color-on-primary`]: {
      light: `${refTokenStubs.primary}-100`,
      dark: `${refTokenStubs.primary}-20`,
    },
    [`${sysPrefix}-color-on-primary-container`]: {
      light: `${refTokenStubs.primary}-10`,
      dark: `${refTokenStubs.primary}-90`,
    },
    [`${sysPrefix}-color-on-secondary`]: {
      light: `${refTokenStubs.secondary}-100`,
      dark: `${refTokenStubs.secondary}-20`,
    },
    [`${sysPrefix}-color-on-secondary-container`]: {
      light: `${refTokenStubs.secondary}-10`,
      dark: `${refTokenStubs.secondary}-90`,
    },
    [`${sysPrefix}-color-on-tertiary`]: {
      light: `${refTokenStubs.tertiary}-100`,
      dark: `${refTokenStubs.tertiary}-20`,
    },
    [`${sysPrefix}-color-on-tertiary-container`]: {
      light: `${refTokenStubs.tertiary}-10`,
      dark: `${refTokenStubs.tertiary}-90`,
    },
    [`${sysPrefix}-color-on-surface`]: {
      light: `${refTokenStubs.neutral}-10`,
      dark: `${refTokenStubs.neutral}-90`,
    },
    [`${sysPrefix}-color-on-surface-variant`]: {
      light: `${refTokenStubs.neutralVariant}-30`,
      dark: `${refTokenStubs.neutralVariant}-80`,
    },
    [`${sysPrefix}-color-on-error`]: {
      light: `${refTokenStubs.error}-100`,
      dark: `${refTokenStubs.error}-20`,
    },
    [`${sysPrefix}-color-on-error-container`]: {
      light: `${refTokenStubs.error}-10`,
      dark: `${refTokenStubs.error}-80`,
    },
    [`${sysPrefix}-color-on-background`]: {
      light: `${refTokenStubs.neutral}-10`,
      dark: `${refTokenStubs.neutral}-90`,
    },
    [`${sysPrefix}-color-outline`]: {
      light: `${refTokenStubs.neutralVariant}-50`,
      dark: `${refTokenStubs.neutralVariant}-60`,
    },
    [`${sysPrefix}-color-shadow`]: {
      light: `${refTokenStubs.neutral}-0`,
      dark: `${refTokenStubs.neutral}-0`,
    },
    [`${sysPrefix}-color-inverse-surface`]: {
      light: `${refTokenStubs.neutral}-20`,
      dark: `${refTokenStubs.neutral}-90`,
    },
    [`${sysPrefix}-color-inverse-on-surface`]: {
      light: `${refTokenStubs.neutral}-95`,
      dark: `${refTokenStubs.neutral}-20`,
    },
    [`${sysPrefix}-color-inverse-primary`]: {
      light: `${refTokenStubs.primary}-80`,
      dark: `${refTokenStubs.primary}-40`,
    },
  };
};
