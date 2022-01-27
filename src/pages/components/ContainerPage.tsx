import React from 'react';
import {samples} from '@core/samples';
import styled from '@emotion/styled';
import {P, Code} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {Flex} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

const Margin = styled(Flex)`
  flex-grow: 1;
  width: 12px;
  height: auto;
  background-color: #f6c18e;
`;
const Padding = styled(Flex)`
  flex-grow: 1;
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  height: auto;
  background-color: #b8c777;
`;
const Content = styled(Flex)`
  display: block;
  width: 252px;
  background-color: #95cddd;
  color: black;
`;

export const ContainerPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        A <Code>Container</Code> is a div with a maximum width Try resizing the
        screen.
      </P>
      <SampleBox>
        <Flex row justifyContent="space-between" width="100%">
          <Margin />
          <Padding />
          <Content>
            This is a container with a <Code>maxWidth</Code> of <Code>xs</Code>.
            The container will not go wider than the xs breakpoint.
          </Content>
          <Padding />
          <Margin />
        </Flex>
      </SampleBox>
      <TypeScript code={samples.container.overview} />

      <ApiTable />
    </>
  );
};
