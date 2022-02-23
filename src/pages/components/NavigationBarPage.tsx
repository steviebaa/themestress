import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Icon, NavigationBar} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {NavigationBarItem} from '@themestress/components/NavigationBarItem';
import styled from '@emotion/styled';

const composeIcon = (
  <Icon>
    <svg viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z"
      />
    </svg>
  </Icon>
);

const plusIcon = (
  <Icon>
    <svg viewBox="0 0 24 24">
      <path d="M16 13H13V20H11V13H4V11H11V4H13V11H20V13Z"></path>
    </svg>
  </Icon>
);

const StyledNavBar = styled(NavigationBar)`
  position: relative;
`;

export const NavigationBarPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <PageHeader
        importCode={
          "import {NavigationBar, NavigationBarItem} from 'themestress/components';"
        }
      />
      <P>
        Create navigation tabs in a vertical list. This is what has been used on
        the left side of this page.
      </P>

      <P>
        The <Code>NavigationBar</Code> will index children that are{' '}
        <Link to="/components/navigationitem">
          <Code>NavigationBarItem</Code>
        </Link>
        components.
      </P>

      <SampleBox contrast>
        <StyledNavBar
          selected={selected}
          onSelectionChanged={i => setSelected(i)}
        >
          <NavigationBarItem label="Label">{composeIcon}</NavigationBarItem>
          <NavigationBarItem label="Label">{plusIcon}</NavigationBarItem>
          <NavigationBarItem label="Label">{composeIcon}</NavigationBarItem>
          <NavigationBarItem label="Label">{plusIcon}</NavigationBarItem>
        </StyledNavBar>
      </SampleBox>
      <TypeScript code={samples.navigationbar.overview} />

      <ApiTable />
    </>
  );
};
