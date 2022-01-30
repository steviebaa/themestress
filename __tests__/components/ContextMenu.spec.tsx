import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {MenuItem, ContextMenu} from '@themestress/components';

const state = false;
const setState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn(() => [state, setState]),
}));

describe('Component ContextMenu', () => {
  it('should render a ContextMenu component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <ContextMenu
          items={[
            <MenuItem key="Item 1" content="Item 1" />,
            <MenuItem key="Item 2" content="Item 2" />,
          ]}
        >
          <>Test ContextMenu</>
        </ContextMenu>
      </ThemeProvider>,
    );

    const component = wrapper.find(ContextMenu);
    expect(component).toHaveLength(1);
  });

  it('should close contextmenu', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <ContextMenu
          items={[
            <MenuItem key="Item 1" content="Item 1" />,
            <MenuItem key="Item 2" content="Item 2" />,
          ]}
        >
          <>Test ContextMenu</>
        </ContextMenu>
      </ThemeProvider>,
    );

    const component = wrapper.find(ContextMenu).childAt(0).childAt(1);
    component.prop('onClose')();
  });

  it('should open contextmenu', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <ContextMenu
          items={[
            <MenuItem key="Item 1" content="Item 1" />,
            <MenuItem key="Item 2" content="Item 2" />,
          ]}
        >
          <>Test ContextMenu</>
        </ContextMenu>
      </ThemeProvider>,
    );

    const component = wrapper.find(ContextMenu).childAt(0);
    const mockFn = jest.fn();
    const fakeEvent = {preventDefault: mockFn};

    component.prop('onContextMenu')(fakeEvent);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
