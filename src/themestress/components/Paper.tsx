import React, {ForwardedRef, forwardRef} from 'react';
import styled from '@emotion/styled';
import {
  colorFromTheme,
  onColorFromTheme,
  getBreakpoint,
  getMarginAndPadding,
} from '../core/themeUtils';
import {TColor, BreakPoint} from '../core/definitions';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  fontColor?: TColor;
  bgColor?: TColor;
  borderColor?: TColor;
  elevation?: number;
  square?: boolean;
  radius?: number;
  width?: BreakPoint;
  height?: string;
  variant?: 'elevated' | 'outlined';

  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;

  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
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
  width: ${({theme, width}) =>
    width === undefined ? '' : `${getBreakpoint(theme, width)}`};
  max-width: ${({theme, width}) =>
    width === undefined ? '' : `${getBreakpoint(theme, width)}`};
  height: ${({theme, height}) => `${height || ''}`};
  ${props => getMarginAndPadding(props)}
  border-radius: ${({theme, radius, square}) => {
    if (square) return '';
    return `${radius === undefined ? theme.spacing : theme.spacing * radius}px`;
  }};
  box-shadow: ${({variant, elevation}) =>
    variant === 'elevated' ? shadow(elevation) : 'initial'};
  border: ${({theme, variant}) =>
    variant === 'outlined'
      ? `1px solid ${theme.palette.outline[theme.palette.mode]}`
      : 'initial'};
  background-color: ${({theme, bgColor}) => {
    let color;
    if (bgColor === undefined) {
      const {neutral: neutral, mode} = theme.palette;
      const isLight = mode === 'light';
      color = isLight ? neutral[50].main : neutral[850].main;
    } else {
      color = colorFromTheme(theme, bgColor);
    }
    return color;
  }};
  color: ${({theme, bgColor, fontColor}) => {
    let color;
    if (bgColor === undefined) {
      const {neutral: neutral, mode} = theme.palette;
      const isLight = mode === 'light';
      color = isLight ? neutral[50].on : neutral[850].on;
    } else {
      color = onColorFromTheme(theme, bgColor);
    }
    if (fontColor !== undefined) color = colorFromTheme(theme, fontColor);
    return color;
  }};
  border-color: ${({theme, borderColor}) =>
    colorFromTheme(theme, borderColor || '')};
`;

export const Paper: React.FC<PaperProps> = forwardRef(
  (
    {variant, elevation, ...props}: PaperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (variant === undefined) variant = 'elevated';
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
