import {
  typographyRefTokens,
  typographySystemTokens,
  applyTypographySystemTokens,
} from '../../md/typography';
import {applyStyleVar, mergeDeep} from '../../utils/helpers';

export interface ThemeTypographyProps {
  size?: number;
  regular?: {font?: string; weight?: number; fallback?: string};
  medium?: {font?: string; weight?: number; fallback?: string};
}

export type ThemeTypographyInitializer = Partial<ThemeTypographyProps>;

export class ThemeTypography implements ThemeTypographyProps {
  public size: number;
  public regular = {
    font: 'Roboto',
    weight: 400,
    fallback: 'Arial Helvetica sans-serif',
  };
  public medium = {
    font: 'Roboto',
    weight: 500,
    fallback: 'Arial Helvetica sans-serif',
  };

  constructor(typography?: ThemeTypographyInitializer) {
    this._setProperties(typography);
  }

  public setGlobalCssVars() {
    this._createGlobalRefTokenCssVars();
    this._createGlobalSystemTokenCssVars();
  }

  private _createGlobalRefTokenCssVars = () => {
    const refTokens = typographyRefTokens('md-ref');

    const {font: regFont, weight: regWeight} = refTokens.regular;
    applyStyleVar(regFont, `${this.regular.font} ${this.regular.fallback}`);
    applyStyleVar(regWeight, this.regular.weight);

    const {font: medFont, weight: medWeight} = refTokens.medium;
    applyStyleVar(medFont, `${this.medium.font} ${this.medium.fallback}`);
    applyStyleVar(medWeight, this.medium.weight);
  };

  private _createGlobalSystemTokenCssVars = () => {
    const systemTokens = typographySystemTokens('md-sys', 'md-ref');
    applyTypographySystemTokens(systemTokens);
  };

  private _setProperties(typography?: ThemeTypographyInitializer) {
    mergeDeep(this.regular, typography?.regular);
    mergeDeep(this.medium, typography?.medium);

    this.size = typography?.size ?? 16;
    document.documentElement.style.setProperty(`font-size`, this.size + 'px');
  }
}
