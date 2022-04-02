import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {OutlinedButton, Flex, Tooltip} from '@themestress/components';
import PlusIcon from '@themestress/icons/PlusSharp';

export const OutlinedButtonPage = () => {
  return (
    <>
      <PageHeader />

      <SampleBox>
        <Tooltip tip={<Code>{`startIcon={icon}`}</Code>}>
          <OutlinedButton margin={2} startIcon={PlusIcon}>
            Outlined Icon Button
          </OutlinedButton>
        </Tooltip>
        <br />
        <OutlinedButton margin={2}>Outlined Button</OutlinedButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <OutlinedButton margin={2} startIcon={PlusIcon} disabled>
            Outlined Button
          </OutlinedButton>
        </Tooltip>
      </SampleBox>

      <CodeBlock code={samples.outlinedbutton.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip
            tip={
              <Code>{`endIcon={<svg viewBox="0 0 24 24"><path d="M18 ..."/></svg}`}</Code>
            }
          >
            <OutlinedButton margin={2} endIcon={PlusIcon}>
              End Icon
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{`elevation="5"`}</Code>}>
            <OutlinedButton margin={2} elevation="5">
              Elevation
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'fontColor="red"'}</Code>}>
            <OutlinedButton margin={2} fontColor="red">
              Font Color
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip
            tip={<Code>{'bgColor="var(--sys-color-inverse-primary)"'}</Code>}
          >
            <OutlinedButton
              margin={2}
              bgColor="var(--sys-color-inverse-primary)"
            >
              Background Color
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'radius="4px"'}</Code>}>
            <OutlinedButton margin={2} radius="4px">
              Border Radius
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'height="50px"'}</Code>}>
            <OutlinedButton margin={2} height="50px">
              Height
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'width="100px"'}</Code>}>
            <OutlinedButton margin={2} width="300px">
              Width
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'align="right"'}</Code>}>
            <OutlinedButton margin={2} align="right" width="150px">
              Text Align
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'borderWidth="3px"'}</Code>}>
            <OutlinedButton margin={2} borderWidth="3px">
              Border Width
            </OutlinedButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'borderColor="red"'}</Code>}>
            <OutlinedButton margin={2} borderColor="red">
              Border Color
            </OutlinedButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
