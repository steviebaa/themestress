import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Switch } from '@components/Switch';

describe('Component Menu', () => {
  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Switch checked />
      </ThemeProvider>,
    );

    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('Should change state', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Switch checked={true} onChange={() => {}} noIcon />
        <Switch checked={false} onChange={() => {}} noIcon />
      </ThemeProvider>,
    );

    const component = wrapper.find('span._Switch-Track').at(0);

    component.prop('onClick')(null);

    expect(wrapper.find(Switch)).toHaveLength(2);
  });

  it('Should render with cross', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Switch checked={false} onChange={() => {}} />
      </ThemeProvider>,
    );

    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('Should render different colors', () => {
    const wrapper = mount(
      <>
        <ThemeProvider theme={createTheme}>
          <Switch
            checked={true}
            trackColor={{ on: 'green', off: 'red' }}
            handleColor={{ on: 'green', off: 'red' }}
          />
        </ThemeProvider>
        <ThemeProvider theme={createTheme({ palette: { mode: 'light' } })}>
          <Switch
            checked={false}
            trackColor={{ on: 'green', off: 'red' }}
            handleColor={{ on: 'green', off: 'red' }}
          />
          <Switch checked={true} handleColor={{ on: 'green', off: 'red' }} />
          <Switch checked={false} handleColor={{ on: 'green', off: 'red' }} />
        </ThemeProvider>
      </>,
    );

    expect(wrapper.find(Switch)).toHaveLength(4);
  });
});
