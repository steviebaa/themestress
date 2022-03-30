import React, {MutableRefObject, useRef} from 'react';
import styled from '@emotion/styled';
import {NavigationItem} from './NavigationItem';

export interface NavigationRailProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selected: number;
  onTabChanged?: (i: number) => void;
}

const StyledMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const NavigationRail: React.FC<NavigationRailProps> = ({
  selected,
  onTabChanged,
  children,
  ...props
}: NavigationRailProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const refs: MutableRefObject<HTMLButtonElement>[] = [];

  let menuItemsCount = -1;
  const referencedChildren = React.Children.map(
    children,
    (child: React.ReactElement) => {
      if (child.type !== NavigationItem) return child;
      menuItemsCount++;
      const itemIndex = menuItemsCount;

      // Receive the ref that is added to the menuitem below when clicked
      const handleClick = () => {
        if (onTabChanged) onTabChanged(itemIndex);
      };

      // Add a ref to the menuitem
      const ref = useRef(null);
      refs.push(ref);

      return React.cloneElement(child, {
        ref,
        __click: handleClick,
        __selected: itemIndex === selected,
      });
    },
  );

  return (
    <StyledMenu className="_NavigationRail" ref={menuRef} {...props}>
      {referencedChildren}
    </StyledMenu>
  );
};
