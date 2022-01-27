import React from 'react';
import {samples} from '@core/samples';
import {P, Code} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {Avatar} from '@themestress/components';
import { ApiTable } from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const AvatarPage = () => {
  return (
		<>
			<PageHeader/>
      <P>
        By default, the borders of the avatar and its status badge have the
        following colors
        <br />• Light Mode:<Code>theme.palette.neutral[50].main</Code>
        <br />• Dark Mode: <Code>theme.palette.neutral[900].main</Code>
        <br />
        so it blends with the default Paper color.
        <br />
        <br />
        Order of precedence is <Code>src</Code> ➡️ <Code>initials</Code> ➡️
        <Code>Svg</Code>
      </P>
      <SampleBox>
        <Avatar noPulse statusColor={['error', 'main']} />
        <Avatar src="https://www.placecage.com/c/460/300" noStatus />
        <Avatar alt="Nicolas Cage" borderColor={'grey'} />
      </SampleBox>

			<TypeScript code={samples.avatar.overview} />
			
			<ApiTable/>
    </>
  );
};
