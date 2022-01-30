import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {Modal} from '@themestress/components';

describe('Component Menu', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Modal open>
          <div>Test Content</div>
        </Modal>
      </ThemeProvider>,
    );

    expect(wrapper.text()).toContain('Test Content');
  });

  it('should render null', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Modal open={false}>
          <div>Test Content</div>
        </Modal>
      </ThemeProvider>,
    );

    expect(wrapper.text()).not.toContain('Test Content');
  });
});
