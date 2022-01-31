export interface BreakPoint {
  size: number;
  unit: string;
}

export interface ThemeBreakpointsInitializer {
  xs?: Partial<BreakPoint>;
  sm?: Partial<BreakPoint>;
  md?: Partial<BreakPoint>;
  lg?: Partial<BreakPoint>;
  xl?: Partial<BreakPoint>;
}

export interface ThemeBreakpointsProps {
  xs: BreakPoint;
  sm: BreakPoint;
  md: BreakPoint;
  lg: BreakPoint;
  xl: BreakPoint;
}

export class ThemeBreakpoints implements ThemeBreakpointsProps {
  public xs: BreakPoint = {size: null, unit: null};
  public sm: BreakPoint = {size: null, unit: null};
  public md: BreakPoint = {size: null, unit: null};
  public lg: BreakPoint = {size: null, unit: null};
  public xl: BreakPoint = {size: null, unit: null};

  constructor(breakpoints?: ThemeBreakpointsInitializer) {
    this._setProperties(breakpoints);
  }

  private _setProperties(breakpoints?: ThemeBreakpointsInitializer) {
    this.xs.size = breakpoints?.xs?.size ?? 300;
    this.xs.unit = breakpoints?.xs?.unit ?? 'px';

    this.sm.size = breakpoints?.sm?.size ?? 600;
    this.sm.unit = breakpoints?.sm?.unit ?? 'px';

    this.md.size = breakpoints?.md?.size ?? 900;
    this.md.unit = breakpoints?.md?.unit ?? 'px';

    this.lg.size = breakpoints?.lg?.size ?? 1200;
    this.lg.unit = breakpoints?.lg?.unit ?? 'px';

    this.xl.size = breakpoints?.xl?.size ?? 1536;
    this.xl.unit = breakpoints?.xl?.unit ?? 'px';
  }
}
