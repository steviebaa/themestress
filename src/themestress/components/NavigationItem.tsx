import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {Button, ButtonProps} from './Button';

export interface NavigationItemProps extends ButtonProps {
  _internal_click?: (ref: ForwardedRef<HTMLButtonElement>) => void;
  _internal_is_selected?: boolean;
  children?: React.ReactNode;
}

const StyledMenuItem = styled(Button)<NavigationItemProps>`
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  max-width: 360px;
  padding: 8px;
  margin: 0px 0px 2px 0px;
  color: ${({theme, _internal_is_selected}) => {
    const {neutral, mode} = theme.palette;
    if (mode === 'light') {
      return neutral.tones[_internal_is_selected ? 90 : 60].hex;
    } else {
      return neutral.tones[_internal_is_selected ? 10 : 60].hex;
    }
  }};
`;

export const NavigationItem: React.FC<NavigationItemProps> = forwardRef(
  (
    {onClick, _internal_click, ...props}: NavigationItemProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledMenuItem
        className="_NavigationItem"
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
