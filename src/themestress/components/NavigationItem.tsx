import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {TextButton, TextButtonProps} from './TextButton';

export interface NavigationItemProps extends TextButtonProps {
  __click?: (ref: ForwardedRef<HTMLButtonElement>) => void;
  __selected?: boolean;
  children?: React.ReactNode;
}

const StyledNavigationItem = styled(TextButton)<NavigationItemProps>`
  color: var(--sys-color-on-surface);
  background-color: transparent;
  padding: 0px 16px;
  ${({__selected: s}) => s && 'background-image: var(--sys-overlay-level-4)'};

  :hover {
    ${({__selected: s}) => s && 'background-image: var(--sys-overlay-level-2)'};
  }
`;

export const NavigationItem: React.FC<NavigationItemProps> = forwardRef(
  (
    {onClick, __click, ...props}: NavigationItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledNavigationItem
        ref={ref}
        className="_NavigationItem"
        align="left"
        fontColor={
          props.__selected
            ? 'var(--sys-color-on-surface)'
            : 'var(--sys-color-outline)'
        }
        onClick={e => {
          onClick && onClick(e);
          __click && __click(ref);
        }}
        {...props}
      >
        {props.children}
      </StyledNavigationItem>
    );
  },
);
