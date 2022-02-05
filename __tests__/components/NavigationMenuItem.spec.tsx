import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {NavigationItem} from '@themestress/components';

describe('Component NavMenuItem', () => {
  it('should render a NavMenuItem component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <NavigationItem>Test NavMenuItem</NavigationItem>
      </ThemeProvider>,
    );

    const component = wrapper.find(NavigationItem);

    expect(component).toHaveLength(1);
  });

  it('should click NavMenuItem component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <NavigationItem handleClick={() => null}>Test NavMenuItem</NavigationItem>
      </ThemeProvider>,
    );

    const component = wrapper.find(NavigationItem);
    component.childAt(0).prop('onClick')();

    expect(component).toHaveLength(1);
  });
});
