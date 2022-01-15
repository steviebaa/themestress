import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Grid } from '@components/Grid';

describe('Component Grid', () => {
  it('Should render a Grid container component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Grid container paper={2} size={50}>
          <div>Test Content</div>
        </Grid>
        <Grid container paper={0} size={50}>
          <div>Test Content</div>
        </Grid>
      </ThemeProvider>,
    );

    const component = wrapper.find('div._GridContainer');
    expect(component).toHaveLength(2);
  });

  it('Should render a Grid item component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Grid item paper={2} size={30}>
          <div>Test Content</div>
        </Grid>
        <Grid item paper={0}>
          <div>Test Content</div>
        </Grid>
      </ThemeProvider>,
    );

    const component = wrapper.find('div._GridItem');
    expect(component).toHaveLength(2);
  });

  it('Should warn about missing container and item prop', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Grid>
          <div>Test Content</div>
        </Grid>
      </ThemeProvider>,
    );

    expect(wrapper.text()).toContain('Grid missing prop');
  });
});
