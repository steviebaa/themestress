import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {FilledButton, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const FilledButtonPage = () => {
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
          <FilledButton startIcon={icon}>Filled Icon Button</FilledButton>
        </Tooltip>
        <br />
        <FilledButton>Filled Button</FilledButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <FilledButton startIcon={icon} disabled>
            Filled Button
          </FilledButton>
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
            <FilledButton margin={2} endIcon={icon}>
              Filled Icon Button
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{`elevation="5"`}</Code>}>
            <FilledButton margin={2} elevation="5">
              Elevation
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'fontColor="var(--sys-color-error-container)"'}</Code>}>
            <FilledButton margin={2} fontColor="var(--sys-color-error-container)">
              Font Color
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'bgColor="#ffadad"'}</Code>}>
            <FilledButton margin={2} bgColor="#ffadad">
              Background Color
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>radius="4px"</Code>}>
            <FilledButton margin={2} radius="4px">
              Border Radius
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>height="50px"</Code>}>
            <FilledButton margin={2} height="50px">
              Height
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>width="100px"</Code>}>
            <FilledButton margin={2} width="300px">
              Width
            </FilledButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>align="right"</Code>}>
            <FilledButton margin={2} align="right">
              Text Align
            </FilledButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
