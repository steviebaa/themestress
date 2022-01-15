import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Tooltip } from '@components/Tooltip';

let setState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(() => [true, setState]),
}));

describe('Component Tooltip', () => {
  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Tooltip tip={'Test Tip'} direction="bottom">
          <div>Test Content</div>
        </Tooltip>
      </ThemeProvider>,
    );

    const component = wrapper.find(Tooltip);
    expect(component).toHaveLength(1);
  });

  it('Should render each direction', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Tooltip tip={'Test Tip'} direction="top">
          <div>Test Content</div>
        </Tooltip>
        <Tooltip tip={'Test Tip'} direction="bottom">
          <div>Test Content</div>
        </Tooltip>
        <Tooltip tip={'Test Tip'} direction="left">
          <div>Test Content</div>
        </Tooltip>
        <Tooltip tip={'Test Tip'} direction="right">
          <div>Test Content</div>
        </Tooltip>
      </ThemeProvider>,
    );

    const component = wrapper.find(Tooltip);
    expect(component).toHaveLength(4);
  });
});
