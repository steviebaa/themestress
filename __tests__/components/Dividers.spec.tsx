import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {Hr, WideHr} from '@themestress/components';

describe('Component Dividers', () => {
  it('should render an Hr component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Hr />
      </ThemeProvider>,
    );

    const component = wrapper.find(Hr);
    expect(component).toHaveLength(1);
  });

  it('should render a WideHr component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <WideHr />
      </ThemeProvider>,
    );

    const component = wrapper.find(WideHr);
    expect(component).toHaveLength(1);
  });
});
