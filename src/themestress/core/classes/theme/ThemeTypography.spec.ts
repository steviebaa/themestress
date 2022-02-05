import {ThemeTypography} from './ThemeTypography';

describe('Class ThemeTypography', () => {
  it('should set the default props', () => {
    const typography = new ThemeTypography();
    expect(typography.size).toEqual(16);
    expect(typography.regular.weight).toEqual(400);
    expect(typography.regular.font).toEqual('Roboto');
    expect(typography.regular.fallback).toEqual(
      '"Arial", "Helvetica", sans-serif',
    );
    expect(typography.medium.weight).toEqual(500);
    expect(typography.medium.font).toEqual('Roboto');
    expect(typography.medium.fallback).toEqual(
      '"Arial", "Helvetica", sans-serif',
    );
  });
  it('should set the custom props', () => {
    const typography = new ThemeTypography({
      typography: {
        size: 12,
        regular: {font: 'Montserrat', fallback: 'Helvetica'},
        medium: {weight: 700},
      },
    });
    expect(typography.size).toEqual(12);
    expect(typography.regular.weight).toEqual(400);
    expect(typography.regular.font).toEqual('Montserrat');
    expect(typography.regular.fallback).toEqual('Helvetica');
    expect(typography.medium.weight).toEqual(700);
    expect(typography.medium.font).toEqual('Roboto');
    expect(typography.medium.fallback).toEqual(
      '"Arial", "Helvetica", sans-serif',
    );
  });

  it('should set the global css variables', () => {
    const addStyle = jest.fn();
    const typography = new ThemeTypography();
    typography.setGlobalCssVars(addStyle);

    expect(addStyle).toHaveBeenLastCalledWith(
      'md-sys-typescale-body-small-weight',
      'md-ref-typeface-weight-regular',
      true,
    );
  });
});
