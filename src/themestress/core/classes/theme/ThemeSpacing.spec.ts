import {ThemeSpacing} from './ThemeSpacing';

describe('Class ThemeSpacing', () => {
  it('should set the default props', () => {
    const spacing = new ThemeSpacing();
    expect(spacing.size).toEqual(4);
    expect(spacing.unit).toEqual('px');
  });
  it('should set the custom props', () => {
    const spacing = new ThemeSpacing({spacing: {size: 12, unit: 'pt'}});
    expect(spacing.size).toEqual(12);
    expect(spacing.unit).toEqual('pt');
  });
  it('should set the global css system tokens', () => {
    const addStyle = jest.fn();
    const spacing = new ThemeSpacing();
    spacing.setGlobalCssVars(addStyle);

    expect(addStyle).toHaveBeenLastCalledWith('md-sys-spacing', '4px');
  });
});
