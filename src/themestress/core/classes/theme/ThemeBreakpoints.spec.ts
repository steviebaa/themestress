import {ThemeBreakpoints} from './ThemeBreakpoints';

describe('Class ThemeBreakpoints', () => {
  it('should set the default props', () => {
    const breakpoints = new ThemeBreakpoints();
    expect(breakpoints.xs).toEqual({size: 0, unit: 'px'});
    expect(breakpoints.sm).toEqual({size: 600, unit: 'px'});
    expect(breakpoints.md).toEqual({size: 905, unit: 'px'});
    expect(breakpoints.lg).toEqual({size: 1240, unit: 'px'});
    expect(breakpoints.xl).toEqual({size: 1440, unit: 'px'});
  });
  it('should set the custom props', () => {
    const breakpoints = new ThemeBreakpoints({
      xs: {size: 1, unit: 'pt'},
      sm: {size: 2, unit: 'pt'},
      md: {size: 3, unit: 'pt'},
      lg: {size: 4, unit: 'pt'},
      xl: {size: 5, unit: 'pt'},
    });
    expect(breakpoints.xs).toEqual({size: 1, unit: 'pt'});
    expect(breakpoints.sm).toEqual({size: 2, unit: 'pt'});
    expect(breakpoints.md).toEqual({size: 3, unit: 'pt'});
    expect(breakpoints.lg).toEqual({size: 4, unit: 'pt'});
    expect(breakpoints.xl).toEqual({size: 5, unit: 'pt'});
  });
  it('should set the global css variables', () => {
    const addStyle = jest.fn();
    const breakpoints = new ThemeBreakpoints();
    breakpoints.setGlobalCssVars(addStyle);

    expect(addStyle).toHaveBeenLastCalledWith('sys-breakpoint-xl', '1440px');
  });
  it('should parse a breakpoint', () => {
    const breakpoints = new ThemeBreakpoints();

    expect(breakpoints.parse('sm')).toEqual('600px');
    expect(breakpoints.parse('3rem')).toEqual('3rem');
  });
});
