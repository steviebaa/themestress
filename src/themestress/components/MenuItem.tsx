import React, {MutableRefObject} from 'react';
import styled from '@emotion/styled';
import {Button, ButtonProps} from './Button';
import {ReactHTMLProps} from '../core/definitions';
import {getMarginAndPadding} from '../core/themeUtils';

export interface MenuItemProps
  extends ButtonProps,
    ReactHTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledMenuItem = styled(Button)`
  ${props => getMarginAndPadding(props)}
  padding: ${({theme, padding}) =>
    padding !== undefined ? `${theme.spacing * padding}px` : '6px 16px'};
  cursor: pointer;
  line-height: 1.5;
  overflow: hidden;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0px;
  text-align: left;
  text-transform: none;
  justify-content: left;
  color: inherit;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const MenuItem: React.FC<MenuItemProps> = React.forwardRef(
  (props: MenuItemProps, ref: MutableRefObject<HTMLButtonElement>) => {
    return (
      <StyledMenuItem
        ref={ref}
        className="_MenuItem"
        variant="text"
        {...props}
      />
    );
  },
);
