import React, {useRef, useState} from 'react';
import {P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Menu, MenuItem, Button, NestedMenuItem} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const NestedMenuItemPage = () => {
  const [open, setOpen] = useState(false);
  const anchorElRef = useRef(null);
  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <>
      <PageHeader />
      <P>
        A special menu item which renders an infinitely deep nested menu on
        hover.
      </P>

      <SampleBox>
        <Menu open={open} onClose={toggleMenu} anchorElement={anchorElRef}>
          <MenuItem>New File</MenuItem>
          <NestedMenuItem content="Save As">
            <MenuItem>PNG</MenuItem>
            <MenuItem>SVG</MenuItem>
          </NestedMenuItem>
        </Menu>
        <Button variant="outlined" ref={anchorElRef} onClick={toggleMenu}>
          Open Menu
        </Button>
      </SampleBox>
      <TypeScript code={samples.nestedmenuitem.overview} />

      <Subheading>Reversal</Subheading>

      <SampleBox>
        <NestedMenuItem content="Regardless of how deep the menu goes">
          <NestedMenuItem content={'it will choose'}>
            <NestedMenuItem content="which direction to render">
              <NestedMenuItem content="to make sure it stays">
                <NestedMenuItem content="in the viewport">
                  <MenuItem>😄</MenuItem>
                </NestedMenuItem>
              </NestedMenuItem>
            </NestedMenuItem>
          </NestedMenuItem>
        </NestedMenuItem>
      </SampleBox>

      <ApiTable />
    </>
  );
};
