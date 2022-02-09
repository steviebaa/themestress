import React from 'react';
import {P, Subheading} from '@components/StyledTypography';
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
      <Card elevation={i} height={'50px'} key={i} variant="elevated">
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
        <Card width="200px" height="100px" variant="elevated">
          <Flex height="100%" alignItems="flex-end">
            Elevated
          </Flex>
        </Card>

        <Card draggable width="200px" height="100px" variant="filled">
          <Flex height="100%" alignItems="flex-end">
            Filled
          </Flex>
        </Card>

        <Card draggable width="200px" height="100px" variant="outlined">
          <Flex height="100%" alignItems="flex-end">
            Outlined
          </Flex>
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
