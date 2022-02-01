import {ThemeMode} from '../../definitions';
import {Color} from '../base/Color';
import {TonalPalette} from '../base/TonalPalette';

export class NeutralPalette extends TonalPalette {
  private _backgroundTone: number;
  private _surfaceTone: number;

  constructor(props: Color, mode: ThemeMode = 'light') {
    super(props);

    this.setTones(mode);
  }

  /** Get the background color */
  get background(): Color {
    return this.tones[this._backgroundTone];
  }

  /** Get the surface color */
  get surface(): Color {
    return this.tones[this._surfaceTone];
  }

  /** Set the tones of the palette to the recommend values */
  public setTones(mode: ThemeMode) {
    const isLight = mode === 'light';

    this._backgroundTone = isLight ? 99 : 10;
    this.background.on = this.tones[isLight ? 10 : 90];

    this._surfaceTone = isLight ? 99 : 10;
    this.surface.on = this.tones[isLight ? 10 : 90];
  }
}
