import {ThemeMode, SystemColorTokens} from '../definitions';
import {applyStyleVar} from '../utils';

/** Add the light and dark defaults to the DOM. */
export const applyColorModeTokens = (tokens: SystemColorTokens) => {
  for (const token in tokens) {
    const props = tokens[token];
    const {lightToken, darkToken, lightColor, darkColor} = props;

    applyStyleVar(lightToken, lightColor);
    applyStyleVar(darkToken, darkColor);
  }
};

/** Reference the system token to either dark or light. */
export const applySystemColorTokens = (
  mode: ThemeMode,
  tokens: SystemColorTokens,
) => {
  for (const token in tokens) {
    applyStyleVar(
      token,
      tokens[token][mode === 'light' ? 'lightToken' : 'darkToken'],
      true,
    );
  }
};

export const colorRefTokens = {
  'md-ref-palette-primary40': '',
  'md-ref-palette-primary90': '',
  'md-ref-palette-secondary40': '',
  'md-ref-palette-secondary90': '',
  'md-ref-palette-tertiary40': '',
  'md-ref-palette-tertiary90': '',
  'md-ref-palette-neutral99': '',
  'md-ref-palette-neutral-variant90': '',
  'md-ref-palette-error40': '',
  'md-ref-palette-error90': '',
  'md-ref-palette-primary100': '',
  'md-ref-palette-primary10': '',
  'md-ref-palette-secondary100': '',
  'md-ref-palette-secondary10': '',
  'md-ref-palette-tertiary100': '',
  'md-ref-palette-tertiary10': '',
  'md-ref-palette-neutral10': '',
  'md-ref-palette-neutral-variant30': '',
  'md-ref-palette-error100': '',
  'md-ref-palette-error10': '',
  'md-ref-palette-neutral-variant50': '',
  'md-ref-palette-neutral0': '',
  'md-ref-palette-neutral20': '',
  'md-ref-palette-neutral95': '',
  'md-ref-palette-primary80': '',
};

