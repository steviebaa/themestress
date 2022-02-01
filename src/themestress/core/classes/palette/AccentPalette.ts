import {ThemeMode} from '../../definitions';
import {Color} from '../base/Color';
import {TonalPalette} from '../base/TonalPalette';

export class AccentPalette extends TonalPalette {
  private _mainTone: number;
  private _containerTone: number;

  constructor(props: Color, mode: ThemeMode = 'light') {
    super(props);
    this.setTones(mode);
  }

  /** Get the main color */
  get main(): Color {
    return this.tones[this._mainTone];
  }

  /** Get the container color */
  get container(): Color {
    return this.tones[this._containerTone];
  }

  /** Set the tones of the palette to the recommend values */
  public setTones(mode: ThemeMode) {
    const isLight = mode === 'light';

    this._mainTone = isLight ? 40 : 80;
    this.main.on = this.tones[isLight ? 100 : 20];

    this._containerTone = isLight ? 90 : 30;
    this.container.on = this.tones[isLight ? 10 : 90];
  }
}
