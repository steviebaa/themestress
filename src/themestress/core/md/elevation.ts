import {ColorUtility} from '../classes/base/ColorUtility';
import {ElevationTokens} from '../definitions';

export const systemElevationTokens = (
  primaryHex: string,
  shadowHex: string,
  sysPrefix = 'md-sys',
): ElevationTokens => {
  const shadowRgb = ColorUtility.hex.to.rgb(shadowHex);
  const getShadow = (a: number) => ColorUtility.rgb.set.opacity(shadowRgb, a);

  // Shadow colors
  const sc1 = getShadow(0.3);
  const sc2 = getShadow(0.15);

  // Shade color
  const primaryRgb = ColorUtility.hex.to.rgb(primaryHex);
  const getShade = (a: number) => ColorUtility.rgb.set.opacity(primaryRgb, a);

  return {
    // [`${sysPrefix}-elevation-level-0`]: {
    //   light: {shadow: 'none', shade: 'none'},
    //   dark: {shadow: 'none', shade: 'none'},
    // },
    [`${sysPrefix}-elevation-level-1`]: {
      light: {
        shadow: `box-shadow: 0px 1px 2px ${sc1}, 0px 1px 3px 1px ${sc2}`,
        shade: `linear-gradient(0deg, ${getShade(0.05)}, ${getShade(0.05)})`,
      },
      dark: {
        shadow: `box-shadow: 0px 1px 3px 1px ${sc2}, 0px 1px 2px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.05)}, ${getShade(0.05)})`,
      },
    },
    [`${sysPrefix}-elevation-level-2`]: {
      light: {
        shadow: `box-shadow: 0px 1px 2px ${sc1}, 0px 2px 6px 2px ${sc2}`,
        shade: `linear-gradient(0deg, ${getShade(0.08)}, ${getShade(0.08)})`,
      },
      dark: {
        shadow: `box-shadow: 0px 2px 6px 2px ${sc2}, 0px 1px 2px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.08)}, ${getShade(0.08)})`,
      },
    },
    [`${sysPrefix}-elevation-level-3`]: {
      light: {
        shadow: `box-shadow: 0px 4px 8px 3px ${sc2}, 0px 1px 3px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.11)}, ${getShade(0.11)})`,
      },
      dark: {
        shadow: `box-shadow: 0px 4px 8px 3px ${sc2}, 0px 1px 3px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.11)}, ${getShade(0.11)})`,
      },
    },
    [`${sysPrefix}-elevation-level-4`]: {
      light: {
        shadow: `box-shadow: 0px 6px 10px 4px ${sc2}, 0px 2px 3px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.12)}, ${getShade(0.12)})`,
      },
      dark: {
        shadow: `0px 6px 10px 4px ${sc2}, 0px 2px 3px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.12)}, ${getShade(0.12)})`,
      },
    },
    [`${sysPrefix}-elevation-level-5`]: {
      light: {
        shadow: `box-shadow: 0px 8px 12px 6px ${sc2}, 0px 4px 4px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.14)}, ${getShade(0.14)})`,
      },
      dark: {
        shadow: `box-shadow: 0px 8px 12px 6px ${sc2}, 0px 4px 4px ${sc1}`,
        shade: `linear-gradient(0deg, ${getShade(0.14)}, ${getShade(0.14)})`,
      },
    },
  };
};
