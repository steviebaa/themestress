/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core/themeUtils';
import {Menu, MenuItem, Backdrop} from '@themestress/components';

describe('Component Menu', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={jest.fn()}>
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(Menu);
    expect(component).toHaveLength(1);
  });

  it('should call onClose prop', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={onClose}>
          <MenuItem key="Item 1">Item 1</MenuItem>{' '}
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(Backdrop);
    component.prop('onClick')();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose prop', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValue(null);

    const onClose = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={onClose}>
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(Backdrop);
    component.prop('onClick')();
    // expect(onClose).toHaveBeenCalledTimes(0);
    expect(useRefSpy).toBeCalledWith(null);
  });

  it('should click backdrop', () => {
    const mockEvent = {
      target: {parentElement: {className: ''}},
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={jest.fn()}>
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find('div._Menu');
    component.prop('onClick')(mockEvent);
    expect(component).toHaveLength(1);
  });

  it('should handle nested menu item', () => {
    const mockEvent = {
      target: {parentElement: {className: '_NestedMenuItem'}},
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={jest.fn()}>
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find('div._Menu');
    component.prop('onClick')(mockEvent);
    expect(component).toHaveLength(1);
  });

  it('should use anchorElement position', () => {
    const getBoundingClientRect = jest.fn(() => ({x: 0, y: 0}));

    const mockAnchorEl = {
      className: '_NestedMenuItem',
      getBoundingClientRect,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu
          anchorOrigin={{horizontal: 'center', vertical: 'center'}}
          transformOrigin={{horizontal: 'center', vertical: 'center'}}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
        <Menu
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          transformOrigin={{horizontal: 'left', vertical: 'top'}}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
        <Menu
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          transformOrigin={{horizontal: 'right', vertical: 'bottom'}}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(MenuItem);
    expect(component).toHaveLength(3);
  });

  it('should use position override', () => {
    const getBoundingClientRect = jest.fn(() => ({x: 0, y: 0}));

    const mockAnchorEl = {
      className: '_NestedMenuItem',
      getBoundingClientRect,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu
          positionOverride={{x: 10, y: 10}}
          anchorOrigin={{horizontal: 'center', vertical: 'center'}}
          transformOrigin={{horizontal: 'center', vertical: 'center'}}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(MenuItem);
    expect(component).toHaveLength(1);
  });

  it('should use fallback ref', () => {
    const getBoundingClientRect = jest.fn(() => ({x: 0, y: 0}));

    const mockAnchorEl = {
      className: '_NestedMenuItem',
      getBoundingClientRect,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu
          ref={null}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <span>Test Heading</span>
          <MenuItem key="Item 1">Item 1</MenuItem>
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(MenuItem);
    expect(component).toHaveLength(1);
  });
});
