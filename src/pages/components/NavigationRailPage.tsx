import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {
  NavigationRail,
  NavigationItem,
  Typography,
} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const NavigationRailPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <PageHeader />
      <P>
        Create navigation tabs in a vertical list. This is what has been used on
        the left side of this page.
      </P>

      <P>
        The <Code>NavigationRail</Code> will index children that are{' '}
        <Link to="/components/navigationitem">
          <Code>NavigationItem</Code>
        </Link>
        components.
      </P>

      <SampleBox>
        <NavigationRail selected={selected} onTabChanged={i => setSelected(i)}>
          <Typography>Overview</Typography>
          <NavigationItem>Dashboard</NavigationItem>

          <Typography>Reports</Typography>
          <NavigationItem>Annual</NavigationItem>
          <NavigationItem>Monthly</NavigationItem>

          <Typography>Settings</Typography>
          <NavigationItem>Account</NavigationItem>
        </NavigationRail>
      </SampleBox>
      <TypeScript code={samples.sidenav.overview} />

      <ApiTable />
    </>
  );
};
