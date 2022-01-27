import React from 'react';
import styled from '@emotion/styled';
import {P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Flex, Typography, Spacer} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

const Text = styled(({...props}) => (
  <Typography
    variant="body1"
    fontSize="18px"
    bgColor="royalblue"
    padding={2}
    margin={0}
    {...props}
  >
    {props.children}
  </Typography>
))`
  border-radius: 2px;
`;

const Demo = ({column}: {column?: boolean}) => {
  return (
    <Flex row={!column} column={column}>
      <Text>Flex</Text>
      <Spacer size="12px" vertical={column} />
      <Text>{column ? 'Column' : 'Row'}</Text>
    </Flex>
  );
};

export const FlexPage = () => {
  return (
    <>
      <PageHeader />
      <P>Create a flex box</P>

      <SampleBox>
        <Demo column />

        <Demo />
      </SampleBox>
      <TypeScript code={samples.flex.overview} />

      <ApiTable />
    </>
  );
};
