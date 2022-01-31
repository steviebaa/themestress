export interface ThemeTypographyInitializer {
  size?: number;
  sizeUnit?: string;
  family?: string;
  familyFallback?: string;
}

export interface ThemeTypographyProps {
  size: number;
  sizeUnit: string;
  family: string;
  familyFallback: string;
}

export class ThemeTypography implements ThemeTypographyProps {
  public size: number;
  public sizeUnit: string;
  public family: string;
  public familyFallback: string;

  constructor(typography?: ThemeTypographyInitializer) {
    this._setProperties(typography);
  }

  private _setProperties(typography?: ThemeTypographyInitializer) {
    this.size = typography?.size ?? 16;
    this.sizeUnit = typography?.sizeUnit ?? 'px';
    this.family = typography?.family ?? 'Roboto';
    this.familyFallback =
      typography?.familyFallback ?? 'Arial Helvetica sans-serif';
  }
}
