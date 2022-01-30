import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {Icon} from '@themestress/components';

describe('Component Icon', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Icon size="sm" fill="white"></Icon>
        <Icon size="md"></Icon>
        <Icon size="lg"></Icon>
      </ThemeProvider>,
    );

    const component = wrapper.find(Icon);
    expect(component).toHaveLength(3);
  });
});
