import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';

export interface NavigationBarProps {
  children: React.ReactNode;
  /* The index of the selected item. */
  selected: number;
  /* A callback for when an item is selected. */
  onSelectionChanged: (index: number) => void;
}

const StyledNavigationBar = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 80px;
  background-color: var(--sys-color-surface);

  z-index: var(--sys-z-index-navbar);
  display: inline-flex;
  justify-content: space-between;

  & :not(:nth-last-of-type()) {
    margin-right: 4px;
  }
  & :not(:first-of-type) {
    margin-left: 4px;
  }
`;

export const NavigationBar: React.FC<NavigationBarProps> = forwardRef(
  (
    {children, selected, onSelectionChanged, ...props},
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const handleSelectionChanged = (index: number) => {
      onSelectionChanged && onSelectionChanged(index);
    };

    const modifiedChildren = React.Children.map(children, (child, i) =>
      React.cloneElement(child as React.ReactElement, {
        __selected: i === selected,
        __click: () => handleSelectionChanged(i),
      }),
    );

    return (
      <StyledNavigationBar className="_NavigationBar" ref={ref} {...props}>
        {modifiedChildren}
      </StyledNavigationBar>
    );
  },
);
