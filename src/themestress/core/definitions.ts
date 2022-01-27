import {ClassAttributes, HTMLAttributes} from 'react';

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

export type ThemeString = 'light' | 'dark';

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

export interface IPalette {
  mode?: 'light' | 'dark';
  primary?: IColorDesignation;
  secondary?: IColorDesignation;
  accent?: IColorDesignation;
  success?: IColorDesignation;
  warning?: IColorDesignation;
  info?: IColorDesignation;
  error?: IColorDesignation;
  neutral?: INeutral;
  outline?: {light: TColor; dark: TColor};
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

export interface ITheme {
  palette?: IPalette;
  font?: {
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
  interface Theme extends ITheme {}
}
