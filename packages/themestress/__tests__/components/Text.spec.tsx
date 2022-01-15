import React from 'react';
import { mount } from 'enzyme';
import { Text } from '@components/Text';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';

describe('Component Text', () => {
  it('Should render a Text component', () => {
    const wrapper = mount(<Text>Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant h1', () => {
    const wrapper = mount(<Text variant="h1">Test Text</Text>);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant h2', () => {
    const wrapper = mount(<Text variant="h2">Test Text</Text>);

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant h3', () => {
    const wrapper = mount(<Text variant="h3">Test Text</Text>);

    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant h4', () => {
    const wrapper = mount(<Text variant="h4">Test Text</Text>);

    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant h5', () => {
    const wrapper = mount(<Text variant="h5">Test Text</Text>);

    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant h6', () => {
    const wrapper = mount(<Text variant="h6">Test Text</Text>);

    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant subtitle1', () => {
    const wrapper = mount(<Text variant="subtitle1">Test Text</Text>);

    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant subtitle2', () => {
    const wrapper = mount(<Text variant="subtitle2">Test Text</Text>);

    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant body1', () => {
    const wrapper = mount(<Text variant="body1">Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant body2', () => {
    const wrapper = mount(<Text variant="body2">Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant button', () => {
    const wrapper = mount(<Text variant="button">Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant caption', () => {
    const wrapper = mount(<Text variant="caption">Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant overline', () => {
    const wrapper = mount(<Text variant="overline">Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant code', () => {
    const wrapper = mount(<Text variant="code">Test Text</Text>);

    expect(wrapper.find('code')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with variant inherit', () => {
    const wrapper = mount(<Text variant="inherit">Test Text</Text>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Text');
  });

  it('Should render a Text component with fontweight and casing', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme({})}>
        <Text fontColor={'primary'} weight={500}>
          Test Text
        </Text>
        <Text fontColor={'red'} capitalize>
          Test Text
        </Text>
        <Text fontColor={['shade', 2, 'main']} uppercase>
          Test Text
        </Text>
      </ThemeProvider>,
    );

    expect(wrapper.find('p')).toHaveLength(3);
  });
});
