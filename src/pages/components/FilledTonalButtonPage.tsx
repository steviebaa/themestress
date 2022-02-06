import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {FilledTonalButton, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const FilledTonalButtonPage = () => {
  const icon = (
    <svg height={18} width={18}>
      <path d="M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z"></path>
    </svg>
  );

  return (
    <>
      <PageHeader />

      <SampleBox>
        <Tooltip tip={<Code>{`startIcon={icon}`}</Code>}>
          <FilledTonalButton startIcon={icon}>Filled Icon Button</FilledTonalButton>
        </Tooltip>
        <br />
        <FilledTonalButton>Filled Button</FilledTonalButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <FilledTonalButton startIcon={icon} disabled>
            Filled Button
          </FilledTonalButton>
        </Tooltip>
      </SampleBox>

      <TypeScript code={samples.filledbutton.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip
            tip={<Code>{`endIcon={<svg><path d="M18 ..."/></svg}`}</Code>}
          >
            <FilledTonalButton margin={2} endIcon={icon}>
              Filled Icon Button
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{`elevation="5"`}</Code>}>
            <FilledTonalButton margin={2} elevation="5">
              Elevation
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'fontColor="var(--sys-color-error)"'}</Code>}>
            <FilledTonalButton margin={2} fontColor="var(--sys-color-error)">
              Font Color
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'bgColor="#ffadad"'}</Code>}>
            <FilledTonalButton margin={2} bgColor="#ffadad">
              Background Color
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>radius="4px"</Code>}>
            <FilledTonalButton margin={2} radius="4px">
              Border Radius
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>height="50px"</Code>}>
            <FilledTonalButton margin={2} height="50px">
              Height
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>width="100px"</Code>}>
            <FilledTonalButton margin={2} width="300px">
              Width
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>align="right"</Code>}>
            <FilledTonalButton margin={2} align="right">
              Text Align
            </FilledTonalButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
