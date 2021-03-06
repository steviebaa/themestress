import {Color} from '../base/Color';
import {ThemePalette, ThemePaletteInitializer} from './ThemePalette';

describe('Class ThemePalette', () => {
  it('should correctly set the theme prop', () => {
    const theme1 = new ThemePalette();
    expect(theme1.mode).toEqual('light');
    const theme2 = new ThemePalette({mode: 'light'});
    expect(theme2.mode).toEqual('light');
    const theme3 = new ThemePalette({mode: 'dark'});
    expect(theme3.mode).toEqual('dark');
  });
  it('should initialise with default colors', () => {
    const palette: ThemePaletteInitializer = {
      mode: 'light',
    };
    const theme = new ThemePalette(palette);

    expect(theme.primary.main.hex).toEqual('#564389');
    expect(theme.secondary.main.hex).toEqual('#625b71');
    expect(theme.tertiary.main.hex).toEqual('#7b515f');
    expect(theme.neutral.background.hex).toEqual('#fcfcfd');
    expect(theme.neutralVariant.surface.hex).toEqual('#e6e4e7');
    expect(theme.success.main.hex).toEqual('#529d2f');
    expect(theme.warning.main.hex).toEqual('#ca9b02');
    expect(theme.info.main.hex).toEqual('#28a0a4');
    expect(theme.error.main.hex).toEqual('#ae251e');
  });
  it('should initialise with provided string color', () => {
    const palette: ThemePaletteInitializer = {
      mode: 'light',
      primary: '#448aff',
      neutral: '#caaaaa',
    };
    const theme = new ThemePalette(palette);

    expect(theme.primary.main.hex).toEqual('#004bcc');
    expect(theme.neutral.background.hex).toEqual('#fdfcfc');
  });
  it('should initialise with provided Color class instance', () => {
    const palette: ThemePaletteInitializer = {
      mode: 'light',
      primary: new Color('#22aa77'),
    };
    const theme = new ThemePalette(palette);

    expect(theme.primary.main.hex).toEqual('#22aa78');
  });
  it('should set the ref token global css variables', () => {
    const addStyle = jest.fn();
    const theme = new ThemePalette();
    theme.setGlobalCssVars(addStyle);

    expect(addStyle).toHaveBeenLastCalledWith(
      'sys-color-inverse-primary',
      'ref-palette-primary-80',
      true,
    );
  });
  it('should set the tones', () => {
    const setTone = jest.fn();
    const palette = new ThemePalette();

    palette.primary.setTones = setTone;
    palette.mode = 'dark';

    expect(setTone).toHaveBeenLastCalledWith('dark');
  });
});
