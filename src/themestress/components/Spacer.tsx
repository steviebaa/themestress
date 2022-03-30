import React from 'react';
import styled from '@emotion/styled';
import {BreakpointOrder} from '../core';

interface SpacerProps {
  vertical?: boolean;
  size: string;
  breakpoints?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

const SpacerStyled = styled.div<SpacerProps>`
  display: ${({vertical}) => (vertical ? 'block' : 'inline-block')};
  height: ${({size, vertical}) => (vertical ? size : '1px')};
  min-height: ${({size, vertical}) => (vertical ? size : '1px')};
  width: ${({size, vertical}) => (vertical ? '1px' : size)};
  min-width: ${({size, vertical}) => (vertical ? '1px' : size)};
  margin: 0;
  padding: 0;
  ${({theme, breakpoints, vertical: v}) => {
    return BreakpointOrder.reverse().map(bp => {
      if (!breakpoints) return '';
      const s = breakpoints[bp];
      if (!s) return '';
      return `
			@media (max-width: ${theme.breakpoints[bp]}) {
				height: ${v ? s : '1px'};
				min-height: ${v ? s : '1px'};
				width: ${v ? '100%' : s};
				min-width: ${v ? '100%' : s};
  		}`;
    });
  }};
`;

export const Spacer: React.FC<SpacerProps> = ({...props}: SpacerProps) => {
  return <SpacerStyled className="_Spacer" {...props} />;
};
