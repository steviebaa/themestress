import React, {useState} from 'react';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {SampleBox} from '@components/SampleBox';
import {P, Subheading} from '@components/StyledTypography';
import {TypeScript} from '@components/TypeScript';
import {Switch} from '@themestress/components';

export const SwitchPage = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <PageHeader />

      <P>For toggling boolean values.</P>
      <SampleBox>
        <Switch checked={on} onChange={value => setOn(value)} />
        <Switch checked={on} onChange={value => setOn(value)} noIcon />
      </SampleBox>
      <TypeScript code={samples.switch.overview} />

      <Subheading>Custom Colors</Subheading>
      <P>Customize the track and handle color.</P>
      <SampleBox>
        <Switch
          checked={on}
          onChange={value => setOn(value)}
          trackColor={{on: 'info', off: 'secondary'}}
          handleColor={{on: 'royalblue', off: ['error', 'main']}}
        />
      </SampleBox>
      <TypeScript code={samples.switch.colors} />

      <Subheading>Small Track</Subheading>
      <P>
        Reduce the height of the track to match the handle.{' '}
        <strong>
          Likely to be removed in the near future to create an option with more
          flexibility.
        </strong>
      </P>
      <SampleBox>
        <Switch checked={on} onChange={value => setOn(value)} smallTrack />
        <Switch
          checked={on}
          onChange={value => setOn(value)}
          smallTrack
          noIcon
        />
      </SampleBox>

      <ApiTable />
    </>
  );
};
