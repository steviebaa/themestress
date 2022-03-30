import {AccentPalette} from './AccentPalette';
import {Color} from '../base/Color';

describe('Class AccentPalette', () => {
  it('should set the light and dark mode tones', () => {
    const lightPalette = new AccentPalette(new Color('#fba91a'));
    expect(lightPalette['_mainTone']).toEqual(40);
    expect(lightPalette['_containerTone']).toEqual(90);

    const darkPalette = new AccentPalette(new Color('#fba91a'), 'dark');
    expect(darkPalette['_mainTone']).toEqual(80);
    expect(darkPalette['_containerTone']).toEqual(30);
  });
  it('should return the correct main color', () => {
    const palette = new AccentPalette(new Color('#fba91a'));
    expect(palette.main.hex).toEqual('#c98003');

    palette.setTones('dark');
    expect(palette.main.hex).toEqual('#fdd99b');
  });
  it('should return the correct container color', () => {
    const palette = new AccentPalette(new Color('#fba91a'));
    expect(palette.container.hex).toEqual('#feeccd');

    palette.setTones('dark');
    expect(palette.container.hex).toEqual('#976002');
  });
});
