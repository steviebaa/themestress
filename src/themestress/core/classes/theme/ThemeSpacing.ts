import {addStyleHelper} from '../../definitions';

export interface ThemeSpacingProps {
  size: number;
}

export interface ThemeSpacingInitializer extends Partial<ThemeSpacingProps> {}

export class ThemeSpacing implements ThemeSpacingProps {
  public size: number;

  constructor(spacing: ThemeSpacingInitializer = {}) {
    this._setProperties(spacing);
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    addStyle('sys-spacing', `${this.size}px`);
  };

  private _setProperties = (spacing?: ThemeSpacingInitializer) => {
    this.size = spacing.size ?? 4;
  };
}
