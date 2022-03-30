import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {ElevatedButton, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import PlusIcon from '@themestress/icons/PlusSharp';

export const ElevatedButtonPage = () => {
  return (
    <>
      <PageHeader />

      <SampleBox>
        <Tooltip tip={<Code>{`startIcon={icon}`}</Code>}>
          <ElevatedButton margin={2} startIcon={PlusIcon}>
            Elevated Icon Button
          </ElevatedButton>
        </Tooltip>
        <br />
        <ElevatedButton margin={2}>Elevated Button</ElevatedButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <ElevatedButton margin={2} startIcon={PlusIcon} disabled>
            Elevated Button
          </ElevatedButton>
        </Tooltip>
      </SampleBox>

      <CodeBlock code={samples.elevatedbutton.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip
            tip={
              <Code>{`endIcon={<svg viewBox="0 0 24 24"><path d="M18 ..."/></svg}`}</Code>
            }
          >
            <ElevatedButton margin={2} endIcon={PlusIcon}>
              End Icon
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{`elevation="5"`}</Code>}>
            <ElevatedButton margin={2} elevation="5">
              Elevation
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'fontColor="red"'}</Code>}>
            <ElevatedButton margin={2} fontColor="red">
              Font Color
            </ElevatedButton>
          </Tooltip>
          <br />
          <Tooltip
            tip={<Code>{'bgColor="var(--sys-color-inverse-primary)"'}</Code>}
          >
            <ElevatedButton
              margin={2}
              bgColor="var(--sys-color-inverse-primary)"
            >
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
            <ElevatedButton margin={2} align="right" width="150px">
              Text Align
            </ElevatedButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
