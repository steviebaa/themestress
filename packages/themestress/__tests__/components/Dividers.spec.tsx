import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Hr, WideHr } from '@components/Dividers';

describe('Component Dividers', () => {
  it('Should render an Hr component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Hr />
      </ThemeProvider>,
    );

    const component = wrapper.find(Hr);
    expect(component).toHaveLength(1);
  });

  it('Should render a WideHr component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <WideHr />
      </ThemeProvider>,
    );

    const component = wrapper.find(WideHr);
    expect(component).toHaveLength(1);
  });
});
