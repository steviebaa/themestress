import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {samples} from '@core/samples';
import {Code, P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {MenuItem, Menu, Divider} from '@themestress/components';

import FolderIcon from '@themestress/icons/FolderOutlined';
import ImportIcon from '@themestress/icons/FileDownloadOutlined';
import SmallRightArrowIcon from '@themestress/icons/ArrowRightOutlined';

const StyledMenu = styled(Menu)`
  position: relative;
  top: 0;
  left: 0;
`;

export const MenuItemPage = () => {
  const anchorEl = useRef(null);

  return (
    <>
      <PageHeader />
      <P>
        The <Code>MenuItem</Code> is a styled <Code>TextButton</Code> for use in
        the <Code>Menu</Code> component.
      </P>
      <SampleBox contrast>
        <StyledMenu open={true} onClose={null} anchorElement={anchorEl} _nested>
          <MenuItem startIcon={FolderIcon}>Open</MenuItem>
          <MenuItem>Save as</MenuItem>
          <MenuItem
            disabled
            startIcon={ImportIcon}
            endIcon={SmallRightArrowIcon}
          >
            Import
          </MenuItem>
          <Divider />
          <MenuItem endIcon={'⌘C'}>Copy</MenuItem>
        </StyledMenu>
      </SampleBox>
      <TypeScript code={samples.menuitem.overview} />

      <ApiTable />
    </>
  );
};
