import {settingsContext} from '@stores/SettingsContext';
import {useContext} from 'react';
import {
  applyColorModeTokens,
  applySystemColorTokens,
  systemColorTokens,
} from './md/color';
import {
  applySystemElevationTokens,
  defaultElevationTokens,
} from './md/elevation';
import {
  applyTypographyRefTokens,
  applyTypographySystemTokens,
  typographyRefTokens,
  typographySystemTokens,
} from './md/typography';

export const ThemeVariables: React.FC = () => {
  const [settings] = useContext(settingsContext);

  applyColorModeTokens(systemColorTokens);
  applySystemColorTokens(settings.mode, systemColorTokens);
  applySystemElevationTokens(defaultElevationTokens);
  applyTypographyRefTokens(typographyRefTokens);
  applyTypographySystemTokens(typographySystemTokens);

  return null;
};