export const systemColorTokens: SystemColorTokens = {
  'md-sys-color-primary': {
    role: 'Primary',
    token: 'md-sys-color-primary',
    lightToken: 'md-ref-palette-primary40',
    darkToken: 'md-ref-palette-primary80',
    lightColor: '#6750A4',
    darkColor: '#D0BCFF',
  },
  'md-sys-color-primary-container': {
    role: 'Primary container',
    token: 'md-sys-color-primary-container',
    lightToken: 'md-ref-palette-primary90',
    darkToken: 'md-ref-palette-primary30',
    lightColor: '#EADDFF',
    darkColor: '#4F378B',
  },
  'md-sys-color-secondary': {
    role: 'Secondary',
    token: 'md-sys-color-secondary',
    lightToken: 'md-ref-palette-secondary40',
    darkToken: 'md-ref-palette-secondary80',
    lightColor: '#625B71',
    darkColor: '#CCC2DC',
  },
  'md-sys-color-secondary-container': {
    role: 'Secondary container',
    token: 'md-sys-color-secondary-container',
    lightToken: 'md-ref-palette-secondary90',
    darkToken: 'md-ref-palette-secondary30',
    lightColor: '#E8DEF8',
    darkColor: '#4A4458',
  },
  'md-sys-color-tertiary': {
    role: 'Tertiary',
    token: 'md-sys-color-tertiary',
    lightToken: 'md-ref-palette-tertiary40',
    darkToken: 'md-ref-palette-tertiary80',
    lightColor: '#7D5260',
    darkColor: '#EFB8C8',
  },
  'md-sys-color-tertiary-container': {
    role: 'Tertiary container',
    token: 'md-sys-color-tertiary-container',
    lightToken: 'md-ref-palette-tertiary90',
    darkToken: 'md-ref-palette-tertiary30',
    lightColor: '#FFD8E4',
    darkColor: '#633B48',
  },
  'md-sys-color-surface': {
    role: 'Surface',
    token: 'md-sys-color-surface',
    lightToken: 'md-ref-palette-neutral99',
    darkToken: 'md-ref-palette-neutral10',
    lightColor: '#FFFBFE',
    darkColor: '#1C1B1F',
  },
  'md-sys-color-surface-variant': {
    role: 'Surface variant',
    token: 'md-sys-color-surface-variant',
    lightToken: 'md-ref-palette-neutral-variant90',
    darkToken: 'md-ref-palette-neutral-variant30',
    lightColor: '#E7E0EC',
    darkColor: '#49454F',
  },
  'md-sys-color-background': {
    role: 'Background',
    token: 'md-sys-color-background',
    lightToken: 'md-ref-palette-neutral99',
    darkToken: 'md-ref-palette-neutral10',
    lightColor: '#FFFBFE',
    darkColor: '#1C1B1F',
  },
  'md-sys-color-error': {
    role: 'Error',
    token: 'md-sys-color-error',
    lightToken: 'md-ref-palette-error40',
    darkToken: 'md-ref-palette-error80',
    lightColor: '#B3261E',
    darkColor: '#F2B8B5',
  },
  'md-sys-color-error-container': {
    role: 'Error container',
    token: 'md-sys-color-error-container',
    lightToken: 'md-ref-palette-error90',
    darkToken: 'md-ref-palette-error30',
    lightColor: '#F9DEDC',
    darkColor: '#8C1D18',
  },
  'md-sys-color-on-primary': {
    role: 'On primary',
    token: 'md-sys-color-on-primary',
    lightToken: 'md-ref-palette-primary100',
    darkToken: 'md-ref-palette-primary20',
    lightColor: '#FFFFFF',
    darkColor: '#371E73',
  },
  'md-sys-color-on-primary-container': {
    role: 'On primary container',
    token: 'md-sys-color-on-primary-container',
    lightToken: 'md-ref-palette-primary10',
    darkToken: 'md-ref-palette-primary90',
    lightColor: '#21005E',
    darkColor: '#EADDFF',
  },
  'md-sys-color-on-secondary': {
    role: 'On secondary',
    token: 'md-sys-color-on-secondary',
    lightToken: 'md-ref-palette-secondary100',
    darkToken: 'md-ref-palette-secondary20',
    lightColor: '#FFFFFF',
    darkColor: '#332D41',
  },
  'md-sys-color-on-secondary-container': {
    role: 'On secondary container',
    token: 'md-sys-color-on-secondary-container',
    lightToken: 'md-ref-palette-secondary10',
    darkToken: 'md-ref-palette-secondary90',
    lightColor: '#1E192B',
    darkColor: '#E8DEF8',
  },
  'md-sys-color-on-tertiary': {
    role: 'On tertiary',
    token: 'md-sys-color-on-tertiary',
    lightToken: 'md-ref-palette-tertiary100',
    darkToken: 'md-ref-palette-tertiary20',
    lightColor: '#FFFFFF',
    darkColor: '#492532',
  },
  'md-sys-color-on-tertiary-container': {
    role: 'On tertiary container',
    token: 'md-sys-color-on-tertiary-container',
    lightToken: 'md-ref-palette-tertiary10',
    darkToken: 'md-ref-palette-tertiary90',
    lightColor: '#370B1E',
    darkColor: '#FFD8E4',
  },
  'md-sys-color-on-surface': {
    role: 'On surface',
    token: 'md-sys-color-on-surface',
    lightToken: 'md-ref-palette-neutral10',
    darkToken: 'md-ref-palette-neutral90',
    lightColor: '#1C1B1F',
    darkColor: '#E6E1E5',
  },
  'md-sys-color-on-surface-variant': {
    role: 'On surface variant',
    token: 'md-sys-color-on-surface-variant',
    lightToken: 'md-ref-palette-neutral-variant30',
    darkToken: 'md-ref-palette-neutral-variant80',
    lightColor: '#49454E',
    darkColor: '#CAC4D0',
  },
  'md-sys-color-on-error': {
    role: 'On error',
    token: 'md-sys-color-on-error',
    lightToken: 'md-ref-palette-error100',
    darkToken: 'md-ref-palette-error20',
    lightColor: '#FFFFFF',
    darkColor: '#601410',
  },
  'md-sys-color-on-error-container': {
    role: 'On error container',
    token: 'md-sys-color-on-error-container',
    lightToken: 'md-ref-palette-error10',
    darkToken: 'md-ref-palette-error80',
    lightColor: '#370B1E',
    darkColor: '#F9DEDC',
  },
  'md-sys-color-on-background': {
    role: 'On background',
    token: 'md-sys-color-on-background',
    lightToken: 'md-ref-palette-neutral10',
    darkToken: 'md-ref-palette-neutral90',
    lightColor: '#1C1B1F',
    darkColor: '#E6E1E5',
  },
  'md-sys-color-outline': {
    role: 'Outline',
    token: 'md-sys-color-outline',
    lightToken: 'md-ref-palette-neutral-variant50',
    darkToken: 'md-ref-palette-neutral-variant60',
    lightColor: '#79747E',
    darkColor: '#938F99',
  },
  'md-sys-color-shadow': {
    role: 'Shadow',
    token: 'md-sys-color-shadow',
    lightToken: 'md-ref-palette-neutral0',
    darkToken: 'md-ref-palette-neutral0',
    lightColor: '#000000',
    darkColor: '#000000',
  },
  'md-sys-color-inverse-surface': {
    role: 'Inverse surface',
    token: 'md-sys-color-inverse-surface',
    lightToken: 'md-ref-palette-neutral20',
    darkToken: 'md-ref-palette-neutral90',
    lightColor: '#313033',
    darkColor: '#E6E1E5',
  },
  'md-sys-color-inverse-on-surface': {
    role: 'Inverse on surface',
    token: 'md-sys-color-inverse-on-surface',
    lightToken: 'md-ref-palette-neutral95',
    darkToken: 'md-ref-palette-neutral20',
    lightColor: '#F4EFF4',
    darkColor: '#313033',
  },
  'md-sys-color-inverse-primary': {
    role: 'Inverse primary',
    token: 'md-sys-color-inverse-primary',
    lightToken: 'md-ref-palette-primary80',
    darkToken: 'md-ref-palette-primary40',
    lightColor: '#D0BCFF',
    darkColor: '#6750A4',
  },
};
