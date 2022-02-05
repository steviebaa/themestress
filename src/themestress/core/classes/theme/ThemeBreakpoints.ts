import {addStyleHelper} from '../../definitions';

export interface BreakPoint {
  size: number;
  unit: string;
}

export interface ThemeBreakpointsProps {
  xs: BreakPoint;
  sm: BreakPoint;
  md: BreakPoint;
  lg: BreakPoint;
  xl: BreakPoint;
}

export interface ThemeBreakpointsInitializer
  extends Partial<ThemeBreakpointsProps> {}

export class ThemeBreakpoints implements ThemeBreakpointsProps {
  public xs: BreakPoint = {size: null, unit: null};
  public sm: BreakPoint = {size: null, unit: null};
  public md: BreakPoint = {size: null, unit: null};
  public lg: BreakPoint = {size: null, unit: null};
  public xl: BreakPoint = {size: null, unit: null};

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
    this.xs.size = breakpoints.xs?.size ?? 0;
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
