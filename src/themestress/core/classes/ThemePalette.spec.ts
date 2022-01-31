import {Color} from './base/Color';
import {PaletteInitializer, ThemePalette} from './ThemePalette';

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
    const initPalette: PaletteInitializer = {
      mode: 'light',
    };
    const theme = new ThemePalette(initPalette);

    expect(theme.primary.main.hex).toEqual('#540bc1');
    expect(theme.secondary.main.hex).toEqual('#2435a8');
    expect(theme.tertiary.main.hex).toEqual('#ae04c8');
    expect(theme.neutral.background.hex).toEqual('#fcfcfc');
    expect(theme.neutralVariant.surface.hex).toEqual('#e6e6e6');
    expect(theme.success.main.hex).toEqual('#399347');
    expect(theme.warning.main.hex).toEqual('#be950e');
    expect(theme.info.main.hex).toEqual('#0063cc');
    expect(theme.error.main.hex).toEqual('#b61621');
  });
  it('should initialise with provided string color', () => {
    const initPalette: PaletteInitializer = {
      mode: 'light',
      primary: '#448aff',
      neutral: '#caaaaa',
    };
    const theme = new ThemePalette(initPalette);

    expect(theme.primary.main.hex).toEqual('#004bcc');
    expect(theme.neutral.background.hex).toEqual('#fdfcfc');
  });
  it('should initialise with provided Color class instance', () => {
    const initPalette: PaletteInitializer = {
      mode: 'light',
      primary: new Color('#22aa77'),
    };
    const theme = new ThemePalette(initPalette);

    expect(theme.primary.main.hex).toEqual('#22aa78');
  });
});
