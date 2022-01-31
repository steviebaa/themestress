import {ThemeMode} from '../../definitions';
import {Color} from '../base/Color';
import {TonalPalette} from '../base/TonalPalette';

export class NeutralVariantPalette extends TonalPalette {
  private _outlineTone = 50;
  private _surfaceTone: number;

  constructor(props: Color, mode: ThemeMode = 'light') {
    super(props);

    this.setTones(mode);
  }

  /** Get the outline color */
  get outline(): Color {
    return this.tones[this._outlineTone];
  }

  /** Get the surface color */
  get surface(): Color {
    return this.tones[this._surfaceTone];
  }

  /** Set the tones of the palette to the recommend values */
  public setTones(mode: ThemeMode) {
    const isLight = mode === 'light';

    this._surfaceTone = isLight ? 90 : 10;
    this.surface.on = this.tones[isLight ? 30 : 70];
  }
}
