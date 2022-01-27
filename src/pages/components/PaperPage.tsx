import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Paper, Flex} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const PaperPage = () => {
  const papers = [];
  for (let i = 0; i < 25; i++) {
    papers.push(
      <Paper
        margin={2}
        padding={4}
        elevation={i}
        width={'30px'}
        height={'30px'}
        key={i}
      >
        <Flex justifyContent="center" alignItems="center" height="100%">
          {i}
        </Flex>
      </Paper>,
    );
  }

  return (
    <>
      <PageHeader />
      <P>A surface for displaying almost anything.</P>

      <P>
        If <Code>fontColor</Code> is not passed as a prop, then the{' '}
        <Code>fontColor</Code> will be calculated to provide sufficient contrast
        to the background color, even if a custom
        <Code>bgColor</Code> prop is provided.
      </P>

      <P>
        If <Code>bgColor</Code> is equal to a color from the theme palette, for
        example: <Code>bgColor="primary"</Code>, then the corresponding{' '}
        <Code>primary.on</Code> color will be used for the{' '}
        <Code>fontColor</Code> unless the prop is explicitly set.
      </P>

      <SampleBox>
        <Paper padding={3} elevation={3} bgColor={'primary'}>
          Paper with <Code>variant="elevated"</Code>
        </Paper>
        <Paper padding={3} variant="outlined">
          Paper with <Code>variant="outlined"</Code>
        </Paper>
      </SampleBox>
      <TypeScript code={samples.paper.overview} />

      <Subheading>Elevation</Subheading>
      <SampleBox>
        <Flex wrap>{papers}</Flex>
      </SampleBox>
      <TypeScript code={samples.paper.elevation} />

      <ApiTable />
    </>
  );
};
