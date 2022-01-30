import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {Paper} from '@themestress/components';

describe('Component Paper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper radius={1}>Test Paper</Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(1);
  });

  it('should error from an out of bounds elevation', () => {
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

  it('should render a square corner Paper', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper square width={'300px'} margin={1} padding={1}>
          Test Paper
        </Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(1);
  });

  it('should render Paper with outlined and elevation variant', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Paper variant="outlined">Test Paper</Paper>
        <Paper variant="elevated">Test Paper</Paper>
      </ThemeProvider>,
    );

    const component = wrapper.find(Paper);
    expect(component).toHaveLength(2);
  });
});
