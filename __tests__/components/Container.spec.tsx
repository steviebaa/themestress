import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core/themeUtils';
import {Container} from '@themestress/components/Container';

describe('Component Container', () => {
  it('Should render a Container component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Container maxWidth="lg">Test Container</Container>
        <Container fixed>Test Container</Container>
      </ThemeProvider>,
    );

    const component = wrapper.find(Container);
    expect(component).toHaveLength(2);
  });
});
