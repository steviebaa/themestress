/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Ripple } from '@components/Ripple';

const state = [
  { x: 1, y: 1, size: 1 },
  { x: 2, y: 2, size: 2 },
];
const setState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(() => [state, setState]),
}));

describe('Component Ripple', () => {
  jest.useFakeTimers();

  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <button>
          <Ripple>Test Ripple</Ripple>
        </button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Ripple);
    expect(component).toHaveLength(1);
  });

  it('Should add a ripple', () => {
    const mockGetBounds = jest.fn(() => ({ x: 1, y: 1, width: 2, height: 2 }));

    const mockEvent = {
      currentTarget: { getBoundingClientRect: mockGetBounds },
      pageX: 5,
      pageY: 5,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <button>
          <Ripple>Test Ripple</Ripple>
        </button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Ripple).childAt(0);
    component.prop('onMouseDown')(mockEvent);
    jest.advanceTimersByTime(100);

    expect(component).toHaveLength(1);
    expect(mockGetBounds).toHaveBeenCalledTimes(1);
  });

  it('Should trigger debounce function', () => {
    const mockGetBounds = jest.fn(() => ({ x: 1, y: 1, width: 3, height: 2 }));

    const mockEvent = {
      currentTarget: { getBoundingClientRect: mockGetBounds },
      pageX: 5,
      pageY: 5,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <button>
          <Ripple duration={100} color="#000">
            Test Ripple
          </Ripple>
        </button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Ripple).childAt(0);
    component.prop('onMouseDown')(mockEvent);
    jest.advanceTimersByTime(100);

    expect(component).toHaveLength(1);
    expect(mockGetBounds).toHaveBeenCalledTimes(1);
  });

  it('Should trigger useLayoutEffect cleanup function', () => {
    const mockGetBounds = jest.fn(() => ({ x: 1, y: 1, width: 3, height: 2 }));

    const mockEvent = {
      currentTarget: { getBoundingClientRect: mockGetBounds },
      pageX: 5,
      pageY: 5,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <button>
          <Ripple duration={100} color="#000">
            Test Ripple
          </Ripple>
        </button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Ripple).childAt(0);
    component.prop('onMouseDown')(mockEvent);
    jest.advanceTimersByTime(100);

    wrapper.unmount();

    expect(component).toHaveLength(1);
    expect(mockGetBounds).toHaveBeenCalledTimes(1);
  });
});
