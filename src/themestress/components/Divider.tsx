import React from 'react';
import styled from '@emotion/styled';
import {getMarginAndPadding} from '../core';

interface DividerProps {
  vertical?: boolean;
  weight?: number;
  bgColor?: string;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}

const StyledDivider = styled.hr<DividerProps>`
  width: ${({vertical, weight}) => (vertical ? (weight || 1) + 'px' : '100%')};
  height: ${({vertical, weight}) => (vertical ? 'auto' : (weight || 1) + 'px')};
  margin: 0;
  padding: 0;
  border: none;
  display: inline-block;
  box-sizing: border-box;
  overflow: visible;
  align-self: stretch;

  background-color: ${({bgColor}) => bgColor ?? 'var(--sys-color-outline)'};

  ${props => getMarginAndPadding(props)};
`;

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return <StyledDivider className="_Divider" {...props} />;
};
