import {Theme} from './Theme';
import {ThemeBreakpoints} from './ThemeBreakpoints';
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
    const palette = new ThemePalette({primary: '#448aff'});
    const theme = new Theme({palette});

    expect(theme.palette.primary.keyColor.hex).toEqual('#4287ff');
    expect(theme.spacing.size).toBeDefined();
    expect(theme.zIndices).toBeDefined();
  });
  it('should generate a theme with custom typography', () => {
    const typography = new ThemeTypography({
      size: 14,
      regular: {font: 'Montserrat'},
    });
    const theme = new Theme({typography});

    expect(theme.typography.regular.font).toEqual('Montserrat');
    expect(theme.typography.size).toEqual(14);
  });
  it('should generate a theme with custom spacing', () => {
    const spacing = new ThemeSpacing({size: 1, sizeUnit: 'cm'});
    const theme = new Theme({spacing});

    expect(theme.spacing.size).toEqual(1);
    expect(theme.spacing.sizeUnit).toEqual('cm');
  });
  it('should generate a theme with custom zIndices', () => {
    const zIndices = new ThemeZIndices({modal: 300});
    const theme = new Theme({zIndices});

    expect(theme.zIndices.modal).toEqual(300);
  });

  it('should generate a theme with custom breakpoints', () => {
    const breakpoints = new ThemeBreakpoints({xs: {size: 2, unit: 'cm'}});
    const theme = new Theme({breakpoints});

    expect(theme.breakpoints.xs.size).toEqual(2);
    expect(theme.breakpoints.xs.unit).toEqual('cm');
  });
});
