import {NeutralVariantPalette} from './NeutralVariantPalette';
import {Color} from '../base/Color';

describe('Class NeutralVariantPalette', () => {
  it('should set the light and dark mode tones', () => {
    const lightPalette = new NeutralVariantPalette(new Color('#aaaaaa'));
    expect(lightPalette['_outlineTone']).toEqual(50);
    expect(lightPalette['_surfaceTone']).toEqual(90);

    const darkPalette = new NeutralVariantPalette(new Color('#aaaaaa'), 'dark');
    expect(darkPalette['_outlineTone']).toEqual(50);
    expect(darkPalette['_surfaceTone']).toEqual(10);
  });
  it('should return the correct outline color', () => {
    const palette = new NeutralVariantPalette(new Color('#aaaaaa'));
    expect(palette.outline.hex).toEqual('#808080');

    palette.setTones('dark');
    expect(palette.outline.hex).toEqual('#808080');
  });
  it('should return the correct surface color', () => {
    const palette = new NeutralVariantPalette(new Color('#aaaaaa'));
    expect(palette.surface.hex).toEqual('#e6e6e6');

    palette.setTones('dark');
    expect(palette.surface.hex).toEqual('#1a1a1a');
  });
});
