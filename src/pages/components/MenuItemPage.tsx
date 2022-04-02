import React, {useRef, useState} from 'react';
import {samples} from '@core/samples';
import {Code, P} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {MenuItem, Menu, Divider, ElevatedButton} from '@themestress/components';

import FolderIcon from '@themestress/icons/FolderOutlined';
import ImportIcon from '@themestress/icons/FileDownloadOutlined';
import SmallRightArrowIcon from '@themestress/icons/ArrowRightOutlined';

export const MenuItemPage = () => {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef(null);
  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <>
      <PageHeader />
      <P>
        The <Code>MenuItem</Code> is a styled <Code>TextButton</Code> for use in
        the <Code>Menu</Code> component.
      </P>
      <SampleBox contrast>
        <ElevatedButton ref={anchorEl} onClick={toggleMenu}>
          Click here
        </ElevatedButton>

        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorElement={anchorEl}
          anchorOrigin={{horizontal: 'center'}}
          transformOrigin={{horizontal: 'center'}}
        >
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
        </Menu>
      </SampleBox>
      <CodeBlock code={samples.menuitem.overview} />

      <ApiTable />
    </>
  );
};
