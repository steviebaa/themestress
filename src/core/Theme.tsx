import React, {useContext, useEffect} from 'react';
import {ThemeProvider as EmotionProvider} from '@emotion/react';
// import {createTheme} from '@themestress/core/themeUtils';
import {Css} from '@core/styles/Css';
import {settingsContext} from '@stores/SettingsContext';
import {Theme} from '@themestress/core/classes/theme/Theme';
import {ThemeTypography} from '@themestress/core/classes/theme/ThemeTypography';

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProps) => {
  const [settings] = useContext(settingsContext);
  // const typography = new ThemeTypography({
  //   typography: {
  //     regular: {font: 'Montserrat'},
  //     medium: {font: 'Montserrat'},
  //   },
  // });
  const theme = new Theme({
    // palette: {primary: {main}}
    palette: {primary: '#6750A4' /*neutral: '#FFFBFE'*/},
    typography: {regular: {font: 'Montserrat'}, medium: {font: 'Montserrat'}},
  });

  useEffect(() => {
    theme.setMode(settings.mode);
  }, [settings.mode]);

  // theme.setGlobalCssVars();

  // const theme = createTheme({
  // palette: {
  //   mode: settings.mode,
  //   primary: {main: '#680ce9', dark: '#5900BE', light: '#9553F8'},
  //   secondary: {main: '#1E0033', dark: '#340060', light: '#440087'},
  //   accent: {main: '#BF04DC'},
  //   error: {main: '#e52a36'},
  // },
  // typography: {size: 14},
  // spacing: 4,
  // });

  return (
    <EmotionProvider theme={theme}>
      <Css fontSize={14} />
      {children}
    </EmotionProvider>
  );
};
