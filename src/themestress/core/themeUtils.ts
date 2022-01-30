import {htmlColorMap} from './htmlColorMap';
import {
  ELimitedColorCategory,
  ThemeProps,
  TColor,
  PaletteProps,
  ColorDesignationPath,
  TypographyColorPath,
  NeutralColorPath,
} from './definitions';
import {BreakPointEnum} from '.';

/** Add transparency */
export const withOpacity = (color: string, alpha: number) => {
  const c = rgbToArray(hexToRgb(color));
  c.push(alpha);
  return `rgba(${c.join(',')})`;
};

/** Check if a string is an RGB string */
const isRgb = (c: string) => c.includes('rgb');

/** Check if a string is a HEX string */
const isHex = (c: string) => c[0] === '#' && c.split('').length === 7;

/** Convert HEX color to RGB */
const hexToRgb = (c: string) => {
  if (isRgb(c)) return c;
  return `rgb(${c.match(/\w\w/g).map(x => +`0x${x}`)})`;
};

/** Convert RGB color to HEX */
const rgbToHex = (c: string) => {
  if (isHex(c)) return c;
  return `#${c
    .match(/\d+/g)
    .map(x => (+x).toString(16).padStart(2, '0'))
    .join('')}`;
};

/** Split an RGB string to an array of numbers */
const rgbToArray = (c: string) =>
  c
    .split('(')[1]
    .replace(')', '')
    .split(',')
    .slice(0, 3)
    .map(n => Number(n));

/** Check if there is an alpha value in an RGB string */
const rgbHasAlpha = (c: string) => isRgb(c) && c.split(',').length === 4;

/** Trim the alpha value from an RGB string */
const trimRgbAlpha = (c: string) => {
  if (!rgbHasAlpha(c)) return c;
  return c.replace('rgba', 'rgb').split(',').slice(0, 3).join(',') + ')';
};

/** Calculate illuminance
 * @param string color an rgb or hex string
 */
const calculateIlluminance = (c: string) => {
  const color = isRgb(c) ? trimRgbAlpha(c) : hexToRgb(c);
  const a = rgbToArray(color).map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

/** Calculate contrast value to white */
const contrastRatio = (c1: string, c2: string): number => {
  const contrast = calculateIlluminance(c1) / calculateIlluminance(c2);
  return contrast < 1 ? 1 / contrast : contrast;
};

/** Calculate contrast value to white */
const contrastToWhite = (c: string) => 1 / calculateIlluminance(c);

/** Bool if there is enough contrast to white */
const onWhite = (c: string) => contrastToWhite(c) > 4.5;

/** Check a value is a "key-value pair" object */
const isObject = (v: unknown) =>
  typeof v === 'object' && !Array.isArray(v) && v !== null;

/** Call a function on every value in an object */
const objDeep = (
  value: unknown,
  fn: (v: unknown) => void,
  ignoreKeys: string[] = [],
) => {
  Object.entries(value).forEach(([k, v]) => {
    if (!ignoreKeys.includes(k)) {
      fn(v);
      if (isObject(v)) objDeep(v, fn);
    }
  });
};

/** Validate a color string is HEX or RGB */
const validateColorString = (value: unknown) => {
  if (typeof value !== 'string' || !(isHex(value) || isRgb(value))) {
    throw new Error(
      'Only RGB [rgb(0,0,0)] or 6 digit HEX [#000000] values (as a string) should be provided to the theme palette',
    );
  }
};

/** Merge two objects deep */
function mergeDeep(target: Object, source: Object) {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {[key]: {}});
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }
  return target;
}

const corePalette: PaletteProps = {
  primary: {main: '#448aff', light: '#6fb4ff', dark: '#2a5296'},
  secondary: {main: '#fba91a'},
  accent: {main: '#680ce9'},
  success: {main: '#56bd66'},
  warning: {main: '#f1c946'},
  info: {main: '#6fb4ff'},
  error: {main: '#e52a66'},
  neutral: {
    '50': {main: '#f2f2f2'},
    '100': {main: '#e5e5e5'},
    '150': {main: '#d8d8d8'},
    '200': {main: '#cccccc'},
    '250': {main: '#bfbfbf'},
    '300': {main: '#b2b2b2'},
    '350': {main: '#a5a5a5'},
    '400': {main: '#999999'},
    '450': {main: '#8c8c8c'},
    '500': {main: '#7f7f7f'},
    '550': {main: '#727272'},
    '600': {main: '#666666'},
    '650': {main: '#595959'},
    '700': {main: '#4c4c4c'},
    '750': {main: '#3f3f3f'},
    '800': {main: '#333333'},
    '850': {main: '#262626'},
    '900': {main: '#191919'},
    '950': {main: '#0d0d0d'},
  },
  outline: {light: 'rgba(0,0,0,0.2)', dark: 'rgba(255,255,255,0.2)'},
};

