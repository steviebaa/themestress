import React, { useState as useStateMock, useRef as useRefMock } from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@core/themeUtils';
import { Slider } from '@components/Slider';

let setState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual<Record<string, unknown>>('react'),
  useState: jest.fn((init) => [init, setState]),
}));

describe('Component Slider', () => {
  jest.useFakeTimers();
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {});

  it('Should render', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider>Test Slider</Slider>
      </ThemeProvider>,
    );

    const component = wrapper.find(Slider);
    expect(component).toHaveLength(1);
  });

  it('Should call setIsHandleDown with true', () => {
    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider
          marks={[
            { label: '22px', value: 22 },
            { label: '24px', value: 24 },
          ]}
        >
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    const component = wrapper.find('span._Slider-Handle');
    component.prop('onMouseDown')(null);

    expect(component).toHaveLength(1);
  });

  it('Should set and remove the window event listeners', () => {
    const mRef = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef);
    jest.fn(useRefMock).mockReturnValueOnce(mRef);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider
          marks={[
            { label: '22px', value: 22 },
            { label: '24px', value: 24 },
          ]}
        >
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    wrapper.unmount();
  });

  it('Should not set the window event listeners due to null handle ref', () => {
    let mRef = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef);
    jest.fn(useRefMock).mockReturnValueOnce(mRef);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider min={3} max={10} step={1}>
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    mRef = null;

    wrapper.unmount();
  });

  it('Should invoke handleSliderClick event', () => {
    const mRef1 = {
      current: {
        getBoundingClientRect: () => ({ x: 5, width: 5 }),
      },
    };
    const mRef2 = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef1);
    jest.fn(useRefMock).mockReturnValueOnce(mRef2);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider
          value={24}
          marks={[
            { label: '22px', value: 22 },
            { label: '24px', value: 24 },
          ]}
          onChange={() => {}}
          onChangeCommitted={() => {}}
        >
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    const sliderGroup = wrapper.find('span._Slider-Group');
    sliderGroup.prop('onClick')({ x: 5 } as any);

    jest.advanceTimersByTime(40);
  });

  it('Should invoke handlePointerUpEvent and return due to isHandleDown = false', () => {
    const mRef1 = {
      current: { getBoundingClientRect: () => ({ x: 5, width: 5 }) },
    };
    const mRef2 = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef1);
    jest.fn(useRefMock).mockReturnValueOnce(mRef2);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider value={24}>Test Slider</Slider>
      </ThemeProvider>,
    );

    const sliderGroup = wrapper.find('span._Slider-Group');
    sliderGroup.prop('onClick')({ x: 5 } as any);

    const pointerUp = new MouseEvent('pointerup');
    window.dispatchEvent(pointerUp);
  });

  it('Should invoke handlePointerMoveEvent and return due to isHandleDown = false', () => {
    const mRef1 = {
      current: {
        getBoundingClientRect: () => ({ x: 5, width: 5 }),
      },
    };
    const mRef2 = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef1);
    jest.fn(useRefMock).mockReturnValueOnce(mRef2);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider
          value={24}
          marks={[
            { label: '22px', value: 22 },
            { label: '24px', value: 24 },
          ]}
        >
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    const sliderGroup = wrapper.find('span._Slider-Group');
    sliderGroup.prop('onClick')({ x: 5 } as any);

    const mouseMove = new MouseEvent('pointermove');
    window.dispatchEvent(mouseMove);
  });

  it('Should invoke handleMouseMove', () => {
    const mRef1 = {
      current: {
        getBoundingClientRect: () => ({ x: 5, width: 5 }),
      },
    };
    const mRef2 = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef1);
    jest.fn(useRefMock).mockReturnValueOnce(mRef2);

    (useStateMock as jest.Mock).mockImplementation(() => [true, setState]);

    const wrapper = mount(
      <ThemeProvider theme={createTheme}>
        <Slider
          value={24}
          marks={[
            { label: '22px', value: 22 },
            { label: '24px', value: 24 },
          ]}
        >
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    const sliderGroup = wrapper.find('span._Slider-Group');
    sliderGroup.prop('onClick')({ x: 5 } as any);

    const mouseMove = new MouseEvent('pointermove');
    window.dispatchEvent(mouseMove);
  });

  it('Should invoke handleMouseMove and call getNearest', () => {
    const mRef1 = {
      current: { getBoundingClientRect: () => ({ x: 1, width: 1 }) },
    };
    const mRef2 = { current: {} };

    jest.fn(useRefMock).mockReturnValueOnce(mRef1);
    jest.fn(useRefMock).mockReturnValueOnce(mRef2);

    (useStateMock as jest.Mock).mockImplementation(() => [true, setState]);

    mount(
      <ThemeProvider theme={createTheme}>
        <Slider
          value={22}
          marks={[
            { label: '22px', value: 22 },
            { label: '24px', value: 24 },
          ]}
          onChange={() => {}}
        >
          Test Slider
        </Slider>
      </ThemeProvider>,
    );

    var event = new MouseEvent('pointermove', {
      clientX: 1,
      clientY: 1,
      bubbles: true,
    });

    window.dispatchEvent(event);
  });
});
