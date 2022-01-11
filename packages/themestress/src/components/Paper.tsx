import React, { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';

import { TColor } from '../core/definitions';
import { colorFromTheme, onColorFromTheme } from '../core/themeUtils';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  fontColor?: TColor;
  bgColor?: TColor;
  elevation?: number;
  square?: boolean;
  margin?: number;
  padding?: number;
  radius?: number;
  size?: number;
  variant?: 'elevation' | 'outlined';
}

const shadow = (elevation: number) => {
  // Fraction function
  const f = (max: number) => Math.ceil((elevation / 24) * max);

  // Shadow line 1 and line 2
  const l1 = `0px ${f(11)}px ${f(15)}px ${f(-7)}px rgb(0 0 0 / 24%)`;
  const l2 = `0px ${f(9)}px ${f(46)}px ${f(8)}px rgb(0 0 0 / 14%)`;

  return `${l1},${l2}`;
};

const StyledDiv = styled.div<PaperProps>`
  font-family: Roboto, Helvetica, Arial, sans-serif;

  max-width: ${({ size }) => (size === undefined ? 'initial' : `${size}%`)};

  margin: ${({ theme, margin }) =>
    margin === undefined ? 'initial' : `${theme.spacing * margin}px`};

  padding: ${({ theme, padding }) =>
    padding === undefined ? 'initial' : `${theme.spacing * padding}px`};

  border-radius: ${({ theme, radius, square }) => {
    if (square) return 'initial';
    return `${radius === undefined ? theme.spacing : theme.spacing * radius}px`;
  }};

  box-shadow: ${({ variant, elevation }) =>
    variant === 'elevation' ? shadow(elevation) : 'initial'};

  border: ${({ theme, variant }) =>
    variant === 'outlined'
      ? `1px solid ${theme.palette.outline[theme.palette.mode]}`
      : 'initial'};

  background-color: ${({ theme, bgColor }) => colorFromTheme(theme, bgColor)};

  color: ${({ theme, bgColor }) => onColorFromTheme(theme, bgColor)};
`;

export const Paper: React.FC<PaperProps> = forwardRef(
  (
    { variant, elevation, ...props }: PaperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (variant === undefined) variant = 'elevation';
    if (elevation === undefined) elevation = 1;

    if (elevation < 0 || elevation > 24) {
      console.error('Paper: elevation should be between 0 and 24 inclusive.');
    }

    return (
      <StyledDiv
        ref={ref}
        className="_Paper"
        variant={variant}
        elevation={elevation}
        {...props}
      >
        {props.children}
      </StyledDiv>
    );
  },
);
