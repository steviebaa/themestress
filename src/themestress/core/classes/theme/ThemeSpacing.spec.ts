import {ThemeSpacing} from './ThemeSpacing';

describe('Class ThemeSpacing', () => {
  it('should set the default props', () => {
    const spacing = new ThemeSpacing();
    expect(spacing.size).toEqual(4);
  });
  it('should set the custom props', () => {
    const spacing = new ThemeSpacing({size: 12});
    expect(spacing.size).toEqual(12);
  });
  it('should set the global css system tokens', () => {
    const addStyle = jest.fn();
    const spacing = new ThemeSpacing();
    spacing.setGlobalCssVars(addStyle);

    expect(addStyle).toHaveBeenLastCalledWith('sys-spacing', '4px');
  });
});
