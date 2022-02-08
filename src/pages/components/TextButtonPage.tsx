import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {TextButton, Flex, Tooltip} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const TextButtonPage = () => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path d="M16 13H13V20H11V13H4V11H11V4H13V11H20V13Z"></path>
    </svg>
  );

  return (
    <>
      <PageHeader />

      <SampleBox>
        <Tooltip tip={<Code>{`startIcon={icon}`}</Code>}>
          <TextButton margin={2} startIcon={icon}>
            Text Icon Button
          </TextButton>
        </Tooltip>
        <br />
        <TextButton margin={2}>Text Button</TextButton>
        <br />
        <Tooltip tip={<Code>{`disabled={true}`}</Code>}>
          <TextButton margin={2} startIcon={icon} disabled>
            Text Button
          </TextButton>
        </Tooltip>
      </SampleBox>

      <TypeScript code={samples.textbutton.overview} />

      <Subheading>Customizing</Subheading>
      <P>Hover a button to see the prop used.</P>
      <SampleBox>
        <Flex row wrap justifyContent="center" alignItems="center">
          <Tooltip
            tip={
              <Code>{`endIcon={<svg viewBox="0 0 24 24"><path d="M18 ..."/></svg}`}</Code>
            }
          >
            <TextButton margin={2} endIcon={icon}>
              End Icon
            </TextButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>{'fontColor="red"'}</Code>}>
            <TextButton margin={2} fontColor="red">
              Font Color
            </TextButton>
          </Tooltip>
          <br />
          <Tooltip
            tip={<Code>{'bgColor="var(--sys-color-inverse-primary)"'}</Code>}
          >
            <TextButton margin={2} bgColor="var(--sys-color-inverse-primary)">
              Background Color
            </TextButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>radius="4px"</Code>}>
            <TextButton margin={2} radius="4px">
              Border Radius
            </TextButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>height="50px"</Code>}>
            <TextButton margin={2} height="50px">
              Height
            </TextButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>width="100px"</Code>}>
            <TextButton margin={2} width="300px">
              Width
            </TextButton>
          </Tooltip>
          <br />
          <Tooltip tip={<Code>align="right"</Code>}>
            <TextButton margin={2} align="right" width="150px">
              Text Align
            </TextButton>
          </Tooltip>
        </Flex>
      </SampleBox>

      <ApiTable />
    </>
  );
};
