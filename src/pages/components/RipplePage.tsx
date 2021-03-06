import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {samples} from '@core/samples';
import {Ripple, ElevatedButton} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const RipplePage = () => {
  return (
    <>
      <PageHeader />
      <P>
        The ripple effect typically used by button style components. It can be
        added as a child to any element.
      </P>

      <SampleBox>
        <ElevatedButton>Create Ripple</ElevatedButton>
      </SampleBox>

      <Subheading>Use it anywhere</Subheading>
      <P>
        Below, the <Code>Ripple</Code> component has been added to a div
        element. The div element will need to have the css property{' '}
        <Code>overflow: hidden</Code> to prevent the ripple from extending
        outside the boundary of the div.
      </P>

      <SampleBox>
        <div>
          <Ripple />
          <span>Click here</span>
        </div>
      </SampleBox>
      <CodeBlock code={samples.ripple.overview} />

      <ApiTable />
    </>
  );
};
