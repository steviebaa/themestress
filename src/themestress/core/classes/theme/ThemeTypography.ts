import {addStyleHelper} from '../../definitions';
import {
  typographyRefTokens,
  typographySystemTokens,
  applyTypographySystemTokens,
} from '../../md/typography';
import {mergeDeep} from '../../utils/helpers';

export interface ThemeTypographyProps {
  size?: number;
  regular?: {font?: string; weight?: number; fallback?: string};
  medium?: {font?: string; weight?: number; fallback?: string};
}

export interface ThemeTypographyInitializer
  extends Partial<ThemeTypographyProps> {}

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


  constructor({typography}: {typography?: ThemeTypographyInitializer} = {}) {
    this._setProperties(typography);
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalRefTokenCssVars(addStyle);
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  private _createGlobalRefTokenCssVars = (addStyle: addStyleHelper) => {
    const refTokens = typographyRefTokens('md-ref');

    const {font: regFont, weight: regWeight} = refTokens.regular;
    addStyle(regFont, `${this.regular.font} ${this.regular.fallback}`);
    addStyle(regWeight, this.regular.weight);

    const {font: medFont, weight: medWeight} = refTokens.medium;
    addStyle(medFont, `${this.medium.font} ${this.medium.fallback}`);
    addStyle(medWeight, this.medium.weight);
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    const systemTokens = typographySystemTokens('md-sys', 'md-ref');
    applyTypographySystemTokens(systemTokens, addStyle);
  };

  private _setProperties = (typography?: ThemeTypographyInitializer) => {
    mergeDeep(this.regular, typography?.regular);
    mergeDeep(this.medium, typography?.medium);

    this.size = typography?.size ?? 16;
    document.documentElement.style.setProperty(`font-size`, this.size + 'px');
  };
}
