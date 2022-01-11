import { ELimitedColorCategory, ITheme, TColor, IPalette } from './definitions';
import { htmlColorMap } from './htmlColorMap';

/** Add transparency */
export const transparent = (color: string, alpha: number) => {
  const c = rgbToArray(hexToRgb(color));
  c.push(alpha);
  return `rgba(${c.join(',')})`;
};

/** Check if a string is an RGB string */
const isRgb = (c: string) => c.includes('rgb') && c.split(',').length === 3;

/** Check if a string is a HEX string */
const isHex = (c: string) => c[0] === '#' && c.split('').length === 7;

/** Convert HEX color to RGB */
const hexToRgb = (c: string) => {
  if (isRgb(c)) return c;
  return `rgb(${c.match(/\w\w/g).map((x) => +`0x${x}`)})`;
};

/** Convert RGB color to HEX */
const rgbToHex = (c: string) => {
  if (isHex(c)) return c;
  return `#${c
    .match(/\d+/g)
    .map((x) => (+x).toString(16).padStart(2, '0'))
    .join('')}`;
};

/** Split an RGB string to an array of numbers */
const rgbToArray = (c: string) =>
  c
    .split('(')[1]
    .replace(')', '')
    .split(',')
    .slice(0, 3)
    .map((n) => Number(n));

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
  const a = rgbToArray(color).map((v) => {
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
const objDeep = (value: unknown, fn: (v: unknown) => void) => {
  Object.values(value).forEach((v) => {
    fn(v);
    if (isObject(v)) objDeep(v, fn);
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
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
}

const corePalette: IPalette = {
  primary: { main: '#448aff', light: '#6fb4ff', dark: '#2a5296' },
  secondary: { main: '#fba91a' },
  accent: { main: '#680ce9' },
  success: { main: '#56bd66' },
  warning: { main: '#f1c946' },
  info: { main: '#6fb4ff' },
  error: { main: '#e52a66' },
  typography: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
  },
  outline: { light: 'rgba(0,0,0,0.2)', dark: 'rgba(255,255,255,0.2)' },
};

const lights: IPalette = {
  shade: {
    '1': { main: '#FAFAFA', on: '#212121' },
    '2': { main: '#E8E8E8', on: '#212121' },
    '3': { main: '#C8C8C8', on: '#212121' },
    '4': { main: '#AAAAAA', on: '#212121' },
    '5': { main: '#646E6A', on: '#eeeeee' },
  },
};

const darks: IPalette = {
  shade: {
    '1': { main: '#212121', on: '#eeeeee' },
    '2': { main: '#424242', on: '#eeeeee' },
    '3': { main: '#616161', on: '#eeeeee' },
    '4': { main: '#757575', on: '#eeeeee' },
    '5': { main: '#9E9E9E', on: '#212121' },
  },
};

/** Generate the palette */
const createPalette = (palette: IPalette) => {
  // Generate "on" colors
  const fn = (value: unknown) => {
    if (!isObject(value) || value['main'] !== undefined) return;
    validateColorString(value['main']);
    value['main'] = value['main'].toLowerCase();

    if (value['on'] !== undefined) {
      validateColorString(value['on']);
      value['on'] = rgbToHex(value['on']);
      return;
    }
    value['on'] = onWhite(value['main']) ? '#ffffff' : '#000000';
  };
  const _palette = Object.assign({}, palette);
  objDeep(_palette, fn);

  // Add any defaults
  const defaultPalette = mergeDeep({}, corePalette);
  mergeDeep(defaultPalette, palette['mode'] === 'dark' ? darks : lights);
  const result = mergeDeep(defaultPalette, _palette) as IPalette;

  return result;
};

/** Generate a theme object */
export const createTheme = (theme: ITheme): ITheme => {
  const defaultTheme = {
    palette: {},
    font: { size: 14 },
    spacing: 4,
  };

  const result = mergeDeep(defaultTheme, theme);
  result['palette'] = createPalette(result['palette']);

  return result;
};

export const colorFromTheme = (theme: ITheme, color: TColor) => {
  let _color = 'inherit';

  if (Array.isArray(color)) {
    let value = theme.palette;
    color.forEach((v) => (value = value[v]));
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

export const onColorFromTheme = (theme: ITheme, color: TColor) => {
  let _color = 'inherit';

  if (Array.isArray(color)) {
    if (color[2] === 'main') color[2] = 'on';
    _color = colorFromTheme(theme, color);
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
