import React, {useState} from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Slider, Flex, SliderMark} from '@themestress/components';
import {useSnackbar} from '@themestress/core/hooks';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const SliderPage = () => {
  const snackbar = useSnackbar();

  const [value, setValue] = useState(50);
  const [value2, setValue2] = useState(10);
  const [value3, setValue3] = useState(2);
  const [value4, setValue4] = useState(40);

  const marks: SliderMark[] = [
    {value: 1, label: 'Low'},
    {value: 2, label: 'Medium'},
    {value: 3, label: 'High'},
  ];

  return (
    <>
      <PageHeader />
      <P>A slider control for choosing predefined values.</P>

      <SampleBox>
        <Flex column width="100%" alignItems="center">
          <Slider
            width="60%"
            value={value}
            onChange={v => setValue(v)}
            onChangeCommitted={v => {
              snackbar.enqueue({
                content: `Slider changed to ${v}`,
                variant: 'info',
              });
            }}
          />
        </Flex>
      </SampleBox>
      <TypeScript code={samples.slider.overview} />

      <Subheading>Range</Subheading>
      <P>
        The slider values can be set by using the <Code>min</Code>,{' '}
        <Code>max</Code> and <Code>step</Code> properties. In the below example,
        with a step size of 0.1 and a range of [0,10], there is 100 possible
        values. This means a lot of labels and markers! Use the{' '}
        <Code>labelFrequency</Code> and <Code>markerFrequency</Code> props to
        only render every n<sup>th</sup> label or marker.
      </P>
      <SampleBox>
        <Flex column width="100%" alignItems="center">
          <Slider
            width="60%"
            min={0}
            max={10}
            step={0.1}
            labelFrequency={{start: 10, step: 10, stop: 91}}
            markerFrequency={{start: 0, step: 5}}
            value={value2}
            onChange={v => setValue2(v)}
            onChangeCommitted={v => {
              snackbar.enqueue({content: `Slider changed to ${v}`});
            }}
          />
        </Flex>
      </SampleBox>
      <TypeScript code={samples.slider.range} />

      <Subheading>Custom Points</Subheading>
      <P>
        Custom marks can be provided via the <Code>marks</Code> prop. When using
        this prop, there is no need to use <Code>min</Code>, <Code>max</Code> or{' '}
        <Code>step</Code>.
      </P>
      <SampleBox>
        <Flex column width="100%" alignItems="center">
          <Slider
            width="60%"
            marks={marks}
            value={value3}
            onChange={v => setValue3(v)}
            onChangeCommitted={v => {
              snackbar.enqueue({content: `Slider changed to ${v}`});
            }}
            hideTooltip
          />
        </Flex>
      </SampleBox>
      <TypeScript code={samples.slider.custom} />

      <Subheading>Colors</Subheading>
      <P>
        Different components of the slider can have custom colors. For further
        customization you can target the colors within.
      </P>
      <SampleBox>
        <Flex column width="100%" alignItems="center">
          <Slider
            value={value4}
            onChange={v => setValue4(v)}
            onChangeCommitted={v => {
              snackbar.enqueue({content: `Slider changed to ${v}`});
            }}
            handlePrimaryColor="var(--sys-color-tertiary)"
            handleSecondaryColor="rgb(100,100,100,0.5)"
            trackPrimaryColor="var(--sys-color-tertiary)"
            trackSecondaryColor="var(--sys-color-tertiary-container)"
            markPrimaryColor="white"
            markSecondaryColor="orange"
          />
        </Flex>
      </SampleBox>
      <TypeScript code={samples.slider.colors} />

      <ApiTable />
    </>
  );
};
