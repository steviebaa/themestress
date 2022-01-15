import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { IconButton } from '@components/IconButton';

describe('Component IconButton', () => {
  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <IconButton></IconButton>
      </ThemeProvider>,
    );

    const component = wrapper.find(IconButton);
    expect(component).toHaveLength(1);
  });
});