/** Generate the palette */
const createPalette = (initialPalette: PaletteProps) => {
  // Generate "on" colors
  const createOnColors = (value: unknown) => {
    if (!isObject(value) || value['main'] === undefined) return;

    validateColorString(value['main']);
    value['main'] = value['main'].toLowerCase();

    if (value['on'] !== undefined) {
      validateColorString(value['on']);
      value['on'] = rgbToHex(value['on']);
      return;
    }
    value['on'] = onWhite(value['main']) ? '#ffffff' : '#000000';
  };

  const palette = Object.assign({}, initialPalette);
  objDeep(palette, createOnColors, []);

  const defaultPalette = mergeDeep({}, corePalette);
  objDeep(defaultPalette, createOnColors, []);

  const result = mergeDeep(defaultPalette, palette) as PaletteProps;

  return result;
};

/** Generate a theme object */
export const createTheme = (theme: ThemeProps): ThemeProps => {
  const defaultTheme: ThemeProps = {
    palette: {},
    typography: {size: 14},
    spacing: 4,
    zIndex: {
      navbar: 1100,
      backdrop: 1300,
      modal: 1400,
      snackbar: 1500,
      tooltip: 1600,
    },
    breakpoints: {
      xs: '300px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  };

  const result: ThemeProps = mergeDeep(defaultTheme, theme);
  result.palette = createPalette(result.palette);

  return result;
};

export const colorFromTheme = (theme: ThemeProps, color: TColor) => {
  let _color = 'inherit';

  if (Array.isArray(color)) {
    let value = theme.palette;
    color.forEach(v => (value = value[v]));
    _color = value as string;
  } else if (typeof color === 'string') {
    if (Object.keys(ELimitedColorCategory).includes(color)) {
      _color = theme.palette[color].main;
    } else {
      _color = color;
    }
  }

  return _color;
};

export const onColorFromTheme = (theme: ThemeProps, color: TColor) => {
  let _color = 'inherit';

  if (Array.isArray(color)) {
    const clonedColor = color.map(v => (v === 'main' ? 'on' : v));
    type t = ColorDesignationPath | TypographyColorPath | NeutralColorPath;
    _color = colorFromTheme(theme, clonedColor as t);
  } else if (typeof color === 'string') {
    if (Object.keys(ELimitedColorCategory).includes(color)) {
      _color = theme.palette[color].on;
    } else if (Object.keys(htmlColorMap).includes(color)) {
      _color = onWhite(htmlColorMap[color]) ? 'white' : 'black';
    } else {
      _color = onWhite(color) ? 'white' : 'black';
    }
  }
  return _color;
};

export const contrastLegible = (c1: string, c2: string): boolean => {
  return contrastRatio(c1, c2) > 4.5;
};

export const getBreakpoint = (theme: ThemeProps, breakpoint: string): string => {
  const isEnum = Object.keys(BreakPointEnum).includes(breakpoint);
  return isEnum ? theme.breakpoints[breakpoint] : breakpoint;
};

export const getMarginAndPadding = (props: {
  theme: ThemeProps;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}) => {
  const {
    theme: {spacing},
  } = props;
  const targets: [string, string][] = [
    ['margin', 'margin'],
    ['marginLeft', 'margin-left'],
    ['marginRight', 'margin-right'],
    ['marginTop', 'margin-top'],
    ['marginBottom', 'margin-bottom'],
    ['padding', 'padding'],
    ['paddingLeft', 'padding-left'],
    ['paddingRight', 'padding-right'],
    ['paddingTop', 'padding-top'],
    ['paddingBottom', 'padding-bottom'],
  ];

  const calc = (prop: [string, string]) => {
    return [undefined, null].includes(props[prop[0]])
      ? null
      : `${prop[1]}: ${spacing * props[prop[0]]}px; `;
  };

  let styles = '';
  targets.forEach(prop => (styles += calc(prop) ?? ''));

  return styles;
};
