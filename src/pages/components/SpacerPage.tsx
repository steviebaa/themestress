import React from 'react';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {Flex, Spacer, Typography} from '@themestress/components';

export const SpacerPage = () => {
  return (
    <>
      <PageHeader />

      <P>
        A semantic means to provide spacing which might otherwise be difficult
        or overly complex to achieve.
      </P>
      <SampleBox>
        <Flex column>
          <Typography bgColor="royalblue">These spans have</Typography>
          <Spacer size="40px" vertical />
          <Typography bgColor="royalblue">
            a 40px vertical spacer between them.
          </Typography>
        </Flex>
      </SampleBox>
      <TypeScript code={samples.spacer.overview} />

      <Subheading>Breakpoints</Subheading>
      <P>Optionally set a different size for any breakpoint.</P>
      <SampleBox>
        <Typography bgColor="royalblue">
          These spans have a varying vertical spacer
        </Typography>
        <Spacer size="40px" breakpoints={{sm: '3px', md: '100px'}} />
        <Typography bgColor="royalblue">
          between them depending on the current breakpoint.
        </Typography>
      </SampleBox>
      <TypeScript code={samples.spacer.breakpoints} />

      <ApiTable />
    </>
  );
};
