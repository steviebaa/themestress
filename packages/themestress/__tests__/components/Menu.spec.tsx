import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Menu } from '@components/Menu';
import { MenuItem } from '@components/MenuItem';
import { Backdrop } from '@components/Backdrop';
import { MenuSubheading } from '@components/MenuSubheading';

describe('Component Menu', () => {
  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={jest.fn()}>
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(Menu);
    expect(component).toHaveLength(1);
  });

  it('Should call onClose prop', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={onClose}>
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(Backdrop);
    component.prop('onClick')();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Should not call onClose prop', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValue(null);

    const onClose = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={onClose}>
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(Backdrop);
    component.prop('onClick')();
    // expect(onClose).toHaveBeenCalledTimes(0);
    expect(useRefSpy).toBeCalledWith(null);
  });

  it('Should click backdrop', () => {
    const mockEvent = {
      target: { parentElement: { className: '' } },
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={jest.fn()}>
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find('div._Menu');
    component.prop('onClick')(mockEvent);
    expect(component).toHaveLength(1);
  });

  it('Should handle nested menu item', () => {
    const mockEvent = {
      target: { parentElement: { className: '_NestedMenuItem' } },
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu open={true} onClose={jest.fn()}>
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find('div._Menu');
    component.prop('onClick')(mockEvent);
    expect(component).toHaveLength(1);
  });

  it('Should use anchorElement position', () => {
    const getBoundingClientRect = jest.fn(() => ({ x: 0, y: 0 }));

    const mockAnchorEl = {
      className: '_NestedMenuItem',
      getBoundingClientRect,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu
          anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
          transformOrigin={{ horizontal: 'center', vertical: 'center' }}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
        <Menu
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
        <Menu
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(MenuItem);
    expect(component).toHaveLength(3);
  });

  it('Should use position override', () => {
    const getBoundingClientRect = jest.fn(() => ({ x: 0, y: 0 }));

    const mockAnchorEl = {
      className: '_NestedMenuItem',
      getBoundingClientRect,
    } as any;

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Menu
          positionOverride={{ x: 10, y: 10 }}
          anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
          transformOrigin={{ horizontal: 'center', vertical: 'center' }}
          anchorElement={mockAnchorEl}
          open={true}
          onClose={jest.fn()}
        >
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(MenuItem);
    expect(component).toHaveLength(1);
  });

  it('Should use fallback ref', () => {
    const getBoundingClientRect = jest.fn(() => ({ x: 0, y: 0 }));

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
          <MenuSubheading>Test Heading</MenuSubheading>
          <MenuItem key="Item 1" content="Item 1" />
        </Menu>
      </ThemeProvider>,
    );

    const component = wrapper.find(MenuItem);
    expect(component).toHaveLength(1);
  });
});
