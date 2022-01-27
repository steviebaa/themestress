import React, {useState} from 'react';
import {Menu} from './Menu';
import {ReactHTMLProps, Transform} from '../core/definitions';

export interface ContextMenuProps extends ReactHTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  items: React.ReactNode[];
  width?: string;
  anchorOrigin?: Transform;
  transformOrigin?: Transform;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  items,
  ...props
}: ContextMenuProps) => {
  const [position, setPosition] = useState(null);
  const open = Boolean(position);

  const handleClose = () => {
    setPosition(null);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({x: e.clientX, y: e.clientY});
  };

  // Clone children and add onContextMenu prop
  const arrayifiedChildren = Array.isArray(children) ? children : [children];
  const clonedChildren = React.Children.map(arrayifiedChildren, child => {
    const existingFn = child.props.onContextMenu;
    const handleRightClick = (e: React.MouseEvent) => {
      existingFn && existingFn(e);
      handleContextMenu(e);
    };
    return React.cloneElement(child, {onContextMenu: handleRightClick});
  });

  return (
    <>
      {clonedChildren}
      <Menu
        className="_ContextMenu-Menu"
        open={open}
        onClose={handleClose}
        positionOverride={position}
        {...props}
      >
        {items}
      </Menu>
    </>
  );
};
