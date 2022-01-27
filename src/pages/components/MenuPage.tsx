import React, {useRef, useState} from 'react';
import {P, Code, Subheading} from '@components/StyledTypography';
import {SampleBox} from '@components/SampleBox';
import {TypeScript} from '@components/TypeScript';
import {samples} from '@core/samples';
import {Menu, MenuItem, Button} from '@themestress/components';
import {ApiTable} from '@components/ApiTable';
import {PageHeader} from '@components/ImportSample';

export const MenuPage = () => {
  const [open, setOpen] = useState(false);
  const anchorElRef = useRef(null);
  const toggleMenu = () => setOpen(prev => !prev);

  const [open2, setOpen2] = useState(false);
  const anchorElRef2 = useRef(null);
  const toggleMenu2 = () => setOpen2(prev => !prev);

  const [open3, setOpen3] = useState(false);
  const anchorElRef3 = useRef(null);
  const toggleMenu3 = () => setOpen3(prev => !prev);

  return (
    <>
      <PageHeader />
      <P>A dropdown menu that renders via a React Portal.</P>

      <SampleBox>
        <Menu open={open} onClose={toggleMenu} anchorElement={anchorElRef}>
          <MenuItem>New File</MenuItem>
          <MenuItem>Save as</MenuItem>
        </Menu>
        <Button variant="outlined" ref={anchorElRef} onClick={toggleMenu}>
          Open Menu
        </Button>
      </SampleBox>
      <TypeScript code={samples.menu.overview} />

      {/* ============================================================= */}
      {/* ============================================================= */}

      <Subheading>Transform</Subheading>
      <P>
        You can manipulate the position of the menu to its anchor element with
        the <Code>anchorOrigin</Code> and <Code>transformOrigin</Code> props.
      </P>

      <P>
        The <Code>anchorOrigin</Code> prop will let you choose the anchor point
        of the anchor element (E.g. top-right). The <Code>transformOrigin</Code>{' '}
        prop will then allow you to translate the <Code>Menu</Code> itself.
      </P>

      <P>
        For example, to position the top-center of the menu to the top-right of
        the button, we can apply the props seen in the snippet below.
      </P>

      <SampleBox>
        <Menu
          open={open2}
          onClose={toggleMenu2}
          anchorElement={anchorElRef2}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          transformOrigin={{vertical: 'top', horizontal: 'center'}}
        >
          <MenuItem>New File</MenuItem>
        </Menu>
        <Button variant="outlined" ref={anchorElRef2} onClick={toggleMenu2}>
          Transform Position
        </Button>
      </SampleBox>
      <TypeScript code={samples.menu.transform} />

      {/* ============================================================= */}
      {/* ============================================================= */}

      <Subheading>Position Override</Subheading>
      <P>
        The <Code>positionOverride</Code> prop allows you to render the menu at
        any absolute position on the window. A good example of where this is
        useful is the <Code>ContextMenu</Code>, where the menu is rendered at
        the position of the mouse.
      </P>

      <SampleBox>
        <Menu
          open={open3}
          onClose={toggleMenu3}
          anchorElement={anchorElRef3}
          positionOverride={{x: 200, y: 200}}
        >
          <MenuItem>New File</MenuItem>
        </Menu>
        <Button variant="outlined" ref={anchorElRef3} onClick={toggleMenu3}>
          Position Override
        </Button>
      </SampleBox>
      <TypeScript code={samples.menu.positionOverride} />

      <ApiTable />
    </>
  );
};
