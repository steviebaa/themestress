import React from 'react';
import styled from '@emotion/styled';
import {colorFromTheme, TColor} from '../core';

interface DividerProps {
  vertical?: boolean;
  weight?: number;
  bgColor?: TColor;
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

  background-color: ${({theme, bgColor: bg}) =>
    bg === undefined
      ? theme.palette.outline[theme.palette.mode]
      : colorFromTheme(theme, bg)};
  margin: ${({theme, margin}) => (margin ? `${theme.spacing * margin}px` : '')};
  margin-left: ${({theme, marginLeft}) =>
    marginLeft ? `${theme.spacing * marginLeft}px` : ''};
  margin-right: ${({theme, marginRight}) =>
    marginRight ? `${theme.spacing * marginRight}px` : ''};
  margin-top: ${({theme, marginTop}) =>
    marginTop ? `${theme.spacing * marginTop}px` : ''};
  margin-bottom: ${({theme, marginBottom}) =>
    marginBottom ? `${theme.spacing * marginBottom}px` : ''};
`;

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return <StyledDivider className="_Divider" {...props} />;
};
