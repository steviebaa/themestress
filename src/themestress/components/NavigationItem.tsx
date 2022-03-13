import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {TextButton, TextButtonProps} from './TextButton';

export interface NavigationItemProps extends TextButtonProps {
  __click?: (ref: ForwardedRef<HTMLButtonElement>) => void;
  __selected?: boolean;
  children?: React.ReactNode;
}

const StyledMenuItem = styled(TextButton)<NavigationItemProps>`
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  max-width: 360px;
  padding: 8px;
  margin: 0px 0px 2px 0px;
`;

export const NavigationItem: React.FC<NavigationItemProps> = forwardRef(
  (
    {onClick, __click, __selected, ...props}: NavigationItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledMenuItem
        className="_NavigationItem"
        ref={ref}
        onClick={e => {
          onClick && onClick(e);
          __click && __click(ref);
        }}
        disableRipple
        align="left"
        fontColor={
          __selected
            ? 'var(--sys-color-on-surface)'
            : 'var(--sys-color-outline)'
        }
        {...props}
      >
        {props.children}
      </StyledMenuItem>
    );
  },
);
