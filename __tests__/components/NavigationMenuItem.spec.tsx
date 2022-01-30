import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {SideNavItem} from '@themestress/components';

describe('Component NavMenuItem', () => {
  it('should render a NavMenuItem component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <SideNavItem>Test NavMenuItem</SideNavItem>
      </ThemeProvider>,
    );

    const component = wrapper.find(SideNavItem);

    expect(component).toHaveLength(1);
  });

  it('should click NavMenuItem component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <SideNavItem handleClick={() => null}>Test NavMenuItem</SideNavItem>
      </ThemeProvider>,
    );

    const component = wrapper.find(SideNavItem);
    component.childAt(0).prop('onClick')();

    expect(component).toHaveLength(1);
  });
});
