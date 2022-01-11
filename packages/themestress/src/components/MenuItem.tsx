import React from 'react';
import styled from '@emotion/styled';

import { Button, ButtonProps } from './Button';
import { ReactHTMLProps } from '../core/definitions';

export type MenuItemProps = ButtonProps &
  ReactHTMLProps<HTMLButtonElement> & {
    content: React.ReactNode;
  };

const StyledMenuItem = styled(Button)`
  padding: 6px 16px;
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

export const MenuItem: React.FC<MenuItemProps> = ({
  content,
  ...props
}: MenuItemProps) => {
  return (
    <StyledMenuItem className="_MenuItem" variant="text" {...props}>
      {content}
    </StyledMenuItem>
  );
};
