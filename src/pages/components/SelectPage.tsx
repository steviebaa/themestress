import React, {useState} from 'react';
import {samples} from '@core/samples';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {Select, MenuItem} from '@themestress/components';

import ImportIcon from '@themestress/icons/FileDownloadOutlined';

export const SelectPage = () => {
  const [value, setValue] = useState<string>('one');

  return (
    <>
      <PageHeader />
      <P>
        The <Code>MenuItem</Code> is a styled <Code>TextButton</Code> for use in
        the <Code>Menu</Code> component.
      </P>

      <SampleBox>
        <Select
          label="Select"
          value={value}
          onChange={e => setValue(e.target.value)}
        >
          <MenuItem value="one" startIcon={ImportIcon}>
            Item 1
          </MenuItem>
          <MenuItem value="two">Item 2</MenuItem>
        </Select>

        <Select
          label="Select"
          variant="filled"
          value={value}
          onChange={e => setValue(e.target.value)}
        >
          <MenuItem value="one" startIcon={ImportIcon}>
            Item 1
          </MenuItem>
          <MenuItem value="two">Item 2</MenuItem>
        </Select>
      </SampleBox>
      <TypeScript code={samples.select.overview} />

      <Subheading>API</Subheading>

      <ApiTable />
    </>
  );
};
