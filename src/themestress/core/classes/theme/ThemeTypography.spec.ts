import {ThemeTypography} from './ThemeTypography';

describe('Class ThemeTypography', () => {
  it('should set the default props', () => {
    const typography = new ThemeTypography();
    expect(typography.size).toEqual(16);
    expect(typography.sizeUnit).toEqual('px');
    expect(typography.family).toEqual('Roboto');
    expect(typography.familyFallback).toEqual('Arial Helvetica sans-serif');
  });
  it('should set the custom props', () => {
    const typography = new ThemeTypography({
      size: 12,
      sizeUnit: 'pt',
      family: 'Montserrat',
      familyFallback: 'Helvetica',
    });
    expect(typography.size).toEqual(12);
    expect(typography.sizeUnit).toEqual('pt');
    expect(typography.family).toEqual('Montserrat');
    expect(typography.familyFallback).toEqual('Helvetica');
  });
});
