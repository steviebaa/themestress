import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {FilledTonalButton, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import PlusIcon from '@themestress/icons/PlusSharp';

export const FilledTonalButtonPage = () => {
  return (
    <>
      <PageHeader />

      <SampleBox>
        <Tooltip tip={<Code>{`startIcon={icon}`}</Code>}>
          <FilledTonalButton margin={2} startIcon={PlusIcon}>
            Filled Tonal Icon Button
          </FilledTonalButton>
        </Tooltip>
        <br />
        <FilledTonalButton margin={2}>Filled Tonal Button</FilledTonalButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <FilledTonalButton margin={2} startIcon={PlusIcon} disabled>
            Filled Tonal Button
          </FilledTonalButton>
        </Tooltip>
      </SampleBox>

      <CodeBlock code={samples.filledtonalbutton.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip
            tip={
              <Code>{`endIcon={<svg viewBox="0 0 24 24"><path d="M18 ..."/></svg}`}</Code>
            }
          >
            <FilledTonalButton margin={2} endIcon={PlusIcon}>
              End Icon
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{`elevation="5"`}</Code>}>
            <FilledTonalButton margin={2} elevation="5">
              Elevation
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'fontColor="red"'}</Code>}>
            <FilledTonalButton margin={2} fontColor="red">
              Font Color
            </FilledTonalButton>
          </Tooltip>
          <br />
          <Tooltip
            tip={<Code>{'bgColor="var(--sys-color-inverse-primary)"'}</Code>}
          >
            <FilledTonalButton
              margin={2}
              bgColor="var(--sys-color-inverse-primary)"
            >
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
            <FilledTonalButton margin={2} align="right" width="150px">
              Text Align
            </FilledTonalButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
