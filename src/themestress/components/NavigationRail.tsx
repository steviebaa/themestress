import React, {MutableRefObject, useEffect, useRef} from 'react';
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

const Indicator = styled.span`
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 40, 0.1);
  margin-bottom: 4;
  border-radius: 4px;
  position: absolute;
`;

export const NavigationRail: React.FC<NavigationRailProps> = ({
  selected,
  onTabChanged,
  children,
  ...props
}: NavigationRailProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
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
        _internal_click: handleClick,
        _internal_is_selected: itemIndex === selected,
      });
    },
  );

  useEffect(() => {
    const ref = refs[selected];
    if (!ref) return;
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
    <StyledMenu className="_NavigationRail" ref={menuRef} {...props}>
      {<Indicator className="_NavigationRail-Indicator" ref={indicatorRef} />}
      {referencedChildren}
    </StyledMenu>
  );
};
