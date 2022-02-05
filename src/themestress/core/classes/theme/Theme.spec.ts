import {Theme} from './Theme';
import {ThemeBreakpoints} from './ThemeBreakpoints';
import {ThemeElevations} from './ThemeElevations';
import {ThemePalette} from './ThemePalette';
import {ThemeSpacing} from './ThemeSpacing';
import {ThemeTypography} from './ThemeTypography';
import {ThemeZIndices} from './ThemeZIndices';

describe('Class Theme', () => {
  it('should generate a theme with defaults', () => {
    const theme = new Theme();

    expect(theme.palette.primary.keyColor.hex).toBeDefined();
    expect(theme.typography.regular.font).toBeDefined();
    expect(theme.breakpoints.md).toBeDefined();
  });
  it('should generate a theme with custom palette', () => {
    const palette = new ThemePalette({palette: {primary: '#448aff'}});
    const theme = new Theme({palette});

    expect(theme.palette.primary.keyColor.hex).toEqual('#4287ff');
    expect(theme.spacing.size).toBeDefined();
    expect(theme.zIndices).toBeDefined();
  });
  it('should generate a theme with custom typography', () => {
    const typography = new ThemeTypography({
      typography: {size: 14, regular: {font: 'Montserrat'}},
    });
    const theme = new Theme({typography});

    expect(theme.typography.regular.font).toEqual('Montserrat');
    expect(theme.typography.size).toEqual(14);
  });
  it('should generate a theme with custom spacing', () => {
    const spacing = new ThemeSpacing({spacing: {size: 1, unit: 'cm'}});
    const theme = new Theme({spacing});

    expect(theme.spacing.size).toEqual(1);
    expect(theme.spacing.unit).toEqual('cm');
  });
  it('should generate a theme with custom zIndices', () => {
    const zIndices = new ThemeZIndices({zIndices: {modal: 300}});
    const theme = new Theme({zIndices});

    expect(theme.zIndices.modal).toEqual(300);
  });
  it('should generate a theme with custom breakpoints', () => {
    const breakpoints = new ThemeBreakpoints({
      breakpoints: {xs: {size: 2, unit: 'cm'}},
    });
    const theme = new Theme({breakpoints});

    expect(theme.breakpoints.xs.size).toEqual(2);
    expect(theme.breakpoints.xs.unit).toEqual('cm');
  });
  it('should generate a theme with custom elevations', () => {
    const elevations = new ThemeElevations({mode: 'dark'});
    const theme = new Theme({elevations});

    expect(theme.elevations.level1.shadow).toEqual(
      'box-shadow: 0px 1px 3px 1px rgb(0,0,0,0.15), 0px 1px 2px rgb(0,0,0,0.3)',
    );
  });
  it('should add a style to the private styles variable', () => {
    const theme = new Theme();
    theme['_addStyle']('test', 'variable;');
    theme['_addStyle']('test2', 'variable2', true);
    expect(theme['_styles'].includes('--test: variable;')).toBeTruthy();
    expect(
      theme['_styles'].includes('--test2: var(--variable2);'),
    ).toBeTruthy();
  });
  it('should set the theme mode', () => {
    const setGlobalCssVars = jest.fn();

    const theme = new Theme();
    theme['_setGlobalCssVars'] = setGlobalCssVars;

    theme.setMode('dark');
    expect(setGlobalCssVars).toHaveBeenCalledTimes(1);
  });
});
