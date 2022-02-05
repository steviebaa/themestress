import React from 'react';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Card, Flex} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const CardPage = () => {
  const cards = [];
  for (let i = 0; i <= 5; i++) {
    cards.push(
      <Card margin={2} padding={4} elevation={i} height={'50px'} key={i}>
        <Flex justifyContent="center" alignItems="center" height="100%">
          Elevation {i}
        </Flex>
      </Card>,
    );
  }

  return (
    <>
      <PageHeader />
      <P>A surface for displaying almost anything.</P>

      <SampleBox>
        <Card elevation={3}>
          Card with <Code>variant="elevated"</Code>
        </Card>

        <Card variant="filled">
          Card with <Code>variant="filled"</Code>
        </Card>

        <Card variant="outlined">
          Card with <Code>variant="outlined"</Code>
        </Card>
      </SampleBox>
      <TypeScript code={samples.card.overview} />

      <Subheading>Elevation</Subheading>
      <SampleBox>
        <Flex wrap>{cards}</Flex>
      </SampleBox>
      <TypeScript code={samples.card.elevation} />

      <ApiTable />
    </>
  );
};
