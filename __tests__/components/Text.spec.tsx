import React from 'react';
import {mount} from 'enzyme';
import {ThemeProvider} from '@emotion/react';
import {Typography} from '@themestress/components';
import {createTheme} from '@themestress/core';

describe('Component Typography', () => {
  it('Should render a Typography component', () => {
    const wrapper = mount(<Typography>Test Typography</Typography>);

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant h1', () => {
    const wrapper = mount(
      <Typography variant="h1">Test Typography</Typography>,
    );

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant h2', () => {
    const wrapper = mount(
      <Typography variant="h2">Test Typography</Typography>,
    );

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant h3', () => {
    const wrapper = mount(
      <Typography variant="h3">Test Typography</Typography>,
    );

    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant h4', () => {
    const wrapper = mount(
      <Typography variant="h4">Test Typography</Typography>,
    );

    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant h5', () => {
    const wrapper = mount(
      <Typography variant="h5">Test Typography</Typography>,
    );

    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant h6', () => {
    const wrapper = mount(
      <Typography variant="h6">Test Typography</Typography>,
    );

    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant subtitle1', () => {
    const wrapper = mount(
      <Typography variant="subtitle1">Test Typography</Typography>,
    );

    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant subtitle2', () => {
    const wrapper = mount(
      <Typography variant="subtitle2">Test Typography</Typography>,
    );

    expect(wrapper.find('h6')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant body1', () => {
    const wrapper = mount(
      <Typography variant="body1">Test Typography</Typography>,
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant body2', () => {
    const wrapper = mount(
      <Typography variant="body2">Test Typography</Typography>,
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant button', () => {
    const wrapper = mount(
      <Typography variant="button">Test Typography</Typography>,
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant caption', () => {
    const wrapper = mount(
      <Typography variant="caption">Test Typography</Typography>,
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant overline', () => {
    const wrapper = mount(
      <Typography variant="overline">Test Typography</Typography>,
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant code', () => {
    const wrapper = mount(
      <Typography variant="code">Test Typography</Typography>,
    );

    expect(wrapper.find('code')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with variant inherit', () => {
    const wrapper = mount(
      <Typography variant="inherit">Test Typography</Typography>,
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.text()).toContain('Test Typography');
  });

  it('Should render a Typography component with fontweight and casing', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme({})}>
        <Typography fontColor={'primary'} weight={500}>
          Test Typography
        </Typography>
        <Typography fontColor={'red'} capitalize>
          Test Typography
        </Typography>
        <Typography fontColor={['neutral', 2, 'main']} uppercase>
          Test Typography
        </Typography>
      </ThemeProvider>,
    );

    expect(wrapper.find('p')).toHaveLength(3);
  });
});
