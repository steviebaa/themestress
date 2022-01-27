import {createTheme} from '@themestress/core';

describe('themeUtils', () => {
  it('Should set the secondary on color to white', () => {
    const theme = createTheme({
      palette: {
        secondary: {main: '#1E0033'},
      },
    });

    expect(theme.palette.secondary.on).toEqual('#ffffff');
  });
});
