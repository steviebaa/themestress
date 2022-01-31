export interface ThemeZIndicesInitializer {
  navbar?: number;
  backdrop?: number;
  modal?: number;
  snackbar?: number;
  tooltip?: number;
}

export interface ThemeZIndicesProps {
  navbar: number;
  backdrop: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

export class ThemeZIndices implements ThemeZIndicesProps {
  public navbar: number;
  public backdrop: number;
  public modal: number;
  public snackbar: number;
  public tooltip: number;

  constructor(zIndices?: ThemeZIndicesInitializer) {
    this._setProperties(zIndices);
  }

  private _setProperties(zIndices?: ThemeZIndicesInitializer) {
    this.navbar = zIndices?.navbar ?? 1100;
    this.backdrop = zIndices?.backdrop ?? 1300;
    this.modal = zIndices?.modal ?? 1400;
    this.snackbar = zIndices?.snackbar ?? 1500;
    this.tooltip = zIndices?.tooltip ?? 1600;
  }
}
