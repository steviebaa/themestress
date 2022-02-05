import {addStyleHelper} from '../../definitions';

export interface ThemeZIndicesProps {
  navbar: number;
  backdrop: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

export interface ThemeZIndicesInitializer extends Partial<ThemeZIndicesProps> {}

export class ThemeZIndices implements ThemeZIndicesProps {
  public navbar: number = null;
  public backdrop: number = null;
  public modal: number = null;
  public snackbar: number = null;
  public tooltip: number = null;

  constructor(zIndices: ThemeZIndicesInitializer = {}) {
    this._setProperties(zIndices);
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    ['navbar', 'backdrop', 'modal', 'snackbar', 'tooltip'].forEach(z => {
      addStyle(`sys-z-index-${z}`, `${this[z]}`);
    });
  };

  private _setProperties = (zIndices?: ThemeZIndicesInitializer) => {
    this.navbar = zIndices.navbar ?? 1100;
    this.backdrop = zIndices.backdrop ?? 1300;
    this.modal = zIndices.modal ?? 1400;
    this.snackbar = zIndices.snackbar ?? 1500;
    this.tooltip = zIndices.tooltip ?? 1600;
  };
}
