import {ThemeSpacing} from './ThemeSpacing';

describe('Class ThemeSpacing', () => {
  it('should set the default props', () => {
    const spacing = new ThemeSpacing();
    expect(spacing.size).toEqual(4);
    expect(spacing.sizeUnit).toEqual('px');
  });
  it('should set the custom props', () => {
    const spacing = new ThemeSpacing({
      size: 12,
      sizeUnit: 'pt',
    });
    expect(spacing.size).toEqual(12);
    expect(spacing.sizeUnit).toEqual('pt');
  });
});
