import {ThemeMode} from '../../definitions';
import {AccentPalette} from '../palette/AccentPalette';
import {Color} from '../base/Color';
import {NeutralPalette} from '../palette/NeutralPalette';
import {NeutralVariantPalette} from '../palette/NeutralVariantPalette';

export interface ThemePaletteInitializer {
  mode?: ThemeMode;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  primary?: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  secondary?: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  tertiary?: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  neutral?: string | Color | NeutralPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  neutralVariant?: string | Color | NeutralVariantPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  success?: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  warning?: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  info?: string | Color | AccentPalette;
  /** Can be and instance of Color, AccentPalette or a color string (hex, hsl, rgb, css) */
  error?: string | Color | AccentPalette;
}

const classMap = {
  primary: {cls: AccentPalette, fallback: '#670dea'},
  secondary: {cls: AccentPalette, fallback: '#202f97'},
  tertiary: {cls: AccentPalette, fallback: '#bf04dc'},
  neutral: {cls: NeutralPalette, fallback: '#aaaaaa'},
  neutralVariant: {cls: NeutralVariantPalette, fallback: '#aaaaaa'},
  success: {cls: AccentPalette, fallback: '#56bd66'},
  warning: {cls: AccentPalette, fallback: '#f1c946'},
  info: {cls: AccentPalette, fallback: '#6fb4ff'},
  error: {cls: AccentPalette, fallback: '#e52a36'},
};

export class ThemePalette {
  public mode: ThemeMode;
  public primary: AccentPalette;
  public secondary: AccentPalette;
  public tertiary: AccentPalette;
  public neutral: NeutralPalette;
  public neutralVariant: NeutralVariantPalette;
  public success: AccentPalette;
  public warning: AccentPalette;
  public info: AccentPalette;
  public error: AccentPalette;

  constructor(palette?: ThemePaletteInitializer) {
    this.mode = palette?.mode ?? 'light';

    Object.keys(classMap).forEach(key => {
      this._assignInput(key, palette?.[key]);
    });
  }

  private _assignInput = (
    key: string,
    prop:
      | string
      | Color
      | AccentPalette
      | NeutralPalette
      | NeutralVariantPalette,
  ) => {
    const {cls, fallback: color} = classMap[key];

    if (typeof prop === 'string') {
      prop = new cls(new Color(prop), this.mode);
    } else if (prop instanceof Color) {
      prop = new cls(prop, this.mode);
    } else if (!prop) {
      prop = new cls(new Color(color), this.mode);
    }

    this[key] = prop;
  };
}
