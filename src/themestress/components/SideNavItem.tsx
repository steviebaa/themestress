import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {Button, ButtonProps} from './Button';

export interface SideNavItemProps extends ButtonProps {
  _internal_click?: (ref: ForwardedRef<HTMLButtonElement>) => void;
  _internal_is_selected?: boolean;
  children?: React.ReactNode;
}

const StyledMenuItem = styled(Button)<SideNavItemProps>`
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  max-width: 360px;
  padding: 8px;
  margin: 0px 0px 2px 0px;
  color: ${({theme, _internal_is_selected}) => {
    const {neutral: neutral, mode} = theme.palette;
    if (mode === 'light') {
      return neutral[_internal_is_selected ? 900 : 600].main;
    } else {
      return neutral[_internal_is_selected ? 100 : 600].main;
    }
  }};
`;

export const SideNavItem: React.FC<SideNavItemProps> = forwardRef(
  (
    {onClick, _internal_click, ...props}: SideNavItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledMenuItem
        className="_SideNavItem"
        ref={ref}
        onClick={e => {
          if (onClick) onClick(e);
          _internal_click(ref);
        }}
        disableRipple
        noTransform
        align="left"
        variant="text"
        _internal_is_selected={props._internal_is_selected}
        {...props}
      >
        {props.children}
      </StyledMenuItem>
    );
  },
);
