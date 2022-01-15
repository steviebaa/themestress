import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Paper } from '@components/Paper';

describe('Component Paper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper radius={1}>Test Paper</Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(1);
  });

  it('Should error from an out of bounds elevation', () => {
    const mockConsoleError = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(mockConsoleError);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper elevation={25}>Test Paper</Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(1);
    expect(mockConsoleError).toHaveBeenCalledTimes(1);
  });

  it('Should render a square corner Paper', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper square size={300} margin={1} padding={1}>
          Test Paper
        </Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(1);
  });

  it('Should render Paper with outlined and elevation variant', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper variant="outlined">Test Paper</Paper>
        <Paper variant="elevation">Test Paper</Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(2);
  });
});
