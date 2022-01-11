import React, { useState } from 'react';

import { Menu } from './Menu';
import { ReactHTMLProps } from '../core/definitions';

export interface ContextMenuProps extends ReactHTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  items: React.ReactNode[];
  width?: string;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className: _,
  children,
  ...props
}: ContextMenuProps) => {
  const [position, setPosition] = useState(null);
  const open = Boolean(position);

  const handleClose = () => {
    setPosition(null);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      <Menu open={open} onClose={handleClose} positionOverride={position}>
        {props.items}
      </Menu>
    </div>
  );
};
