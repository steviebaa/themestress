import React from 'react';
import {Link} from 'react-router-dom';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Paper, MenuItem, Flex} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const MenuItemPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        The <Code>MenuItem</Code> is a styled <Code>Button</Code> for use in the{' '}
        <Code>Menu</Code> component.
      </P>

      <SampleBox>
        <Paper>
          <Flex column paddingTop={1} paddingBottom={1}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save As</MenuItem>
          </Flex>
        </Paper>
      </SampleBox>
      <TypeScript code={samples.menuitem.overview} />

      <Subheading>API</Subheading>
      <P>
        See the{' '}
        <Link to="/components/button">
          <Code>Button</Code>
        </Link>{' '}
        API for available props.
      </P>

      <ApiTable />
    </>
  );
};
