import {applyStyleVar} from '@themestress/core/utils/helpers';

export interface ThemeSpacingProps {
  size: number;
  unit: string;
}

export type ThemeSpacingInitializer = Partial<ThemeSpacingProps>;

export class ThemeSpacing implements ThemeSpacingProps {
  public size: number;
  public unit: string;

  constructor(spacing?: ThemeSpacingInitializer) {
    this._setProperties(spacing);
  }

  public setGlobalCssVars() {
    this._createGlobalSystemTokenCssVars();
  }

  private _setProperties(spacing?: ThemeSpacingInitializer) {
    this.size = spacing?.size ?? 4;
    this.unit = spacing?.unit ?? 'px';
  }

  private _createGlobalSystemTokenCssVars = () => {
    applyStyleVar('md-sys-spacing', `${this.size}${this.unit}`);
  };
}
