import React from 'react';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {Button, Tooltip} from '@themestress/components';

export const TooltipPage = () => {
  return (
    <>
      <PageHeader />

      <P>
        A wrapper to provide additional information on hover. Currently only
        available for components that implement <Code>forwardRef</Code>.
      </P>

      <SampleBox>
        <Tooltip tip={"Is it me you're looking for?"}>
          <Button variant="outlined">Hover Me!</Button>
        </Tooltip>
      </SampleBox>
      <TypeScript code={samples.tooltip.overview} />

      <Subheading>Direction</Subheading>
      <P>Render the tooltip in various directions.</P>

      <SampleBox>
        <Tooltip tip="Hello from the left side." direction="left">
          <Button variant="outlined">Left</Button>
        </Tooltip>

        <Tooltip tip="Hello from the other side." direction="right">
          <Button variant="outlined">Right</Button>
        </Tooltip>

        <Tooltip tip="Hello from below." direction="bottom">
          <Button variant="outlined">Bottom</Button>
        </Tooltip>
      </SampleBox>
      <TypeScript code={samples.tooltip.direction} />

      <Subheading>Delay</Subheading>
      <P>Add a delay before the tooltip shows.</P>

      <SampleBox>
        <Tooltip tip="That was 2 seconds!" delay={2000}>
          <Button variant="outlined">Delayed Tooltip</Button>
        </Tooltip>
      </SampleBox>
      <TypeScript code={samples.tooltip.delay} />

      <ApiTable />
    </>
  );
};
