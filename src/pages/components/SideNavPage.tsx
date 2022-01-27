import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {SideNav, SideNavItem, Typography} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const SideNavPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <PageHeader />
      <P>
        Create navigation tabs in a vertical list. This is what has been used on
        the left side of this page.
      </P>

      <P>
        The <Code>SideNav</Code> will index children that are{' '}
        <Link to="/components/sidenav">
          <Code>SideNavItem</Code>
        </Link>
        components.
      </P>

      <SampleBox>
        <SideNav selected={selected} onTabChanged={i => setSelected(i)}>
          <Typography>Overview</Typography>
          <SideNavItem>Dashboard</SideNavItem>

          <Typography>Reports</Typography>
          <SideNavItem>Annual</SideNavItem>
          <SideNavItem>Monthly</SideNavItem>

          <Typography>Settings</Typography>
          <SideNavItem>Account</SideNavItem>
        </SideNav>
      </SampleBox>
      <TypeScript code={samples.sidenav.overview} />

      <ApiTable />
    </>
  );
};
