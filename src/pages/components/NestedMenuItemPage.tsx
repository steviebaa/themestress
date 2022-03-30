import React, {useRef, useState} from 'react';
import {samples} from '@core/samples';
import {P, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {CodeBlock} from '@components/CodeBlock';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';
import {
  Menu,
  MenuItem,
  NestedMenuItem,
  TextButton,
  OutlinedButton,
} from '@themestress/components';

export const NestedMenuItemPage = () => {
  const [open, setOpen] = useState(false);
  const anchorElRef = useRef(null);
  const toggleMenu = () => setOpen(prev => !prev);

  const [open2, setOpen2] = useState(false);
  const anchorElRef2 = useRef(null);
  const toggleMenu2 = () => setOpen2(prev => !prev);

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
        <OutlinedButton ref={anchorElRef} onClick={toggleMenu}>
          Open Menu
        </OutlinedButton>
      </SampleBox>
      <CodeBlock code={samples.nestedmenuitem.overview} />

      <Subheading>Reversal</Subheading>

      <SampleBox>
        <Menu
          open={open2}
          onClose={toggleMenu2}
          anchorElement={anchorElRef2}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
          <NestedMenuItem content={'it will choose'}>
            <NestedMenuItem content="which direction to render">
              <NestedMenuItem content="to make sure it stays">
                <NestedMenuItem content="in the viewport">
                  <MenuItem>😄</MenuItem>
                </NestedMenuItem>
              </NestedMenuItem>
            </NestedMenuItem>
          </NestedMenuItem>
        </Menu>
        <TextButton ref={anchorElRef2} onClick={toggleMenu2}>
          Regardless of how deep the menu goes
        </TextButton>
      </SampleBox>

      <ApiTable />
    </>
  );
};
