import React from 'react';
import {samples} from '@core/samples';
import {P, Code} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {Avatar} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const AvatarPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        Order of precedence is <Code>src</Code> ➡️ <Code>initials</Code> ➡️{' '}
        <Code>Svg</Code>
      </P>
      <SampleBox>
        <Avatar noPulse statusColor="blue" />
        <Avatar src="https://www.placecage.com/c/460/300" noStatus />
        <Avatar alt="Nicolas Cage" />
      </SampleBox>

      <CodeBlock code={samples.avatar.overview} />

      <ApiTable />
    </>
  );
};
