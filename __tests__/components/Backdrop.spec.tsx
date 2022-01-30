import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {Backdrop} from '@themestress/components/Backdrop';
import {createTheme} from '@themestress/core/themeUtils';

describe('Component Avatar', () => {
  it('should render a backdrop component', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Backdrop zIndex={1000} onClick={() => null} bgColor="black" />
        <Backdrop onClick={() => null} />
      </ThemeProvider>,
    );

    expect(wrapper.find(Backdrop)).toHaveLength(2);
  });

  it('should click the backdrop component', () => {
    const testFn = jest.fn();

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Backdrop zIndex={1000} onClick={testFn} />
      </ThemeProvider>,
    );

    const component = wrapper.find(Backdrop).at(0).find('div');

    component.prop('onPointerDown')(null);

    expect(testFn).toHaveBeenCalled();
  });
});
