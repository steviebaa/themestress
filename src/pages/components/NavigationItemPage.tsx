import React from 'react';
import {Link} from 'react-router-dom';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {NavigationItem, Flex} from '@themestress/components';

export const NavigationItemPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        For use with the{' '}
        <Link to="/components/navigationrail">
          <Code>NavigationRail</Code>
        </Link>
        component.
      </P>

      <SampleBox>
        <Flex column>
          <NavigationItem>Dashboard</NavigationItem>
        </Flex>
      </SampleBox>
      <TypeScript code={samples.navigationitem.overview} />

      <ApiTable />
    </>
  );
};
