import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core/themeUtils';
import {Button} from '@themestress/components/Button';

describe('Component Button', () => {
  it('Should render a Button component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Button
          fontColor={['neutral', 1, 'main']}
          borderColor={['neutral', 3, 'main']}
          bgColor={'red'}
          align="left"
          noTransform
          marginLeft={1}
          iconOnly
        >
          Test Button
        </Button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Button);
    expect(component).toHaveLength(1);
  });

  it('Should render a Button with contained variant', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Button fontColor={['neutral', 1, 'main']} variant="contained">
          Test Button
        </Button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Button);
    expect(component).toHaveLength(1);
  });

  it('Should render a Button with outlined variant', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Button variant="outlined">Test Button</Button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Button);
    expect(component).toHaveLength(1);
  });

  it('Should render a Button with text variant', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Button variant="text">Test Button</Button>
        <Button variant="text" bgColor={'primary'}>
          Test Button
        </Button>
      </ThemeProvider>,
    );

    const component = wrapper.find(Button);
    expect(component).toHaveLength(2);
  });
});
