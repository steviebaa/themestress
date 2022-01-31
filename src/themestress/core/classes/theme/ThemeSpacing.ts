export interface ThemeSpacingProps {
  size: number;
  sizeUnit: string;
}

export type ThemeSpacingInitializer = Partial<ThemeSpacingProps>;

export class ThemeSpacing implements ThemeSpacingProps {
  public size: number;
  public sizeUnit: string;

  constructor(spacing?: ThemeSpacingInitializer) {
    this._setProperties(spacing);
  }

  private _setProperties(spacing?: ThemeSpacingInitializer) {
    this.size = spacing?.size ?? 4;
    this.sizeUnit = spacing?.sizeUnit ?? 'px';
  }
}
