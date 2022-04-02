import {addStyleHelper} from '../../definitions';

export interface ThemeBreakPoint {
  size: number;
  unit: string;
}

export interface ThemeBreakpointsProps {
  xs: ThemeBreakPoint;
  sm: ThemeBreakPoint;
  md: ThemeBreakPoint;
  lg: ThemeBreakPoint;
  xl: ThemeBreakPoint;
}

export type ThemeBreakpointsInitializer = Partial<ThemeBreakpointsProps>;

export class ThemeBreakpoints implements ThemeBreakpointsProps {
  public xs: ThemeBreakPoint = {size: null, unit: null};
  public sm: ThemeBreakPoint = {size: null, unit: null};
  public md: ThemeBreakPoint = {size: null, unit: null};
  public lg: ThemeBreakPoint = {size: null, unit: null};
  public xl: ThemeBreakPoint = {size: null, unit: null};

  constructor(breakpoints: ThemeBreakpointsInitializer = {}) {
    this._setProperties(breakpoints);
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  /** If the value provided matches a breakpoint, the breakpoint will be returned, else the provided value. */
  public parse = (value: string) => {
    if (['xs', 'sm', 'md', 'lg', 'xl'].includes(value)) {
      return `${this[value].size}${this[value].unit}`;
    } else {
      return value;
    }
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(bp => {
      addStyle(`sys-breakpoint-${bp}`, `${this[bp].size}${this[bp].unit}`);
    });
  };

  private _setProperties = (breakpoints?: ThemeBreakpointsInitializer) => {
    this.xs.size = breakpoints.xs?.size ?? 300;
    this.xs.unit = breakpoints.xs?.unit ?? 'px';

    this.sm.size = breakpoints.sm?.size ?? 600;
    this.sm.unit = breakpoints.sm?.unit ?? 'px';

    this.md.size = breakpoints.md?.size ?? 905;
    this.md.unit = breakpoints.md?.unit ?? 'px';

    this.lg.size = breakpoints.lg?.size ?? 1240;
    this.lg.unit = breakpoints.lg?.unit ?? 'px';

    this.xl.size = breakpoints.xl?.size ?? 1440;
    this.xl.unit = breakpoints.xl?.unit ?? 'px';
  };
}
