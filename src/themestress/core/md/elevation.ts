import {ColorUtility} from '../classes/base/ColorUtility';
import {ElevationTokens, ThemeMode} from '../definitions';

export const systemElevationStyles = (
  mode: ThemeMode = 'light',
  overlayHexColor = '#6750A4',
  shadowHexColor = '#000000',
): ElevationTokens => {
  const shadowRgb = ColorUtility.hex.to.rgb(shadowHexColor);
  const getShadow = (a: number) => ColorUtility.rgb.set.opacity(shadowRgb, a);

  // Shadow colors
  const sc1 = getShadow(0.3);
  const sc2 = getShadow(0.15);

  // Overlay color
  const primaryRgb = ColorUtility.hex.to.rgb(overlayHexColor);
  const getOverlay = (a: number) => ColorUtility.rgb.set.opacity(primaryRgb, a);

  const isLight = mode === 'light';

  return {
    0: {
      elevation: `none`,
      overlay: `linear-gradient(0deg, ${getOverlay(0.05)}, ${getOverlay(
        0.05,
      )})`,
    },
    1: isLight
      ? {
          elevation: `0px 1px 2px ${sc1}, 0px 1px 3px 1px ${sc2}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.05)}, ${getOverlay(
            0.05,
          )})`,
        }
      : {
          elevation: `0px 1px 3px 1px ${sc2}, 0px 1px 2px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.05)}, ${getOverlay(
            0.05,
          )})`,
        },

    2: isLight
      ? {
          elevation: `0px 1px 2px ${sc1}, 0px 2px 6px 2px ${sc2}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.08)}, ${getOverlay(
            0.08,
          )})`,
        }
      : {
          elevation: `0px 2px 6px 2px ${sc2}, 0px 1px 2px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.08)}, ${getOverlay(
            0.08,
          )})`,
        },

    3: isLight
      ? {
          elevation: `0px 4px 8px 3px ${sc2}, 0px 1px 3px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.11)}, ${getOverlay(
            0.11,
          )})`,
        }
      : {
          elevation: `0px 4px 8px 3px ${sc2}, 0px 1px 3px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.11)}, ${getOverlay(
            0.11,
          )})`,
        },

    4: isLight
      ? {
          elevation: `0px 6px 10px 4px ${sc2}, 0px 2px 3px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.12)}, ${getOverlay(
            0.12,
          )})`,
        }
      : {
          elevation: `0px 6px 10px 4px ${sc2}, 0px 2px 3px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.12)}, ${getOverlay(
            0.12,
          )})`,
        },

    5: isLight
      ? {
          elevation: `0px 8px 12px 6px ${sc2}, 0px 4px 4px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.14)}, ${getOverlay(
            0.14,
          )})`,
        }
      : {
          elevation: `0px 8px 12px 6px ${sc2}, 0px 4px 4px ${sc1}`,
          overlay: `linear-gradient(0deg, ${getOverlay(0.14)}, ${getOverlay(
            0.14,
          )})`,
        },
  };
};
