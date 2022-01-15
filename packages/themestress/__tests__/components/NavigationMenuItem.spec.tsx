import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { NavigationMenuItem } from '@components/NavigationMenuItem';

describe('Component NavigationMenuItem', () => {
  it('Should render a NavigationMenuItem component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <NavigationMenuItem>Test NavigationMenuItem</NavigationMenuItem>
      </ThemeProvider>,
    );

    const component = wrapper.find(NavigationMenuItem);

    expect(component).toHaveLength(1);
  });

  it('Should click NavigationMenuItem component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <NavigationMenuItem handleClick={() => null}>
          Test NavigationMenuItem
        </NavigationMenuItem>
      </ThemeProvider>,
    );

    const component = wrapper.find(NavigationMenuItem);
    component.childAt(0).prop('onClick')();

    expect(component).toHaveLength(1);
  });
});
