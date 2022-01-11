import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { ReactHTMLProps } from '../core/definitions';
import { RightArrow } from '../icons/RightArrow';

export interface NestedMenuItemProps extends ReactHTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  content: string;
}

const Content = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const isInside = ({ x, y }: { x: number; y: number }, rect: DOMRect) => {
  return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
};

export const NestedMenuItem: React.FC<NestedMenuItemProps> = ({
  content,
  children,
  className: _,
  ...props
}: NestedMenuItemProps) => {
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
      setAnchorOrigin({ vertical: aVertical, horizontal: aHorizontal });
      setTransformOrigin({ vertical: tVertical, horizontal: tHorizontal });
    }
  }, [ref.current, open]);

  const handleOpen = (e: React.MouseEvent) => setAnchorElement(e.currentTarget);

  const handleClose = () => setAnchorElement(null);

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!ref || !ref.current) return;

    const coords = { x: e.clientX, y: e.clientY };
    const rect = ref.current.getBoundingClientRect();

    if (!isInside(coords, rect)) handleClose();
  };

  return (
    <>
      <MenuItem
        className="_NestedMenuItem"
        onMouseOver={handleOpen}
        onMouseLeave={handleMouseLeave}
        content={
          <Content>
            {content}
            <RightArrow size="sm" />
          </Content>
        }
        {...props}
      />

      <Menu
        ref={ref}
        anchorElement={anchorElement}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {children}
      </Menu>
    </>
  );
};
