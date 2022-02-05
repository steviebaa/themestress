import {ThemeElevations} from './ThemeElevations';

describe('Class ThemeElevations', () => {
  it('should set the default props', () => {
    const elevations = new ThemeElevations();
    expect(elevations.level1).toEqual({
      overlay:
        'linear-gradient(0deg, rgb(103,80,164,0.05), rgb(103,80,164,0.05))',
      elevation:
        '0px 1px 2px rgb(0,0,0,0.3), 0px 1px 3px 1px rgb(0,0,0,0.15)',
    });
  });
  it('should set the global css variables', () => {
    const elevations = new ThemeElevations();

    const addStyles = jest.fn();
    elevations.setGlobalCssVars(addStyles);

    expect(addStyles).toHaveBeenLastCalledWith(
      'md-sys-overlay-level-5',
      'linear-gradient(0deg, rgb(103,80,164,0.14), rgb(103,80,164,0.14))',
    );
  });
  it('should set the styles', () => {
    const elevations = new ThemeElevations();

    const assignInput = jest.fn();
    elevations['_assignInput'] = assignInput;
    elevations.setStyles('dark', '#444', '#555');

    expect(assignInput).toHaveBeenLastCalledWith({
      mode: 'dark',
      overlayHexColor: '#444',
      shadowHexColor: '#555',
    });
  });
});
