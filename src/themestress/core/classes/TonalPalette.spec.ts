import {Color} from './Color';
import {TonalPalette} from './TonalPalette';

describe('Class TonalPalette', () => {
  describe('getters', () => {
    it('should get the keyColor', () => {
      const color = new Color('#680ce9');
      const tonalPalette = new TonalPalette(color);
      expect(tonalPalette.keyColor).toEqual(color);
    });
    it('should get the tones', () => {
      const color = new Color('#680ce9');
      const tonalPalette = new TonalPalette(color);
      const tones = Object.values(tonalPalette.tones).map(color => color.hex);
      expect(tones).toEqual([
        '#000000',
        '#160330',
        '#2b0561',
        '#410891',
        '#570ac2',
        '#6c0df2',
        '#8a3df5',
        '#a76ef7',
        '#c49efa',
        '#e2cffc',
        '#f0e7fe',
        '#fcfaff',
        '#ffffff',
      ]);
    });

    it('should get the correct "on" color', () => {
      const tonalPalette = new TonalPalette(new Color('#448aff'));
      expect(tonalPalette.tones[60].on.hex).toEqual('#001333');

      const tonalPalette2 = new TonalPalette(new Color('#680ce9'));
      expect(tonalPalette2.tones[50].on.hex).toEqual('#e2cffc');
    });
  });

  it('should set the new palette', () => {
    const color = new Color('#680ce9');
    const tonalPalette = new TonalPalette(color);

    const newColor = new Color('#fba91a');
    tonalPalette.keyColor = newColor;

    expect(tonalPalette.keyColor).toEqual(newColor);
  });
});
