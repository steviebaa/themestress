import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@themestress/core';
import {Switch} from '@themestress/components';

describe('Component Menu', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Switch checked />
      </ThemeProvider>,
    );

    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('should change state', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Switch checked={true} onChange={() => null} noIcon />
        <Switch checked={false} onChange={() => null} noIcon />
      </ThemeProvider>,
    );

    const component = wrapper.find('span._Switch-Track').at(0);

    component.prop('onClick')(null);

    expect(wrapper.find(Switch)).toHaveLength(2);
  });

  it('should render with cross', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Switch checked={false} onChange={() => null} />
      </ThemeProvider>,
    );

    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('should render different colors', () => {
    const wrapper = mount(
      <>
        <ThemeProvider theme={createTheme}>
          <Switch
            checked={true}
            trackColor={{on: 'green', off: 'red'}}
            handleColor={{on: 'green', off: 'red'}}
          />
        </ThemeProvider>
        <ThemeProvider theme={createTheme({palette: {mode: 'light'}})}>
          <Switch
            checked={false}
            trackColor={{on: 'green', off: 'red'}}
            handleColor={{on: 'green', off: 'red'}}
          />
          <Switch checked={true} handleColor={{on: 'green', off: 'red'}} />
          <Switch checked={false} handleColor={{on: 'green', off: 'red'}} />
        </ThemeProvider>
      </>,
    );

    expect(wrapper.find(Switch)).toHaveLength(4);
  });
});
