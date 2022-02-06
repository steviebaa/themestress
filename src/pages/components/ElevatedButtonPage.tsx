import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {ElevatedButton, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const ElevatedButtonPage = () => {
  const icon = (
    <svg height={16} width={16}>
      <path d="M16 9H9V16H7V9H0V7H7V0H9V7H16V9Z" />
    </svg>
  );

  return (
    <>
      <PageHeader />

      <SampleBox>
        <Tooltip tip={<Code>{`startIcon={icon}`}</Code>}>
          <ElevatedButton startIcon={icon}>Elevated Icon Button</ElevatedButton>
        </Tooltip>
        <br />
        <ElevatedButton>Elevated Button</ElevatedButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <ElevatedButton startIcon={icon} disabled>
            Elevated Button
          </ElevatedButton>
        </Tooltip>
      </SampleBox>

      <TypeScript code={samples.elevatedbutton.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip
            tip={<Code>{`endIcon={<svg><path d="M18 ..."/></svg}`}</Code>}
          >
            <ElevatedButton margin={2} endIcon={icon}>
              Elevated Icon Button
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{`elevation="5"`}</Code>}>
            <ElevatedButton margin={2} elevation="5">
              Elevation
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip
            tip={<Code>{'fontColor="var(--ref-palette-error-60)"'}</Code>}
          >
            <ElevatedButton margin={2} fontColor="var(--ref-palette-error-60)">
              Font Color
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'bgColor="#fcceaf"'}</Code>}>
            <ElevatedButton margin={2} bgColor="#fcceaf">
              Background Color
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>radius="4px"</Code>}>
            <ElevatedButton margin={2} radius="4px">
              Border Radius
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>height="50px"</Code>}>
            <ElevatedButton margin={2} height="50px">
              Height
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>width="100px"</Code>}>
            <ElevatedButton margin={2} width="300px">
              Width
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>align="right"</Code>}>
            <ElevatedButton margin={2} align="right">
              Text Align
            </ElevatedButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
