import React, { MutableRefObject, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { NavigationMenuItem } from './NavigationMenuItem';

export interface NavigationMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selected: number;
  onTabChanged?: (i: number) => void;
}

const StyledMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Indicator = styled.span`
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 40, 0.1);
  margin-bottom: 4;
  border-radius: 4px;
  position: absolute;
`;

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  selected,
  onTabChanged,
  children,
  ...props
}: NavigationMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const refs: MutableRefObject<HTMLButtonElement>[] = [];

  const referencedChildren = React.Children.map(
    children,
    (child: React.ReactElement) => {
      if (child.type !== NavigationMenuItem) return child;

      // Receive the ref that is added to the menuitem below when clicked
      const handleClick = (elementRef: MutableRefObject<HTMLButtonElement>) => {
        const index = refs.findIndex((el) => el === elementRef);
        if (onTabChanged) onTabChanged(index);
      };

      // Add a ref to the menuitem
      const ref = useRef(null);
      refs.push(ref);

      return React.cloneElement(child, { ref, handleClick });
    },
  );

  useEffect(() => {
    const ref = refs[selected];
    const buttonRect = ref.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    // Animate indicator
    indicatorRef.current.animate(
      [
        {
          height: buttonRect.height + 'px',
          width: buttonRect.width + 'px',
          left: buttonRect.left - menuRect.x + 'px',
          top: buttonRect.top - menuRect.y + 'px',
        },
      ],
      {
        duration: 400,
        iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards',
      },
    );
  }, [refs, selected]);

  return (
    <StyledMenu className="_Menu" ref={menuRef} {...props}>
      {<Indicator ref={indicatorRef} />}
      {referencedChildren}
    </StyledMenu>
  );
};
