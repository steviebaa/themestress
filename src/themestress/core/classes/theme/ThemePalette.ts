import {addStyleHelper, ThemeMode} from '../../definitions';
import {AccentPalette} from '../palette/AccentPalette';
import {NeutralPalette} from '../palette/NeutralPalette';
import {NeutralVariantPalette} from '../palette/NeutralVariantPalette';
import {Color} from '../base/Color';
import {TonalPalette} from '../base/TonalPalette';
import {colorRefTokenStubs, systemColorTokens} from '../../md/color';

export interface ThemePaletteProps {
  mode: ThemeMode;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  primary: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  secondary: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  tertiary: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  neutral: string | Color | NeutralPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  neutralVariant: string | Color | NeutralVariantPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  success: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  warning: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  info: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  error: string | Color | AccentPalette;
}

const classMap = {
  primary: {cls: AccentPalette, fallback: '#6750A4'},
  secondary: {cls: AccentPalette, fallback: '#625B71'},
  tertiary: {cls: AccentPalette, fallback: '#7D5260'},
  neutral: {cls: NeutralPalette, fallback: '#605D62'},
  neutralVariant: {cls: NeutralVariantPalette, fallback: '#79747E'},
  success: {cls: AccentPalette, fallback: '#529d2f'},
  warning: {cls: AccentPalette, fallback: '#ca9b02'},
  info: {cls: AccentPalette, fallback: '#28a0a4'},
  error: {cls: AccentPalette, fallback: '#B3261E'},
};

export interface ThemePaletteInitializer extends Partial<ThemePaletteProps> {}

export class ThemePalette implements ThemePaletteInitializer {
  private _mode: ThemeMode;
  public primary: AccentPalette;
  public secondary: AccentPalette;
  public tertiary: AccentPalette;
  public neutral: NeutralPalette;
  public neutralVariant: NeutralVariantPalette;
  public success: AccentPalette;
  public warning: AccentPalette;
  public info: AccentPalette;
  public error: AccentPalette;

  constructor(palette: ThemePaletteInitializer = {}) {
    this.mode = palette.mode ?? 'light';
    this._assignInput(palette);
  }

  get mode() {
    return this._mode;
  }

  set mode(mode: ThemeMode) {
    this._mode = mode;
    Object.keys(classMap).forEach(key => {
      this[key]?.setTones(mode);
    });
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._setGlobalRefTokenCssVars(addStyle);
    this._setGlobalSystemTokenCssVars(addStyle);
  };

  private _setGlobalRefTokenCssVars = (addStyle: addStyleHelper) => {
    Object.entries(colorRefTokenStubs()).forEach(([paletteName, stub]) => {
      Object.entries((this[paletteName] as TonalPalette).tones).forEach(
        ([tone, color]) => {
          const key = `${stub}-${tone}`;
          addStyle(key, color.hex);
        },
      );
    });
  };

  private _setGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    Object.entries(systemColorTokens()).forEach(([sysToken, refTokens]) => {
      addStyle(sysToken, refTokens[this._mode], true);
    });
  };

  private _assignInput = (palette: ThemePaletteInitializer) => {
    Object.keys(classMap).forEach(key => {
      let prop = palette[key];

      const {cls, fallback: color} = classMap[key];

      if (typeof prop === 'string') {
        prop = new cls(new Color(prop), this.mode);
      } else if (prop instanceof Color) {
        prop = new cls(prop, this.mode);
      } else if (!prop) {
        prop = new cls(new Color(color), this.mode);
      }

      this[key] = prop;
    });
  };
}
