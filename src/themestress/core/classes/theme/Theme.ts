import {ThemeBreakpoints} from './ThemeBreakpoints';
import {ThemeElevations} from './ThemeElevation';
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
  elevations: ThemeElevations;
}

export type ThemeInitializer = Partial<ThemeProps>;

export class Theme implements ThemeProps {
  public palette: ThemePalette;
  public typography: ThemeTypography;
  public spacing: ThemeSpacing;
  public zIndices: ThemeZIndices;
  public breakpoints: ThemeBreakpoints;
  public elevations: ThemeElevations;

  private styles: string = '';
  private stylesheet: HTMLStyleElement;

  constructor(theme?: ThemeInitializer) {
    this._createStyleElement();
    this._setProperties(theme);
  }

  private _createStyleElement = () => {
    const head = document.querySelector('head');
    const existingStylesheet = head.querySelector(
      '#themestress-stylesheet',
    ) as HTMLStyleElement;

    if (!existingStylesheet) {
      this.stylesheet = document.createElement('style');
      this.stylesheet.id = 'themestress-stylesheet';
      head.appendChild(this.stylesheet);
    } else {
      this.stylesheet = existingStylesheet;
    }
  };

  private _addStyle = (
    key: string,
    value: string | number,
    isVar: boolean = false,
  ) => {
    let style = `--${key}: ${String(isVar ? `var(--${value})` : value)}`;
    style = style.slice(-1) === ';' ? style : (style += ';');
    if (!this.styles.includes(style)) this.styles += style;
  };

  private _applyStyles = () => {
    this.stylesheet.innerHTML = `:root {${this.styles}}`;
  };

  public setGlobalCssVars = () => {
    this.palette.setGlobalCssVars(this._addStyle);
    this.typography.setGlobalCssVars(this._addStyle);
    this.spacing.setGlobalCssVars(this._addStyle);
    this.zIndices.setGlobalCssVars(this._addStyle);
    this.breakpoints.setGlobalCssVars(this._addStyle);
    this.elevations.setGlobalCssVars(this._addStyle);

    this._applyStyles();
  };

  private _setProperties = (theme?: ThemeInitializer) => {
    this.palette = theme?.palette ?? new ThemePalette();
    this.typography = theme?.typography ?? new ThemeTypography();
    this.spacing = theme?.spacing ?? new ThemeSpacing();
    this.zIndices = theme?.zIndices ?? new ThemeZIndices();
    this.breakpoints = theme?.breakpoints ?? new ThemeBreakpoints();
    this.elevations = theme?.elevations ?? new ThemeElevations(this);
  };
}
