import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {Avatar} from '@themestress/components/Avatar';
import {createTheme} from '@themestress/core/themeUtils';

describe('Component Avatar', () => {
  it('Should render an Avatar component with initials', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Avatar borderColor={['neutral', 3, 'main']} alt="Test Initials" />
      </ThemeProvider>,
    );

    const component = wrapper.find(Avatar);

    expect(component.find('p._Avatar-AltText').text()).toContain('TI');
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it('Should render an Avatar component with person SVG', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Avatar borderColor={['neutral', 3, 'main']} />
      </ThemeProvider>,
    );

    expect(wrapper.find('path')).toBeTruthy();
  });

  it('Should render an Avatar component with src', () => {
    const url = 'https://example.com/';

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Avatar borderColor={['neutral', 3, 'main']} src={url} />
        <Avatar src={url} noPulse statusColor={'red'} alt="S R" />
      </ThemeProvider>,
    );

    const component = wrapper.find('img').at(0);

    expect(component.prop('src')).toEqual(url);
    expect(component).toHaveLength(1);
  });
});
