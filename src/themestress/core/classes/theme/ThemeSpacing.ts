import {addStyleHelper} from '../../definitions';

export interface ThemeSpacingProps {
  size: number;
  unit: string;
}

export interface ThemeSpacingInitializer extends Partial<ThemeSpacingProps> {}

export class ThemeSpacing implements ThemeSpacingProps {
  public size: number;
  public unit: string;

  constructor({spacing}: {spacing?: ThemeSpacingInitializer} = {}) {
    this._setProperties(spacing);
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    addStyle('md-sys-spacing', `${this.size}${this.unit}`);
  };

  private _setProperties = (spacing?: ThemeSpacingInitializer) => {
    this.size = spacing?.size ?? 4;
    this.unit = spacing?.unit ?? 'px';
  };
}
