import React from 'react';
import {samples} from '@core/samples';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {TextField} from '@themestress/components';

import FolderIcon from '@themestress/icons/FolderOutlined';
import ImportIcon from '@themestress/icons/FileDownloadOutlined';

export const TextFieldPage = () => {
  return (
    <>
      <PageHeader />

      <P>
        There are two variants of TextField. Use the <Code>variant</Code> prop
        to select <Code>outlined</Code> or <Code>filled.</Code>
      </P>

      <SampleBox>
        <TextField label="Outlined" />
        <TextField
          label="Weight"
          startIcon={ImportIcon}
          endIcon={'KG'}
          inputProps={{type: 'number'}}
        />
        <TextField label="Disabled" startIcon={FolderIcon} disabled />
      </SampleBox>

      <br />

      <SampleBox contrast>
        <TextField variant="filled" label="Filled" />
        <TextField
          variant="filled"
          label="Weight"
          startIcon={ImportIcon}
          endIcon={'KG'}
          inputProps={{type: 'number'}}
        />
        <TextField
          variant="filled"
          label="Disabled"
          startIcon={FolderIcon}
          disabled
        />
      </SampleBox>
      <TypeScript code={samples.textfield.overview} />

      <ApiTable />
    </>
  );
};
