import { ClassAttributes, HTMLAttributes } from 'react';

type ColorDesignationPath = [TLimitedColorCategory, TColorDesignation];
type TypographyColorPath = ['typography', TShade];
type ShadeColorPath = ['shade', string | number, TColorDesignation];

export type ReactHTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;

export type ThemeString = 'light' | 'dark' | 'auto';

export type TColor =
  | TLimitedColorCategory
  | ColorDesignationPath
  | TypographyColorPath
  | ShadeColorPath
  | (string & {});

interface IColorDesignation {
  main?: string;
  light?: string;
  dark?: string;
  on?: string;
}
type TColorDesignation = keyof IColorDesignation;

interface IColorsObject {
  [name: string]: IColorDesignation;
}

export interface IPalette {
  mode?: 'light' | 'dark';
  primary?: IColorDesignation;
  secondary?: IColorDesignation;
  accent?: IColorDesignation;
  success?: IColorDesignation;
  warning?: IColorDesignation;
  info?: IColorDesignation;
  error?: IColorDesignation;
  shade?: IColorsObject;
  typography?: IShades;
  outline?: { light: TColor; dark: TColor };
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

interface IShades {
  '50'?: string;
  '100'?: string;
  '200'?: string;
  '300'?: string;
  '400'?: string;
  '500'?: string;
  '600'?: string;
  '700'?: string;
  '800'?: string;
  '900'?: string;
}
type TShade = keyof IShades;

export interface ITheme {
  palette?: IPalette;
  font?: {
    size?: number;
  };
  spacing?: number;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ITheme {}
}
