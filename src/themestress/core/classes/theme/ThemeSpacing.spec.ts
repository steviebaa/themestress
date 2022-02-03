import {ThemeSpacing} from './ThemeSpacing';

describe('Class ThemeSpacing', () => {
  it('should set the default props', () => {
    const spacing = new ThemeSpacing();
    expect(spacing.size).toEqual(4);
    expect(spacing.unit).toEqual('px');
  });
  it('should set the custom props', () => {
    const spacing = new ThemeSpacing({
      size: 12,
      unit: 'pt',
    });
    expect(spacing.size).toEqual(12);
    expect(spacing.unit).toEqual('pt');
  });
  it('should set the global css system tokens', () => {
    const spacing = new ThemeSpacing();
    spacing.setGlobalCssVars();

    const style = document.documentElement.style;
    expect(style['_values']['--md-sys-spacing']).toEqual('4px');
  });
});
