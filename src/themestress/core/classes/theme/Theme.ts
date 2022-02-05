import {ThemeMode} from '../../definitions';
import {ThemeBreakpoints} from './ThemeBreakpoints';
import {ThemeElevations} from './ThemeElevations';
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

export interface ThemeInitializer extends Partial<ThemeProps> {}

export class Theme implements ThemeProps {
  public palette: ThemePalette;
  public typography: ThemeTypography;
  public spacing: ThemeSpacing;
  public zIndices: ThemeZIndices;
  public breakpoints: ThemeBreakpoints;
  public elevations: ThemeElevations;

  private _styles: string = '';
  private _stylesheet: HTMLStyleElement;

  constructor(theme?: ThemeInitializer) {
    this._createStyleElement();
    this._setProperties(theme);
    this._setGlobalCssVars();
  }

  private _setGlobalCssVars = () => {
    this.palette.setGlobalCssVars(this._addStyle);
    this.typography.setGlobalCssVars(this._addStyle);
    this.spacing.setGlobalCssVars(this._addStyle);
    this.zIndices.setGlobalCssVars(this._addStyle);
    this.breakpoints.setGlobalCssVars(this._addStyle);
    this.elevations.setGlobalCssVars(this._addStyle);

    this._applyStyles();
  };

  public setMode = (mode: ThemeMode) => {
    this.palette.mode = mode;
    this.elevations.setStyles(
      mode,
      this.palette.primary.main.hex,
      this.palette.neutral.shadow.hex,
    );

    this._setGlobalCssVars();
  };

  private _createStyleElement = () => {
    const head = document.querySelector('head');
    const existingStylesheet = head.querySelector(
      '#themestress-stylesheet',
    ) as HTMLStyleElement;

    if (!existingStylesheet) {
      this._stylesheet = document.createElement('style');
      this._stylesheet.id = 'themestress-stylesheet';
      head.appendChild(this._stylesheet);
    } else {
      this._stylesheet = existingStylesheet;
    }
  };

  private _addStyle = (
    key: string,
    value: string | number,
    isVar: boolean = false,
  ) => {
    let style = `--${key}: ${String(isVar ? `var(--${value})` : value)}`;
    style = style.slice(-1) === ';' ? style : (style += ';');
    if (!this._styles.includes(style)) this._styles += style;
  };

  private _applyStyles = () => {
    this._stylesheet.innerHTML = `:root {${this._styles}}`;
  };

  private _setProperties = (theme?: ThemeInitializer) => {
    this.palette = theme?.palette ?? new ThemePalette();
    this.typography = theme?.typography ?? new ThemeTypography();
    this.spacing = theme?.spacing ?? new ThemeSpacing();
    this.zIndices = theme?.zIndices ?? new ThemeZIndices();
    this.breakpoints = theme?.breakpoints ?? new ThemeBreakpoints();
    this.elevations =
      theme?.elevations ?? new ThemeElevations({mode: this.palette.mode});
  };
}
