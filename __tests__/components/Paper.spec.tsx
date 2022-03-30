import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {Surface} from '@themestress/components';

describe('Component Paper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Surface radius={1}>Test Paper</Surface>
      </ThemeProvider>,
    );

    const component = wrapper.find(Surface);
    expect(component).toHaveLength(1);
  });

  it('should error from an out of bounds elevation', () => {
    const mockConsoleError = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(mockConsoleError);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Surface elevation={25}>Test Paper</Surface>
      </ThemeProvider>,
    );

    const component = wrapper.find(Surface);
    expect(component).toHaveLength(1);
    expect(mockConsoleError).toHaveBeenCalledTimes(1);
  });

  it('should render a square corner Paper', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Surface square width={'300px'} margin={1} padding={1}>
          Test Paper
        </Surface>
      </ThemeProvider>,
    );

    const component = wrapper.find(Surface);
    expect(component).toHaveLength(1);
  });

  it('should render Paper with outlined and elevation variant', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Surface variant="outlined">Test Paper</Surface>
        <Surface variant="elevated">Test Paper</Surface>
      </ThemeProvider>,
    );

    const component = wrapper.find(Surface);
    expect(component).toHaveLength(2);
  });
});
