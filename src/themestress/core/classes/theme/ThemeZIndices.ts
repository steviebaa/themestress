import {addStyleHelper} from '../../definitions';

export interface ThemeZIndicesProps {
  fab: number;
  navbar: number;
  backdrop: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

export interface ThemeZIndicesInitializer extends Partial<ThemeZIndicesProps> {}

export class ThemeZIndices implements ThemeZIndicesProps {
  public fab: number = null;
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
    ['fab', 'navbar', 'backdrop', 'modal', 'snackbar', 'tooltip'].forEach(z => {
      addStyle(`sys-z-index-${z}`, `${this[z]}`);
    });
  };

  private _setProperties = (zIndices?: ThemeZIndicesInitializer) => {
    this.fab = zIndices.fab ?? 1100;
    this.navbar = zIndices.navbar ?? 1200;
    this.backdrop = zIndices.backdrop ?? 1400;
    this.modal = zIndices.modal ?? 1500;
    this.snackbar = zIndices.snackbar ?? 1600;
    this.tooltip = zIndices.tooltip ?? 1700;
  };
}
