import React, { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';

import { Button } from './Button';

export interface NavigationMenuItemProps {
  handleClick?: (ref: ForwardedRef<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const StyledMenuItem = styled(Button)`
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  max-width: 360px;
  padding: 4px 8px;
  margin: 0px 0px 2px 0px;
`;

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = forwardRef(
  (props: NavigationMenuItemProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledMenuItem
        className="_MenuItem"
        ref={ref}
        onClick={() => props.handleClick(ref)}
        disableRipple
        noTransform
        align="left"
        variant="text"
        fontColor={['shade', '5', 'main']}
      >
        {props.children}
      </StyledMenuItem>
    );
  },
);
