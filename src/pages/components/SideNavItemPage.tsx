import React from 'react';
import {Link} from 'react-router-dom';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {SideNavItem, Flex} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const SideNavItemPage = () => {
  return (
    <>
      <PageHeader />
      <P>
        For use with the{' '}
        <Link to="/components/sidenav">
          <Code>SideNav</Code>
        </Link>
        component.
      </P>

      <SampleBox>
        <Flex column>
          <SideNavItem>Dashboard</SideNavItem>
        </Flex>
      </SampleBox>
      <TypeScript code={samples.sidenavitem.overview} />

      <ApiTable />
    </>
  );
};
