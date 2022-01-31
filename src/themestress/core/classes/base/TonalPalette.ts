import {Color} from './Color';

enum ToneEnum {
  '_0' = 0,
  '_10' = 10,
  '_20' = 20,
  '_30' = 30,
  '_40' = 40,
  '_50' = 50,
  '_60' = 60,
  '_70' = 70,
  '_80' = 80,
  '_90' = 90,
  '_95' = 95,
  '_99' = 99,
  '_100' = 100,
}

type ITones = {[tone in ToneEnum]: Color};

export class TonalPalette {
  private _keyColor: Color;
  private _tones: ITones = {} as ITones;

  constructor(color: Color) {
    this._set(color);
  }

  // Getters
  get keyColor() {
    return this._keyColor;
  }
  get tones() {
    return this._tones;
  }

  // Setters
  set keyColor(color) {
    this._set(color);
  }

  // Private methods
  private _set(color: Color) {
    this._keyColor = color;
    this._generateTones();
  }
  private _generateTones() {
    for (const tone in ToneEnum) {
      if (tone.includes('_')) continue;
      const clone = this.keyColor.clone();
      clone.lightness = Number(tone);
      this._tones[tone] = clone;
    }
  }
}
