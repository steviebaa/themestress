import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Container } from '@components/Container';

describe('Component Container', () => {
  it('Should render a Container component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Container maxWidth="lg">Test Container</Container>
        <Container fullWidth margin={2}>
          Test Container
        </Container>
      </ThemeProvider>,
    );

    const component = wrapper.find(Container);
    expect(component).toHaveLength(2);
  });
});
