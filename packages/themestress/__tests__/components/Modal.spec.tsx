import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Modal } from '@components/Modal';

describe('Component Menu', () => {
  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Modal open>
          <div>Test Content</div>
        </Modal>
      </ThemeProvider>,
    );

    expect(wrapper.text()).toContain('Test Content');
  });

  it('Should render null', () => {
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