import React from 'react';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {Flex, Spacer, Typography} from '@themestress/components';

export const SpacerPage = () => {
  return (
    <>
      <PageHeader />

      <P>
        A spacing component to semantically provide spacing between elements.
      </P>
      <SampleBox>
        <Flex column>
          <Typography bgColor="lightblue">These spans have</Typography>
          <Spacer size="40px" vertical />
          <Typography bgColor="lightblue">
            a 40px vertical spacer between them.
          </Typography>
        </Flex>
      </SampleBox>
      <CodeBlock code={samples.spacer.overview} />

      <Subheading>Breakpoints</Subheading>
      <P>Optionally set a different size for any breakpoint.</P>
      <SampleBox>
        <Typography bgColor="lightblue">
          These spans have a varying vertical spacer
        </Typography>
        <Spacer size="40px" breakpoints={{sm: '3px', md: '100px'}} />
        <Typography bgColor="lightblue">
          between them depending on the current breakpoint.
        </Typography>
      </SampleBox>
      <CodeBlock code={samples.spacer.breakpoints} />

      <ApiTable />
    </>
  );
};
