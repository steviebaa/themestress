import {applyStyleVar} from '@themestress/core/utils/helpers';

interface ZIndex {
  size?: number;
  unit?: string;
}

export interface ThemeZIndicesProps {
  navbar: ZIndex;
  backdrop: ZIndex;
  modal: ZIndex;
  snackbar: ZIndex;
  tooltip: ZIndex;
}

export type ThemeZIndicesInitializer = Partial<ThemeZIndicesProps>;

export class ThemeZIndices implements ThemeZIndicesProps {
  public navbar: ZIndex = {size: null, unit: null};
  public backdrop: ZIndex = {size: null, unit: null};
  public modal: ZIndex = {size: null, unit: null};
  public snackbar: ZIndex = {size: null, unit: null};
  public tooltip: ZIndex = {size: null, unit: null};

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
    this.navbar.size = zIndices?.navbar?.size ?? 1100;
    this.navbar.unit = zIndices?.navbar?.unit ?? 'px';

    this.backdrop.size = zIndices?.backdrop?.size ?? 1300;
    this.backdrop.unit = zIndices?.backdrop?.unit ?? 'px';

    this.modal.size = zIndices?.modal?.size ?? 1400;
    this.modal.unit = zIndices?.modal?.unit ?? 'px';

    this.snackbar.size = zIndices?.snackbar?.size ?? 1500;
    this.snackbar.unit = zIndices?.snackbar?.unit ?? 'px';

    this.tooltip.size = zIndices?.tooltip?.size ?? 1600;
    this.tooltip.unit = zIndices?.tooltip?.unit ?? 'px';
  }
}
