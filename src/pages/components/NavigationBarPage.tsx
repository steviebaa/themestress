import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {NavigationBar, NavigationBarItem, Icon} from '@themestress/components';
import ImportIcon from '@themestress/icons/FileDownloadOutlined';

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
        </Link>{' '}
        components.
      </P>

      <SampleBox contrast>
        <StyledNavBar
          selected={selected}
          onSelectionChanged={i => setSelected(i)}
        >
          <NavigationBarItem label="Label">
            {<Icon>{ImportIcon}</Icon>}
          </NavigationBarItem>
          <NavigationBarItem label="Label">
            {<Icon>{ImportIcon}</Icon>}
          </NavigationBarItem>
          <NavigationBarItem label="Label">
            {<Icon>{ImportIcon}</Icon>}
          </NavigationBarItem>
          <NavigationBarItem label="Label">
            {<Icon>{ImportIcon}</Icon>}
          </NavigationBarItem>
        </StyledNavBar>
      </SampleBox>
      <TypeScript code={samples.navigationbar.overview} />

      <ApiTable />
    </>
  );
};
