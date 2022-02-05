import {systemElevationStyles} from '../../md/elevation';
import {ElevationStyles, addStyleHelper, ThemeMode} from '../../definitions';

export interface ThemeElevationProps {
  level1: ElevationStyles;
  level2: ElevationStyles;
  level3: ElevationStyles;
  level4: ElevationStyles;
  level5: ElevationStyles;
}

export interface ThemeElevationInitializer
  extends Partial<ThemeElevationProps> {}

export class ThemeElevations {
  public level1: ElevationStyles;
  public level2: ElevationStyles;
  public level3: ElevationStyles;
  public level4: ElevationStyles;
  public level5: ElevationStyles;

  constructor(
    options: {
      mode?: ThemeMode;
      overlayHexColor?: string;
      shadowHexColor?: string;
    } = {},
  ) {
    const {mode, overlayHexColor, shadowHexColor} = options;
    this._assignInput({mode, overlayHexColor, shadowHexColor});
  }

  public setGlobalCssVars = (addStyle: addStyleHelper) => {
    this._createGlobalSystemTokenCssVars(addStyle);
  };

  public setStyles = (
    mode?: ThemeMode,
    overlayHexColor?: string,
    shadowHexColor?: string,
  ) => {
    this._assignInput({mode, overlayHexColor, shadowHexColor});
  };

  private _createGlobalSystemTokenCssVars = (addStyle: addStyleHelper) => {
    [1, 2, 3, 4, 5].forEach(level => {
      addStyle(
        `sys-elevation-level-${level}`,
        `${this[`level${level}`].elevation}`,
      );
      addStyle(
        `sys-overlay-level-${level}`,
        `${this[`level${level}`].overlay}`,
      );
    });
  };

  private _assignInput = (options: {
    mode?: ThemeMode;
    overlayHexColor?: string;
    shadowHexColor?: string;
  }) => {
    const {mode, overlayHexColor, shadowHexColor} = options;
    const tokens = systemElevationStyles(mode, overlayHexColor, shadowHexColor);

    this.level1 = tokens[1];
    this.level2 = tokens[2];
    this.level3 = tokens[3];
    this.level4 = tokens[4];
    this.level5 = tokens[5];
  };
}
