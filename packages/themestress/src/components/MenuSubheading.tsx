import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { ReactHTMLProps } from '../core/definitions';

export interface MenuSubheadingProps extends ReactHTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

const Span = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 0px 8px;
	margin 0px 4px;
  font-weight: bolder;
`;

export const MenuSubheading: React.FC<MenuSubheadingProps> = ({
  className: _,
  children,
  ...props
}: MenuSubheadingProps) => {
  return (
    <Span className="_MenuSubheading" {...props}>
      {children}
    </Span>
  );
};
