import {applyStyleVar} from '@themestress/core/utils/helpers';

export interface ThemeZIndicesProps {
  navbar: number;
  backdrop: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

export type ThemeZIndicesInitializer = Partial<ThemeZIndicesProps>;

export class ThemeZIndices implements ThemeZIndicesProps {
  public navbar: number = null;
  public backdrop: number = null;
  public modal: number = null;
  public snackbar: number = null;
  public tooltip: number = null;

  constructor(zIndices?: ThemeZIndicesInitializer) {
    this._setProperties(zIndices);
  }

  public setGlobalCssVars() {
    this._createGlobalSystemTokenCssVars();
  }

  private _createGlobalSystemTokenCssVars = () => {
    ['navbar', 'backdrop', 'modal', 'snackbar', 'tooltip'].forEach(z => {
      applyStyleVar(`md-sys-z-index-${z}`, `${this[z].size}${this[z].unit}`);
    });
  };

  private _setProperties(zIndices?: ThemeZIndicesInitializer) {
    this.navbar = zIndices?.navbar ?? 1100;
    this.backdrop = zIndices?.backdrop ?? 1300;
    this.modal = zIndices?.modal ?? 1400;
    this.snackbar = zIndices?.snackbar ?? 1500;
    this.tooltip = zIndices?.tooltip ?? 1600;
  }
}
