import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import {Menu, MenuProps} from './Menu';
import {MenuItem, MenuItemProps} from './MenuItem';
import {ReactHTMLProps} from '../core/definitions';
import {RightArrow} from '../icons/RightArrow';

export interface NestedMenuItemProps
  extends ReactHTMLProps<HTMLButtonElement>,
    MenuItemProps {
  children: React.ReactNode;
  content: React.ReactNode;
  hideArrow?: boolean;
  menuProps?: MenuProps;
}

const Content = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const isInside = ({x, y}: {x: number; y: number}, rect: DOMRect) => {
  return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
};

export const NestedMenuItem: React.FC<NestedMenuItemProps> = ({
  content,
  children,
  hideArrow,
  menuProps,
  ...props
}: NestedMenuItemProps) => {
  const menuItemRef = useRef<HTMLButtonElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [anchorElement, setAnchorElement] = useState<Element>(null);
  const [anchorOrigin, setAnchorOrigin] = useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const [transformOrigin, setTransformOrigin] = useState({
    vertical: 'top',
    horizontal: 'left',
  });

  const open = Boolean(anchorElement);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const farRight = rect.x + rect.width;
    const farBottom = rect.y + rect.height;

    const horizontalOverflow = farRight > window.innerWidth;
    const verticalOverflow = farBottom > window.innerHeight;

    const aVertical = verticalOverflow ? 'bottom' : 'top';
    const tVertical = verticalOverflow ? 'bottom' : 'top';

    const aHorizontal = horizontalOverflow ? 'left' : 'right';
    const tHorizontal = horizontalOverflow ? 'right' : 'left';

    if (horizontalOverflow || verticalOverflow) {
      setAnchorOrigin({vertical: aVertical, horizontal: aHorizontal});
      setTransformOrigin({vertical: tVertical, horizontal: tHorizontal});
    }
  }, [ref.current, open]);

  const handleOpen = (e: React.MouseEvent) => setAnchorElement(e.currentTarget);

  const handleClose = () => setAnchorElement(null);

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!ref || !ref.current) return;

    const coords = {x: e.clientX, y: e.clientY};
    const rect = ref.current.getBoundingClientRect();

    if (!isInside(coords, rect)) handleClose();
  };

  return (
    <>
      <MenuItem
        className="_NestedMenuItem"
        onMouseOver={handleOpen}
        onMouseLeave={handleMouseLeave}
        ref={menuItemRef}
        {...props}
      >
        <Content>
          {content}
          {!hideArrow && <RightArrow size="sm" />}
        </Content>
      </MenuItem>

      <Menu
        className="_NestedMenu"
        ref={ref}
        anchorElement={menuItemRef}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        {...menuProps}
      >
        {children}
      </Menu>
    </>
  );
};
