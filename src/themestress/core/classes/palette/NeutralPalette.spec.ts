import {NeutralPalette} from './NeutralPalette';
import {Color} from '../base/Color';

describe('Class NeutralPalette', () => {
  it('should set the light and dark mode tones', () => {
    const lightPalette = new NeutralPalette(new Color('#aaaaaa'));
    expect(lightPalette['_backgroundTone']).toEqual(99);
    expect(lightPalette['_surfaceTone']).toEqual(99);

    const darkPalette = new NeutralPalette(new Color('#aaaaaa'), 'dark');
    expect(darkPalette['_backgroundTone']).toEqual(10);
    expect(darkPalette['_surfaceTone']).toEqual(10);
  });
  it('should return the correct background color', () => {
    const palette = new NeutralPalette(new Color('#aaaaaa'));
    expect(palette.background.hex).toEqual('#fcfcfc');

    palette.setTones('dark');
    expect(palette.background.hex).toEqual('#1a1a1a');
  });
  it('should return the correct surface color', () => {
    const palette = new NeutralPalette(new Color('#aaaaaa'));
    expect(palette.surface.hex).toEqual('#fcfcfc');

    palette.setTones('dark');
    expect(palette.surface.hex).toEqual('#1a1a1a');
  });
  it('should return the correct outline color', () => {
    const palette = new NeutralPalette(new Color('#aaaaaa'));
    expect(palette.outline.hex).toEqual('#808080');

    palette.setTones('dark');
    expect(palette.outline.hex).toEqual('#999999');
  });
  it('should return the correct shadow color', () => {
    const palette = new NeutralPalette(new Color('#aaaaaa'));
    expect(palette.shadow.hex).toEqual('#000000');

    palette.setTones('dark');
    expect(palette.shadow.hex).toEqual('#000000');
  });
});
