import {ClassAttributes, HTMLAttributes} from 'react';
import {TonalPalette} from './classes/base/TonalPalette';

export interface SystemColorTokens {
  [key: string]: {light: string; dark: string};
}

export interface TypographyTokenPropAttributes {
  refToken?: string;
  value?: string | number;
}

export interface TypographySystemToken {
  font: TypographyTokenPropAttributes;
  'line-height': TypographyTokenPropAttributes;
  size: TypographyTokenPropAttributes;
  tracking: TypographyTokenPropAttributes;
  weight: TypographyTokenPropAttributes;
}

export interface TypographyRefTokens {
  regular: {font: string; weight: string};
  medium: {font: string; weight: string};
}

export interface TypographySystemTokens {
  [key: string]: TypographySystemToken;
}

export interface ElevationToken {
  role: string;
  token: string;
  elevation: number;
  transform: string;
}
export interface ElevationTokens {
  'md-sys-elevation-level1': ElevationToken;
  'md-sys-elevation-level2': ElevationToken;
  'md-sys-elevation-level3': ElevationToken;
  'md-sys-elevation-level4': ElevationToken;
  'md-sys-elevation-level5': ElevationToken;
  'md-sys-elevation-level6': ElevationToken;
  'md-sys-elevation-level7': ElevationToken;
  'md-sys-elevation-level8': ElevationToken;
  'md-sys-elevation-level9': ElevationToken;
}

export interface Transform {
  vertical?: 'top' | 'center' | 'bottom' | (string & {});
  horizontal?: 'left' | 'center' | 'right' | (string & {});
}

export const BreakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl'];
export enum BreakPointEnum {
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

export type BreakPoint = keyof typeof BreakPointEnum | (string & {});

export type ColorDesignationPath = [TLimitedColorCategory, TColorDesignation];
export type TypographyColorPath = ['typography', TNeutral];
export type NeutralColorPath = ['neutral', string | number, TColorDesignation];

export type ReactHTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;

export type ThemeMode = 'light' | 'dark';

export type TColor =
  | TLimitedColorCategory
  | ColorDesignationPath
  | TypographyColorPath
  | NeutralColorPath
  | (string & {});

interface IColorDesignation {
  main: string;
  light?: string;
  dark?: string;
  on?: string;
}
type TColorDesignation = keyof IColorDesignation;

interface KeyColorProps {
  keyColor: string;
  tones: TonalPalette;
}
export interface PaletteProps {
  mode?: 'light' | 'dark';

  primary: KeyColorProps;
  secondary: KeyColorProps;
  tertiary: KeyColorProps;
  neutral: KeyColorProps;
  neutralVariant: KeyColorProps;

  success?: KeyColorProps;
  warning?: KeyColorProps;
  info?: KeyColorProps;
  error?: KeyColorProps;
}

export enum ELimitedColorCategory {
  primary = 'primary',
  secondary = 'secondary',
  accent = 'accent',
  success = 'success',
  warning = 'warning',
  info = 'info',
  error = 'error',
}

type TLimitedColorCategory = keyof typeof ELimitedColorCategory;

interface INeutral {
  '50': IColorDesignation;
  '100': IColorDesignation;
  '150': IColorDesignation;
  '200': IColorDesignation;
  '250': IColorDesignation;
  '300': IColorDesignation;
  '350': IColorDesignation;
  '400': IColorDesignation;
  '450': IColorDesignation;
  '500': IColorDesignation;
  '550': IColorDesignation;
  '600': IColorDesignation;
  '650': IColorDesignation;
  '700': IColorDesignation;
  '750': IColorDesignation;
  '800': IColorDesignation;
  '850': IColorDesignation;
  '900': IColorDesignation;
  '950': IColorDesignation;
}
type TNeutral = keyof INeutral;

export interface ThemeProps {
  palette?: PaletteProps;
  typography?: {
    size?: number;
  };
  spacing?: number;
  zIndex?: {
    navbar?: number;
    backdrop?: number;
    modal?: number;
    tooltip?: number;
    snackbar?: number;
  };
  breakpoints?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ThemeProps {}
}
