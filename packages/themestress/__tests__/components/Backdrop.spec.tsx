import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { Backdrop } from '@components/Backdrop';
import { createTheme } from '@core/themeUtils';

describe('Component Avatar', () => {
  it('Should render a backdrop component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Backdrop zIndex={1000} onClick={() => {}} backgroundColor="black" />
        <Backdrop onClick={() => {}} />
      </ThemeProvider>,
    );

    expect(wrapper.find(Backdrop)).toHaveLength(2);
  });

  it('Should click the backdrop component', () => {
    const testFn = jest.fn();

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Backdrop zIndex={1000} onClick={testFn} />
      </ThemeProvider>,
    );

    const component = wrapper.find(Backdrop).at(0).find('div');

    // console.log(backdrop.debug());
    component.prop('onPointerDown')(null);

    expect(testFn).toHaveBeenCalled();
  });
});
