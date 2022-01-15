import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Icon } from '@components/Icon';

describe('Component Icon', () => {
  it('Should render', () => {
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
