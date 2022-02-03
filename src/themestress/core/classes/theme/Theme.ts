import {ThemeBreakpoints} from './ThemeBreakpoints';
import {ThemePalette} from './ThemePalette';
import {ThemeSpacing} from './ThemeSpacing';
import {ThemeTypography} from './ThemeTypography';
import {ThemeZIndices} from './ThemeZIndices';

export interface ThemeProps {
  palette: ThemePalette;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  zIndices: ThemeZIndices;
  breakpoints: ThemeBreakpoints;
}

export type ThemeInitializer = Partial<ThemeProps>;

export class Theme implements ThemeProps {
  palette: ThemePalette;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  zIndices: ThemeZIndices;
  breakpoints: ThemeBreakpoints;

  constructor(theme?: ThemeInitializer) {
    this._setProperties(theme);
  }

  public setGlobalCssVars() {
    this.palette.setGlobalCssVars();
    this.typography.setGlobalCssVars();
    this.spacing.setGlobalCssVars();
    this.zIndices.setGlobalCssVars();
    this.breakpoints.setGlobalCssVars();
  }

  private _setProperties(theme?: ThemeInitializer) {
    this.palette = theme?.palette ?? new ThemePalette();
    this.typography = theme?.typography ?? new ThemeTypography();
    this.spacing = theme?.spacing ?? new ThemeSpacing();
    this.zIndices = theme?.zIndices ?? new ThemeZIndices();
    this.breakpoints = theme?.breakpoints ?? new ThemeBreakpoints();
  }
}
