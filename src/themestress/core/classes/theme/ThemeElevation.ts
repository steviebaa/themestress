import {applyStyleVar} from '../../utils/helpers';
import {systemElevationTokens} from '../../md/elevation';
import {ElevationStyles} from '../../definitions';
import {Theme} from './Theme';

export class ThemeElevation {
  public level1: ElevationStyles;
  public level2: ElevationStyles;
  public level3: ElevationStyles;
  public level4: ElevationStyles;
  public level5: ElevationStyles;

  constructor(private theme: Theme) {
    this._assignInput();
  }

  public setGlobalCssVars() {
    this._createGlobalSystemTokenCssVars();
  }

  private _createGlobalSystemTokenCssVars = () => {
    const tokens = systemElevationTokens(
      this.theme.palette.primary.main.hex,
      this.theme.palette.neutral.shadow.hex,
    );

    for (const token in tokens) {
      const props = tokens[token][this.theme.palette.mode];
      applyStyleVar(token, props.shadow);
      applyStyleVar(token.replace('elevation', 'overlay'), props.shade);
    }
  };

  private _assignInput() {
    const tokens = systemElevationTokens(
      this.theme.palette.primary.main.hex,
      this.theme.palette.neutral.shadow.hex,
    );

    this.level1 = tokens['md-sys-elevation-level-1'][this.theme.palette.mode];
    this.level2 = tokens['md-sys-elevation-level-2'][this.theme.palette.mode];
    this.level3 = tokens['md-sys-elevation-level-3'][this.theme.palette.mode];
    this.level4 = tokens['md-sys-elevation-level-4'][this.theme.palette.mode];
    this.level5 = tokens['md-sys-elevation-level-5'][this.theme.palette.mode];
  }
}
