import React from 'react';
import {samples} from '@core/samples';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {Button} from '@themestress/components';
import {CheckRounded} from '@themestress/icons';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const ButtonPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        By default, the button will use the <Code>text</Code> variant.
      </P>
      <SampleBox>
        <Button>Button</Button>
      </SampleBox>
      <TypeScript code={samples.button.overview} />

      <Subheading>Variant</Subheading>
      <P>There is three main styles of button.</P>
      <SampleBox>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </SampleBox>
      <TypeScript code={samples.button.variant} />

      <Subheading>Icons</Subheading>
      <SampleBox>
        <Button variant="outlined" padding={1}>
          <CheckRounded fill={['primary', 'main']} />
        </Button>
      </SampleBox>
      <TypeScript code={samples.button.icon} />

      <ApiTable />
    </>
  );
};
