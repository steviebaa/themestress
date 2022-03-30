import {ThemeMode} from '../../definitions';
import {
  ThemeBreakpoints,
  ThemeBreakpointsInitializer,
} from './ThemeBreakpoints';
import {ThemeElevations} from './ThemeElevations';
import {ThemePalette, ThemePaletteInitializer} from './ThemePalette';
import {ThemeSpacing, ThemeSpacingInitializer} from './ThemeSpacing';
import {ThemeStates, ThemeStatesInitializer} from './ThemeStates';
import {ThemeTypography, ThemeTypographyInitializer} from './ThemeTypography';
import {ThemeZIndices, ThemeZIndicesInitializer} from './ThemeZIndices';

export interface ThemeProps {
  palette: ThemePalette;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  zIndices: ThemeZIndices;
  breakpoints: ThemeBreakpoints;
  elevations: ThemeElevations;
  states: ThemeStates;
}

export interface ThemeInitializer {
  palette?: ThemePaletteInitializer;
  typography?: ThemeTypographyInitializer;
  spacing?: ThemeSpacingInitializer;
  zIndices?: ThemeZIndicesInitializer;
  breakpoints?: ThemeBreakpointsInitializer;
  elevations?: ThemeElevations;
  states?: ThemeStatesInitializer;
}

export class Theme implements ThemeProps {
  public palette: ThemePalette;
  public typography: ThemeTypography;
  public spacing: ThemeSpacing;
  public zIndices: ThemeZIndices;
  public breakpoints: ThemeBreakpoints;
  public elevations: ThemeElevations;
  public states: ThemeStates;

  private _styles = {};
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
    this.states.setGlobalCssVars(this._addStyle);

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
    let style = `${String(isVar ? `var(--${value})` : value)}`;
    style = style.slice(-1) === ';' ? style : (style += ';');
    this._styles[`--${key}`] = style;
  };

  private _applyStyles = () => {
    let styles = '';
    for (const key in this._styles) {
      styles += `${key}: ${this._styles[key]}`;
    }
    this._stylesheet.innerHTML = `:root {${styles}}`;
  };

  private _setProperties = (theme?: ThemeInitializer) => {
    this.palette = new ThemePalette(theme?.palette);
    this.typography = new ThemeTypography(theme?.typography);
    this.spacing = new ThemeSpacing(theme?.spacing);
    this.zIndices = new ThemeZIndices(theme?.zIndices);
    this.breakpoints = new ThemeBreakpoints(theme?.breakpoints);
    this.elevations = new ThemeElevations({mode: this.palette.mode});
    this.states = new ThemeStates(theme?.states);
  };
}
